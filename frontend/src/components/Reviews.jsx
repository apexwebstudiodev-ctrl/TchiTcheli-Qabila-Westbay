import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "../data/content";

const Stars = () => (
  <div className="flex items-center gap-1" aria-label="4.3 out of 5 stars">
    {[0, 1, 2, 3].map((i) => (
      <Star key={i} size={18} className="fill-tchi-coral text-tchi-coral" />
    ))}
    <Star size={18} className="fill-tchi-coral/30 text-tchi-coral/30" />
  </div>
);

export const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" data-testid="reviews-section" className="scroll-mt-24 bg-[#111318] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Customer Reviews</span>
            <h2 data-testid="reviews-title" className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Word on <span className="italic text-tchi-coral">Dafna Street</span>
            </h2>
          </div>
          <div data-testid="reviews-rating" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
            <span className="font-display text-4xl font-black text-white">4.3</span>
            <div>
              <Stars />
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-white/50">1,100+ reviews</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="overflow-hidden" ref={emblaRef} data-testid="reviews-carousel">
            <div className="flex">
              {REVIEWS.map((r, i) => (
                <div key={i} className="min-w-0 flex-[0_0_100%] pr-2" data-testid={`review-slide-${i}`}>
                  <figure className="rounded-3xl border border-white/10 bg-black/40 p-10 lg:p-14">
                    <Quote size={32} className="text-tchi-coral" />
                    <blockquote className="mt-6 font-display text-2xl font-light leading-relaxed text-white/90 lg:text-3xl">
                      "{r.quote}"
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <Stars />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                        — {r.author}
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2" data-testid="reviews-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  data-testid={`review-dot-${i}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i ? "w-8 bg-tchi-coral" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Previous review"
                data-testid="review-prev-button"
                onClick={() => emblaApi?.scrollPrev()}
                className="rounded-full border border-white/15 p-3 text-white transition-colors duration-300 hover:border-tchi-coral hover:text-tchi-coral"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next review"
                data-testid="review-next-button"
                onClick={() => emblaApi?.scrollNext()}
                className="rounded-full border border-white/15 p-3 text-white transition-colors duration-300 hover:border-tchi-coral hover:text-tchi-coral"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
