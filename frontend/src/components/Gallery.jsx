import { motion } from "framer-motion";
import { GALLERY } from "../data/content";
import { PhotoSlot } from "./PhotoSlot";
import { MaskedReveal, ParallaxImg, EASE } from "./Anim";

const GalleryItem = ({ img, i }) => (
  <motion.figure
    initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: EASE }}
    data-testid={`gallery-item-${i}`}
    className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/30 lg:mb-8"
  >
    <ParallaxImg
      src={img.url}
      alt={img.alt}
      className={`w-full ${img.aspect}`}
      imgClassName={`${img.position || "object-center"} transition-transform duration-700 group-hover:scale-110`}
      speed={i % 2 === 0 ? 9 : 14}
    />
    <PhotoSlot label="Your photo here" />
  </motion.figure>
);

export const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="scroll-mt-24 bg-[#0B0C10] py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Photo Gallery</span>
        <MaskedReveal className="mt-4">
          <h2 data-testid="gallery-title" className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            A look <span className="italic text-tchi-coral">inside</span>
          </h2>
        </MaskedReveal>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
          Food, drinks, shisha, and the corners everyone claims as their own.
        </p>
      </motion.div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
        {GALLERY.map((img, i) => (
          <GalleryItem key={i} img={img} i={i} />
        ))}
      </div>
    </div>
  </section>
);
