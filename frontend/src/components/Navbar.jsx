import { useState } from "react";
import { Menu, X, Bike } from "lucide-react";
import { TALABAT_URL } from "../data/content";

const LINKS = [
  { label: "Business Lunch", href: "#lunch", id: "nav-link-lunch" },
  { label: "Menu", href: "#menu", id: "nav-link-menu" },
  { label: "The Vibe", href: "#vibe", id: "nav-link-vibe" },
  { label: "Reviews", href: "#reviews", id: "nav-link-reviews" },
  { label: "Gallery", href: "#gallery", id: "nav-link-gallery" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" data-testid="nav-logo" className="font-display text-2xl font-black tracking-tight text-white">
          Tchi Tchi <span className="text-tchi-coral">Café</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.id}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:text-tchi-coral"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={TALABAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-order-button"
            className="hidden items-center gap-2 rounded-full bg-tchi-coral px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105 hover:bg-tchi-coralDark sm:flex"
          >
            <Bike size={14} /> Order Delivery
          </a>
          <button
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/15 p-2.5 text-white transition-colors duration-300 hover:border-tchi-coral lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="flex flex-col gap-6 border-t border-white/10 bg-[#0B0C10]/95 px-6 py-10 backdrop-blur-xl lg:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`${l.id}-mobile`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-bold text-white transition-colors duration-300 hover:text-tchi-coral"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TALABAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-order-button-mobile"
            className="mt-4 flex w-fit items-center gap-2 rounded-full bg-tchi-coral px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            <Bike size={14} /> Order Delivery
          </a>
        </div>
      )}
    </header>
  );
};
