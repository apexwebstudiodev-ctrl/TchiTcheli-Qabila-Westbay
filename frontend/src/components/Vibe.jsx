import { motion } from "framer-motion";
import { Sunrise, Flame, Trophy, Sparkles, HeartHandshake } from "lucide-react";
import { IMAGES } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";
import { MaskedReveal, ParallaxImg, EASE } from "./Anim";

const AMENITIES = [
  {
    icon: Sunrise,
    title: "Breakfast routines",
    text: "For many of our regulars, mornings here are a daily ritual — one they happily call an addiction.",
    id: "amenity-breakfast",
  },
  {
    icon: Flame,
    title: "Shisha, done right",
    text: "Settle into the lounge and unwind over smooth, well-prepared shisha at any hour.",
    id: "amenity-shisha",
  },
  {
    icon: Trophy,
    title: "Live football",
    text: "Big matches on screen with friends — the atmosphere turns electric on game nights.",
    id: "amenity-football",
  },
  {
    icon: Sparkles,
    title: "Spotless & fresh",
    text: "A clean, well-kept space that feels as good at 3 AM as it does at lunchtime.",
    id: "amenity-clean",
  },
  {
    icon: HeartHandshake,
    title: "Staff who care",
    text: "Respectful, excellent service — the kind of team that remembers your usual order.",
    id: "amenity-staff",
  },
];

export const Vibe = () => (
  <section id="vibe" data-testid="vibe-section" className="scroll-mt-24 overflow-hidden bg-[#0B0C10] py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE }}
          className="group relative lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <ParallaxImg
              src={IMAGES.vibe.url}
              alt={IMAGES.vibe.alt}
              data-testid="vibe-image"
              className="h-[420px] w-full lg:h-[620px]"
              imgClassName="transition-transform duration-700 group-hover:scale-110"
              speed={9}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <PhotoSlot label="Your vibe photo here" />
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.45 }}
            data-testid="vibe-rating-chip"
            className="absolute -bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-tchi-surface px-6 py-4 shadow-2xl lg:left-10"
          >
            <span className="font-display text-3xl font-black text-tchi-coral">4.3</span>
            <span className="ml-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              from 1,100+ reviews
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="relative z-10 rounded-3xl border border-white/10 bg-[#0B0C10]/90 p-8 backdrop-blur-xl lg:col-span-5 lg:-ml-16 lg:mt-16 lg:p-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">The Vibe & Amenities</span>
          <MaskedReveal className="mt-4">
            <h2 data-testid="vibe-title" className="font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Where Doha comes to <span className="italic text-tchi-coral">stay a while</span>
            </h2>
          </MaskedReveal>

          <div className="mt-10 space-y-6">
            {AMENITIES.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.09, ease: EASE }}
                data-testid={a.id}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-tchi-coral/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tchi-coral/15">
                  <a.icon size={18} className="text-tchi-coral" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{a.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
