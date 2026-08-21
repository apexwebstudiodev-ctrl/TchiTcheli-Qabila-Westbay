import { motion } from "framer-motion";
import { GALLERY } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";

export const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="scroll-mt-24 bg-[#0B0C10] py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Photo Gallery</span>
        <h2 data-testid="gallery-title" className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          A look <span className="italic text-tchi-coral">inside</span>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
          Food, drinks, shisha, and the corners everyone claims as their own.
        </p>
      </motion.div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
        {GALLERY.map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            data-testid={`gallery-item-${i}`}
            className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 lg:mb-8"
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className={`w-full object-cover ${img.aspect} ${img.position || "object-center"} transition-transform duration-700 group-hover:scale-105`}
            />
            <PhotoSlot label="Your photo here" />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
