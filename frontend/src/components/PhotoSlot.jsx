import { ImagePlus } from "lucide-react";

export const PhotoSlot = ({ label = "Your photo here" }) => (
  <span
    data-testid="photo-slot-hint"
    className="pointer-events-none absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
  >
    <ImagePlus size={12} /> {label}
  </span>
);
