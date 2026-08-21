import { motion } from "framer-motion";
import { MENU_ITEMS } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";
import { MaskedReveal, ParallaxImg, EASE } from "./Anim";

export const MenuGrid = () => (
  <section id="menu" data-testid="menu-section" className="scroll-mt-24 bg-[#0B0C10] py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Menu Highlights</span>
          <MaskedReveal className="mt-4">
            <h2 data-testid="menu-title" className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Plates people <span className="italic text-tchi-coral">come back for</span>
            </h2>
          </MaskedReveal>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="max-w-sm text-sm leading-relaxed text-white/50"
        >
          Six signatures from the kitchen — from match-night nachos to the Osmalya that ends every evening properly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:auto-rows-[150px] md:grid-cols-6 lg:gap-8">
        {MENU_ITEMS.map((item, i) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.09, ease: EASE }}
            data-testid={`menu-item-${i}`}
            className={`group relative h-80 overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/30 md:h-auto ${item.span}`}
          >
            <ParallaxImg
              src={item.url}
              alt={item.name}
              className="absolute inset-0"
              imgClassName={`${item.position} transition-transform duration-700 group-hover:scale-110`}
              speed={10}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <PhotoSlot label="Your food photo here" />
            <div className="absolute bottom-0 left-0 z-10 p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-tchi-coral">{item.tag}</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.name}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
