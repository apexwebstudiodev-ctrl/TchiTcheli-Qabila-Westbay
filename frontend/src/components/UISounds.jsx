import { useEffect } from "react";

export const UISounds = () => {
  useEffect(() => {
    let ctx = null;
    let lastHover = 0;

    const ensureCtx = () => {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      return ctx;
    };

    const hoverTick = () => {
      const now = performance.now();
      if (now - lastHover < 90) return;
      lastHover = now;
      const c = ensureCtx();
      if (c.state !== "running") return;
      const t = c.currentTime;
      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(2200, t);
      osc.frequency.exponentialRampToValueAtTime(1500, t + 0.05);
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.028, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      osc.connect(g).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.09);
    };

    const clickPop = () => {
      const c = ensureCtx();
      if (c.state !== "running") return;
      const t = c.currentTime;

      const osc = c.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(540, t);
      osc.frequency.exponentialRampToValueAtTime(150, t + 0.09);
      const g = c.createGain();
      g.gain.setValueAtTime(0.09, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
      osc.connect(g).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.15);

      const snap = c.createOscillator();
      snap.type = "sine";
      snap.frequency.setValueAtTime(1800, t);
      const gs = c.createGain();
      gs.gain.setValueAtTime(0.035, t);
      gs.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
      snap.connect(gs).connect(c.destination);
      snap.start(t);
      snap.stop(t + 0.04);
    };

    const isInteractive = (el) =>
      el && el.closest && el.closest("button, a, select, [role='button']");

    const onOver = (e) => {
      if (isInteractive(e.target)) hoverTick();
    };
    const onDown = (e) => {
      if (isInteractive(e.target)) clickPop();
    };

    window.addEventListener("mouseover", onOver);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("pointerdown", onDown);
      if (ctx) ctx.close();
    };
  }, []);

  return null;
};
