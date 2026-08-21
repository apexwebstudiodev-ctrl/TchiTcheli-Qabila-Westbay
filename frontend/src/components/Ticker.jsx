import { Sparkle } from "lucide-react";

const ITEMS = [
  "Open 24/7",
  "Shisha Lounge",
  "Live Football Nights",
  "Business Lunch — 59 QAR",
  "Drive-Through",
  "Breakfast Rituals",
  "Dafna St · Doha",
  "No-Contact Delivery",
];

export const Ticker = () => (
  <div
    data-testid="ticker-strip"
    className="relative overflow-hidden border-y border-white/10 bg-tchi-coral py-4"
  >
    <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span
          key={i}
          className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.25em] text-[#0B0C10]"
        >
          {t} <Sparkle size={14} />
        </span>
      ))}
    </div>
  </div>
);
