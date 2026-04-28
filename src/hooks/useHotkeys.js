import { useEffect } from "react";

export default function useHotkeys(handlers, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (!handlers) return;

    function onKeyDown(e) {
      for (const h of handlers) {
        if (!h) continue;

        const keyOk = (h.key || "").toLowerCase() === (e.key || "").toLowerCase();
        if (!keyOk) continue;

        const metaOk = (h.metaKey ?? false) ? e.metaKey : !(h.metaKey ?? false);
        const ctrlOk = (h.ctrlKey ?? false) ? e.ctrlKey : !(h.ctrlKey ?? false);
        const altOk = (h.altKey ?? false) ? e.altKey : !(h.altKey ?? false);
        const shiftOk = (h.shiftKey ?? false) ? e.shiftKey : !(h.shiftKey ?? false);

        if (!metaOk || !ctrlOk || !altOk || !shiftOk) continue;

        // If you're typing into an input/textarea/contentEditable, only allow
        // handlers that explicitly opt-in via allowInInput.
        const target = e.target;
        const isTypingTarget =
          target instanceof HTMLElement &&
          (target.isContentEditable ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT");
        if (isTypingTarget && !h.allowInInput) continue;

        h.onMatch?.(e);
        return;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, handlers]);
}

