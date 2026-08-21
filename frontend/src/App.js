import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { MenuGrid } from "@/components/MenuGrid";
import { Vibe } from "@/components/Vibe";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="grain-overlay bg-[#0B0C10] font-body text-[#F3F4F6] antialiased">
      <Navbar />
      <main>
        <Hero />
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
