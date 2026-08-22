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

    const hoverBrush = () => {
      const now = performance.now();
      if (now - lastHover < 1000) return;
      lastHover = now;
      const c = ensureCtx();
      if (c.state !== "running") return;
      const t = c.currentTime;
      const drift = 1 + (Math.random() - 0.5) * 0.08;

      const filter = c.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 900;
      filter.Q.value = 0.5;

      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540 * drift, t);
      osc.frequency.exponentialRampToValueAtTime(430 * drift, t + 0.1);
      const g = c.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.022, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      osc.connect(g).connect(filter).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.16);
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

    const onOver = (e) => {
      if (isInteractive(e.target)) hoverBrush();
    };
    const onDown = (e) => {
      if (isInteractive(e.target)) clickKnock();
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
