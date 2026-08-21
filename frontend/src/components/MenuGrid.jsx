import { motion } from "framer-motion";
import { MENU_ITEMS } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";

export const MenuGrid = () => (
  <section id="menu" data-testid="menu-section" className="scroll-mt-24 bg-[#0B0C10] py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Menu Highlights</span>
          <h2 data-testid="menu-title" className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Plates people <span className="italic text-tchi-coral">come back for</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-white/50">
          Six signatures from the kitchen — from match-night nachos to the Osmalya that ends every evening properly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:auto-rows-[150px] md:grid-cols-6 lg:gap-8">
        {MENU_ITEMS.map((item, i) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            data-testid={`menu-item-${i}`}
            className={`group relative h-80 overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl md:h-auto ${item.span}`}
          >
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${item.position} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <PhotoSlot label="Your food photo here" />
            <div className="absolute bottom-0 left-0 z-10 p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-tchi-coral">{item.tag}</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.name}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
