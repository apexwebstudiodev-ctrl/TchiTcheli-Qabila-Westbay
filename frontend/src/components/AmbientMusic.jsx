import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const CHORDS = [
  [130.81, 164.81, 196.0, 246.94, 293.66],
  [110.0, 130.81, 164.81, 196.0, 261.63],
  [87.31, 130.81, 174.61, 220.0, 261.63],
  [98.0, 146.83, 196.0, 246.94, 293.66],
];

const SPARKLES = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

export const AmbientMusic = () => {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);
  const masterRef = useRef(null);
  const timerRef = useRef(null);

  const playChord = (ctx, out, freqs) => {
    const now = ctx.currentTime;
    freqs.forEach((f, i) => {
      [0, 1].forEach((layer) => {
        const osc = ctx.createOscillator();
        osc.type = layer === 0 ? "triangle" : "sine";
        osc.frequency.value = f * (layer === 0 ? 1 : 2);
        osc.detune.value = (Math.random() - 0.5) * 6;
        const gain = ctx.createGain();
        const peak = (layer === 0 ? 0.05 : 0.018) / (1 + i * 0.15);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(peak, now + 1.8);
        gain.gain.setValueAtTime(peak, now + 2.6);
        gain.gain.linearRampToValueAtTime(0, now + 5.2);
        osc.connect(gain).connect(out);
        osc.start(now);
        osc.stop(now + 5.4);
      });
    });
  };

  const playSparkle = (ctx, out) => {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = SPARKLES[Math.floor(Math.random() * SPARKLES.length)];
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
    osc.connect(gain).connect(out);
    osc.start(now);
    osc.stop(now + 2.6);
  };

  const start = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const master = ctx.createGain();
    master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.4;
    master.connect(filter).connect(ctx.destination);
    master.gain.linearRampToValueAtTime(1, ctx.currentTime + 2.5);

    let step = 0;
    const tick = () => {
      playChord(ctx, master, CHORDS[step % CHORDS.length]);
      if (Math.random() > 0.35) playSparkle(ctx, master);
      step += 1;
    };
    tick();
    timerRef.current = setInterval(tick, 4800);
    ctxRef.current = ctx;
    masterRef.current = master;
    setPlaying(true);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    const ctx = ctxRef.current;
    if (ctx) {
      masterRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
      setTimeout(() => ctx.close(), 1400);
    }
    ctxRef.current = null;
    setPlaying(false);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onClick={playing ? stop : start}
      data-testid="ambient-music-toggle"
      data-playing={playing}
      aria-label={playing ? "Mute ambient music" : "Play ambient music"}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-tchi-coral hover:text-tchi-coral focus:outline-none focus:ring-2 focus:ring-tchi-coral"
    >
      {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
      <span>{playing ? "Lounge sounds on" : "Lounge sounds"}</span>
      {playing && (
        <span className="flex h-3.5 items-end gap-[3px]" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-[3px] origin-bottom animate-eq rounded-full bg-tchi-coral"
              style={{ height: "100%", animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </span>
      )}
    </motion.button>
  );
};
