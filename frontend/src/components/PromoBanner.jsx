import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Soup, Salad, UtensilsCrossed, IceCreamCone, Phone, MessageCircle, X, User, Calendar, Users } from "lucide-react";
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

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors duration-300 focus:border-tchi-coral [color-scheme:dark]";

const todayStr = () => new Date().toISOString().split("T")[0];

export const PromoBanner = () => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: todayStr(), time: "13:00", guests: "2" });

  const submitReservation = (e) => {
    e.preventDefault();
    const message = [
      "Hello Tchi Tchi Café! I'd like to reserve a table.",
      `Name: ${form.name}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
    ].join("\n");
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setReserveOpen(false);
  };

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
                <Phone size={16} /> Reserve a table
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
            className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/70 px-6 py-10 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#0B0C10]/95 p-8 shadow-2xl sm:p-10"
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
              <h3 className="mt-3 font-display text-3xl font-black tracking-tight text-white">
                Book in <span className="italic text-tchi-coral">seconds</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Fill this in and we'll confirm on WhatsApp — we're open 24/7.
              </p>

              <form onSubmit={submitReservation} data-testid="reserve-form" className="mt-7 space-y-4 text-left">
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    <User size={12} className="text-tchi-coral" /> Your name
                  </span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ahmed Al-Thani"
                    data-testid="reserve-name-input"
                    className={inputClass}
                  />
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      <Calendar size={12} className="text-tchi-coral" /> Date
                    </span>
                    <input
                      required
                      type="date"
                      min={todayStr()}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      data-testid="reserve-date-input"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      <Clock size={12} className="text-tchi-coral" /> Time
                    </span>
                    <input
                      required
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      data-testid="reserve-time-input"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    <Users size={12} className="text-tchi-coral" /> Party size
                  </span>
                  <select
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    data-testid="reserve-guests-select"
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-[#0B0C10]">
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                    <option value="9+" className="bg-[#0B0C10]">9+ guests (group)</option>
                  </select>
                </label>

                <button
                  type="submit"
                  data-testid="reserve-submit-button"
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-tchi-coralDark focus:outline-none focus:ring-2 focus:ring-tchi-coral"
                >
                  <MessageCircle size={16} /> Send via WhatsApp
                </button>
              </form>

              <a
                href={PHONE_TEL}
                data-testid="reserve-call-link"
                className="mt-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-tchi-coral"
              >
                <Phone size={13} /> Or call {PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
