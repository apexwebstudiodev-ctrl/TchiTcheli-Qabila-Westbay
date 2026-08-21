import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  animate,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const MaskedReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ParallaxImg = ({ src, alt, className = "", imgClassName = "", speed = 12, ...rest }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="-mt-[10%] h-[120%] w-full">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      </motion.div>
    </div>
  );
};

export const Counter = ({ to, className = "", ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className} {...rest}>
      {val}
    </span>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-tchi-coral"
    />
  );
};

export const CursorGlow = () => {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 55, damping: 16 });
  const sy = useSpring(y, { stiffness: 55, damping: 16 });
  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle, rgba(224,122,95,0.14) 0%, transparent 60%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[40] hidden h-[500px] w-[500px] rounded-full mix-blend-screen lg:block"
    />
  );
};
