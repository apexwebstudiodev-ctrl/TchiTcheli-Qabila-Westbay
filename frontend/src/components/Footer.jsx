import { MapPin, Phone, Clock, Globe, Bike, ExternalLink } from "lucide-react";
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WEBSITE_URL,
  TALABAT_URL,
  MAPS_EMBED,
  MAPS_LINK,
} from "../data/content";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-white/10 bg-[#08090C]">
    <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 lg:px-12 lg:pt-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-tchi-coral">Find us</span>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            Always open. <span className="italic text-tchi-coral">Always yours.</span>
          </h2>

          <div className="mt-12 space-y-6">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-address"
              className="group flex items-start gap-4"
            >
              <MapPin size={20} className="mt-1 shrink-0 text-tchi-coral" />
              <span className="text-base leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white">
                {ADDRESS}
                <span className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-tchi-coral">
                  Plus Code: 8GGQ+46 Doha <ExternalLink size={12} />
                </span>
              </span>
            </a>

            <a href={PHONE_TEL} data-testid="footer-phone" className="group flex items-center gap-4">
              <Phone size={20} className="shrink-0 text-tchi-coral" />
              <span className="text-base text-white/70 transition-colors duration-300 group-hover:text-white">
                {PHONE_DISPLAY}
              </span>
            </a>

            <div className="flex items-center gap-4" data-testid="footer-hours">
              <Clock size={20} className="shrink-0 text-tchi-coral" />
              <span className="text-base text-white/70">
                Open 24 hours — 7 days a week
              </span>
            </div>

            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-website"
              className="group flex items-center gap-4"
            >
              <Globe size={20} className="shrink-0 text-tchi-coral" />
              <span className="text-base text-white/70 transition-colors duration-300 group-hover:text-white">
                tchetche.qa
              </span>
            </a>
          </div>

          <a
            href={TALABAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-order-button"
            className="mt-12 inline-flex items-center gap-2.5 rounded-full bg-tchi-coral px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105 hover:bg-tchi-coralDark"
          >
            <Bike size={16} /> Order on Talabat
          </a>
        </div>

        <div className="lg:col-span-6">
          <div
            data-testid="footer-map"
            className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-white/10"
          >
            <iframe
              title="Tchi Tchi Café location map"
              src={MAPS_EMBED}
              className="h-full min-h-[360px] w-full grayscale-[35%] invert-[92%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="mt-24 select-none overflow-hidden" aria-hidden="true">
        <p className="whitespace-nowrap text-center font-display text-[13vw] font-black leading-none tracking-tight text-white/[0.04]">
          TCHI TCHI
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p data-testid="footer-copyright" className="text-xs uppercase tracking-[0.2em] text-white/40">
          © {new Date().getFullYear()} Tchi Tchi Café — Dafna St, Doha
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Dine-in · Drive-through · No-contact delivery
        </p>
      </div>
    </div>
  </footer>
);
