import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { playgroundRegistry } from "../data/playgroundRegistry.jsx";
import { useSearchParams } from "react-router-dom";

function Control({ control, value, onChange }) {
  if (control.type === "text") {
    return (
      <Input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={control.label}
      />
    );
  }

  if (control.type === "select") {
    return (
      <div className="relative">
        <Select value={value ?? ""} onChange={(e) => onChange(e.target.value)}>
          {control.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">
          ▾
        </span>
      </div>
    );
  }

  if (control.type === "boolean") {
    return (
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={[
          "h-10 w-full rounded-md border px-3 text-sm font-medium transition-all duration-normal ease-ease-out-cubic text-left",
          value
            ? "border-brand-500/40 bg-brand-500/10 text-neutral-900 dark:text-neutral-50"
            : "border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300",
        ].join(" ")}
        aria-pressed={!!value}
      >
        {value ? "On" : "Off"}
      </button>
    );
  }

  return null;
}

export default function Playground() {
  const [searchParams] = useSearchParams();
  const [activeId, setActiveId] = useState(playgroundRegistry[0]?.id ?? "button");
  const active = useMemo(
    () => playgroundRegistry.find((x) => x.id === activeId) ?? playgroundRegistry[0],
    [activeId]
  );

  const [propsState, setPropsState] = useState(active?.defaultProps ?? {});
  const [modalOpen, setModalOpen] = useState(false);

  // When switching components, reset controls to defaults for that component.
  function setActive(nextId) {
    const next = playgroundRegistry.find((x) => x.id === nextId);
    setActiveId(nextId);
    setPropsState(next?.defaultProps ?? {});
    setModalOpen(false);
  }

  useEffect(() => {
    const fromQuery = searchParams.get("c");
    if (!fromQuery) return;
    if (fromQuery === activeId) return;
    const exists = playgroundRegistry.some((x) => x.id === fromQuery);
    if (exists) setActive(fromQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 lg:p-12">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Playground
            </h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Tune props live and copy the mental model into your app. No ceremony.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" onClick={() => setPropsState(active?.defaultProps ?? {})}>
              Reset
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-3 p-0 overflow-hidden">
            <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Components</p>
            </div>
            <div className="p-2">
              {playgroundRegistry.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={[
                      "w-full rounded-lg px-3 py-2 text-left transition-all duration-normal ease-ease-out-cubic",
                      isActive
                        ? "bg-brand-500/10 text-neutral-900 dark:text-neutral-50 shadow-soft-sm"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300",
                    ].join(" ")}
                  >
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">{item.description}</p>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card className="lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Props</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Edit in real time</p>
              </div>
              <div className="md:hidden">
                <Button variant="outline" size="sm" onClick={() => setPropsState(active?.defaultProps ?? {})}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {(active?.controls ?? []).map((control) => (
                <div key={control.key} className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wide">
                    {control.label}
                  </label>
                  <Control
                    control={control}
                    value={propsState[control.key]}
                    onChange={(next) => setPropsState((p) => ({ ...p, [control.key]: next }))}
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-5">
            <div className="mb-4">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Preview</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Instant feedback</p>
            </div>

            <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-glow-radial pointer-events-none" />
              <div className="relative flex items-center justify-center min-h-[220px]">
                {active?.render?.(propsState, { open: modalOpen, setOpen: setModalOpen })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
