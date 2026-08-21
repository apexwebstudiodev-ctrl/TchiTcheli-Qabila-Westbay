import { motion } from "framer-motion";
import { Clock, Soup, Salad, UtensilsCrossed, IceCreamCone, Phone } from "lucide-react";
import { IMAGES, PHONE_TEL } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";
import { MaskedReveal, ParallaxImg, Counter, EASE } from "./Anim";

const INCLUDED = [
  { icon: Soup, label: "Soup" },
  { icon: Salad, label: "Salad" },
  { icon: UtensilsCrossed, label: "Main of the day" },
  { icon: IceCreamCone, label: "Dessert" },
];

export const PromoBanner = () => (
  <section id="lunch" data-testid="promo-section" className="relative scroll-mt-24 overflow-hidden">
    <ParallaxImg src={IMAGES.promo.url} alt={IMAGES.promo.alt} className="absolute inset-0" speed={10} />
    <div className="absolute inset-0 bg-black/75" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:col-span-7"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Daily Special</span>
          <MaskedReveal className="mt-4">
            <h2 data-testid="promo-title" className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Business <span className="italic text-tchi-coral">Lunch</span>
            </h2>
          </MaskedReveal>
          <p data-testid="promo-hours" className="mt-6 flex items-center gap-3 text-base text-white/80 md:text-lg">
            <Clock size={18} className="text-tchi-coral" /> Served daily from 12 PM to 5 PM
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: EASE }}
                data-testid={`promo-included-${i}`}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-tchi-coral/50"
              >
                <item.icon size={20} className="text-tchi-coral" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="group relative lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            data-testid="promo-price-card"
            className="rounded-3xl border border-white/15 bg-black/60 p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">All-in, every day</span>
            <div className="mt-4 flex items-baseline justify-center gap-3">
              <Counter to={59} data-testid="promo-price" className="font-display text-7xl font-black text-tchi-coral lg:text-8xl" />
              <span className="font-display text-2xl font-bold text-white">QAR</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Soup, salad, main course of the day, and dessert. One price, no compromises.
            </p>
            <a
              href={PHONE_TEL}
              data-testid="promo-call-button"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105 hover:bg-tchi-coralDark"
            >
              <Phone size={16} /> Call to reserve
            </a>
          </motion.div>
          <PhotoSlot label="Your lunch photo here" />
        </motion.div>
      </div>
    </div>
  </section>
);
