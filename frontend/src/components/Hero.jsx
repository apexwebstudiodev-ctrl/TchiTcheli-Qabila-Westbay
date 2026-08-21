import { motion } from "framer-motion";
import { Bike, BookOpen, Clock, Car, UtensilsCrossed, PackageCheck } from "lucide-react";
import { IMAGES, TALABAT_URL } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";

const SERVICES = [
  { icon: Clock, label: "Open 24 Hours", id: "service-24h" },
  { icon: UtensilsCrossed, label: "Dine-in", id: "service-dine-in" },
  { icon: Car, label: "Drive-through", id: "service-drive-through" },
  { icon: PackageCheck, label: "No-contact Delivery", id: "service-delivery" },
];

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="group relative flex min-h-screen items-end overflow-hidden">
    <img
      src={IMAGES.hero.url}
      alt={IMAGES.hero.alt}
      data-testid="hero-image"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0C10] to-transparent" />
    <PhotoSlot label="Your café photo here" />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <span
          data-testid="hero-open-badge"
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-tchi-coral/40 bg-tchi-coral/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-tchi-coral backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-tchi-coral" />
          Open now — 24/7, every day
        </span>

        <h1
          data-testid="hero-headline"
          className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Doha never sleeps.
          <br />
          <span className="italic text-tchi-coral">Neither do we.</span>
        </h1>

        <p data-testid="hero-subtext" className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Tchi Tchi Café is Doha's round-the-clock living room — breakfast at dawn, business lunch at noon,
          shisha and live football long after midnight. Always lively, always welcoming.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            data-testid="hero-view-menu-button"
            className="flex items-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105 hover:bg-tchi-coralDark focus:outline-none focus:ring-2 focus:ring-tchi-coral"
          >
            <BookOpen size={16} /> View Menu
          </a>
          <a
            href={TALABAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-order-delivery-button"
            className="flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-tchi-coral hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-tchi-coral"
          >
            <Bike size={16} /> Order Delivery
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        data-testid="hero-services-strip"
        className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md md:grid-cols-4"
      >
        {SERVICES.map((s) => (
          <div
            key={s.id}
            data-testid={s.id}
            className="flex items-center gap-3 bg-black/50 px-5 py-4 transition-colors duration-300 hover:bg-black/30"
          >
            <s.icon size={18} className="shrink-0 text-tchi-coral" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
