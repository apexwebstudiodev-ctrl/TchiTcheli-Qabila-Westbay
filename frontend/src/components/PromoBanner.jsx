import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Soup, Salad, UtensilsCrossed, IceCreamCone, Phone, MessageCircle, X } from "lucide-react";
import { IMAGES, PHONE_TEL, PHONE_DISPLAY } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";
import { MaskedReveal, ParallaxImg, Counter, EASE } from "./Anim";

const WHATSAPP_URL = "https://wa.me/97470300009";

const INCLUDED = [
  { icon: Soup, label: "Soup" },
  { icon: Salad, label: "Salad" },
  { icon: UtensilsCrossed, label: "Main of the day" },
  { icon: IceCreamCone, label: "Dessert" },
];

export const PromoBanner = () => {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
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
              <button
                onClick={() => setReserveOpen(true)}
                data-testid="promo-call-button"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105 hover:bg-tchi-coralDark focus:outline-none focus:ring-2 focus:ring-tchi-coral"
              >
                <Phone size={16} /> Call to reserve
              </button>
            </motion.div>
            <PhotoSlot label="Your lunch photo here" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {reserveOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="reserve-modal"
            onClick={() => setReserveOpen(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#0B0C10]/95 p-10 text-center shadow-2xl"
            >
              <button
                onClick={() => setReserveOpen(false)}
                data-testid="reserve-close-button"
                aria-label="Close"
                className="absolute right-5 top-5 rounded-full border border-white/15 p-2 text-white/60 transition-colors duration-300 hover:border-tchi-coral hover:text-tchi-coral"
              >
                <X size={16} />
              </button>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Reserve your table</span>
              <p className="mt-5 font-display text-4xl font-black tracking-tight text-white">{PHONE_DISPLAY}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                We're open 24/7 — call or message us anytime and we'll have your business lunch table ready.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={PHONE_TEL}
                  data-testid="reserve-call-link"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-tchi-coralDark"
                >
                  <Phone size={16} /> Call now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="reserve-whatsapp-link"
                  className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-tchi-coral hover:bg-white/10"
                >
                  <MessageCircle size={16} /> WhatsApp us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
