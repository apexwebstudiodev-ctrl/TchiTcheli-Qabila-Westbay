import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { PromoBanner } from "@/components/PromoBanner";
import { MenuGrid } from "@/components/MenuGrid";
import { Vibe } from "@/components/Vibe";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { ScrollProgress, CursorGlow } from "@/components/Anim";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain-overlay bg-[#0B0C10] font-body text-[#F3F4F6] antialiased">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <PromoBanner />
        <MenuGrid />
        <Vibe />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
