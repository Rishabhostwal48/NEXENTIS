/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft } from "lucide-react";
import useHotkeys from "../../hooks/useHotkeys";
import { commandPaletteItems } from "../../data/commandPalette";
import { useCommandPalette } from "../../context/CommandPaletteContext";

function scoreItem(item, q) {
  if (!q) return 1;
  const query = q.trim().toLowerCase();
  if (!query) return 1;

  const haystack = [
    item.label,
    item.description,
    ...(item.keywords || []),
    item.href,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (haystack.includes(query)) return 100;

  // Simple fuzzy-ish: every char must appear in order.
  let i = 0;
  for (const ch of query) {
    i = haystack.indexOf(ch, i);
    if (i === -1) return 0;
    i++;
  }
  return 10;
}

export default function CommandPalette() {
  const { open, closePalette, togglePalette } = useCommandPalette();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => {
    const scored = commandPaletteItems
      .map((item) => ({ item, score: scoreItem(item, query) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item);
    return scored.slice(0, 14);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
  }, [open, query]);

  useHotkeys(
    [
      {
        key: "k",
        ctrlKey: true,
        allowInInput: false,
        onMatch: (e) => {
          e.preventDefault();
          togglePalette();
        },
      },
      {
        key: "Escape",
        allowInInput: true,
        onMatch: (e) => {
          if (!open) return;
          e.preventDefault();
          closePalette();
        },
      },
    ],
    true
  );

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = items[activeIndex];
        if (!item) return;
        if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
        else navigate(item.href);
        closePalette();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, items, activeIndex, navigate, closePalette]);

  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.querySelector(`[data-cmd-index="${activeIndex}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 py-16 md:py-24"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePalette();
      }}
    >
      <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm" />

      <div className="relative w-full max-w-2xl rounded-xl glass gradient-border shadow-soft-lg animate-scale-in overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 dark:border-neutral-800/80">
          <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components, docs, pages..."
            className="w-full bg-transparent outline-none text-sm text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          />
          <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            <kbd className="px-2 py-1 rounded-md bg-white/50 dark:bg-neutral-900/40 border border-white/20 dark:border-neutral-800/60">
              Ctrl
            </kbd>
            <span>+</span>
            <kbd className="px-2 py-1 rounded-md bg-white/50 dark:bg-neutral-900/40 border border-white/20 dark:border-neutral-800/60">
              K
            </kbd>
          </div>
        </div>

        <div ref={listRef} className="max-h-[420px] overflow-auto p-2">
          {items.length === 0 ? (
            <div className="px-3 py-8 text-sm text-neutral-600 dark:text-neutral-400 text-center">
              No results.
            </div>
          ) : (
            items.map((item, idx) => {
              const Icon = item.icon;
              const active = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  data-cmd-index={idx}
                  className={[
                    "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-normal ease-ease-out-cubic",
                    active
                      ? "bg-white/60 dark:bg-neutral-900/50 shadow-soft-sm"
                      : "hover:bg-white/50 dark:hover:bg-neutral-900/40",
                  ].join(" ")}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
                    else navigate(item.href);
                    closePalette();
                  }}
                >
                  <span className="h-9 w-9 rounded-lg bg-white/60 dark:bg-neutral-900/40 border border-white/30 dark:border-neutral-800/70 flex items-center justify-center shrink-0">
                    {Icon ? (
                      <Icon size={18} className="text-neutral-800 dark:text-neutral-200" />
                    ) : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 truncate">
                      {item.label}
                    </span>
                    {item.description ? (
                      <span className="block text-xs text-neutral-600 dark:text-neutral-400 truncate">
                        {item.description}
                      </span>
                    ) : null}
                  </span>
                  <span className="hidden sm:flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <CornerDownLeft size={16} />
                    <span>Enter</span>
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
