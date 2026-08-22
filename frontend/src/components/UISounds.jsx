import { useEffect } from "react";

export const UISounds = () => {
  useEffect(() => {
    let ctx = null;

    const ensureCtx = () => {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      return ctx;
    };

    const clickKnock = () => {
      const c = ensureCtx();
      if (c.state !== "running") return;
      const t = c.currentTime;

      const filter = c.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1100;

      const osc = c.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.11);
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.085, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
      osc.connect(g).connect(filter).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.18);

      const warm = c.createOscillator();
      warm.type = "sine";
      warm.frequency.setValueAtTime(210, t);
      const gw = c.createGain();
      gw.gain.setValueAtTime(0, t);
      gw.gain.linearRampToValueAtTime(0.03, t + 0.01);
      gw.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
      warm.connect(gw).connect(c.destination);
      warm.start(t);
      warm.stop(t + 0.22);
    };

    const isInteractive = (el) =>
      el && el.closest && el.closest("button, a, select, [role='button']");

    const onDown = (e) => {
      if (isInteractive(e.target)) clickKnock();
    };

    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      if (ctx) ctx.close();
    };
  }, []);

  return null;
};
