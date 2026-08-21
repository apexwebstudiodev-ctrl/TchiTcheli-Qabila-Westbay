# Tchi Tchi Café — Website PRD

## Original Problem Statement
Build a modern, engaging one-page website for "Tchi Tchi Café", a popular 24/7 restaurant on Dafna St, Doha (Qabila Westbay Hotel). Services: dine-in, drive-through, no-contact delivery. Phone: 7030 0009, website: tchetche.qa. Sections: Hero (24/7 emphasis, "View Menu" + "Order Delivery"→Talabat CTAs, owner-uploadable hero photo), Business Lunch promo banner (daily 12–5 PM, soup + salad + main + dessert, 59 QAR), Menu Highlights photo grid (Chili Cheese Fries, Tche Tche Avocado Cocktail, Cheese Nachos, Qalayet Tomato with Meat, Penne Arrabbiata, Osmalya), Vibe & Amenities (breakfast, shisha, live football, cleanliness, staff), Customer Reviews carousel (4.3★, 1,100+ reviews, 2 quotes), masonry Photo Gallery (owner-swappable), Footer (address, phone, hours, Google Maps embed for 8GGQ+46 Doha).

## Architecture
- Frontend-only static landing page: React 19 + Tailwind + framer-motion + embla-carousel + lucide-react. No backend/database needed.
- All editable content (images, links, phone, menu items, reviews, gallery) centralized in `/app/frontend/src/data/content.js` — owner swaps photo URLs in one place.
- Components in `/app/frontend/src/components/`: Navbar, Hero, PromoBanner, MenuGrid (bento), Vibe (overlap layout), Reviews (embla carousel), Gallery (CSS-columns masonry), Footer (Google Maps iframe embed), PhotoSlot (hover hint marking owner photo slots).
- Design: dark luxury theme (#0B0C10 base, #E07A5F coral accent), Playfair Display + Outfit fonts, glassmorphism sticky nav, grain overlay. Per /app/design_guidelines.json.

## User Personas
- Café owner (non-technical): wants to swap in real photos easily and drive Talabat orders.
- Visitors: hungry locals/expats checking menu, lunch deal, vibe, location, phone.

## Core Requirements (static)
All sections listed in problem statement; image placeholders owner-swappable; phone/talabat/maps links functional.

## Implemented (2026-07 / build date Aug 2026 env)
- Full one-page site with all 7 requested sections, verified via screenshots end-to-end
- Reviews carousel with working prev/next + dots, 4.3★ / 1,100+ badge
- Google Maps embed (8GGQ+46 Doha) in footer, dark-styled
- tel: link (+974 7030 0009), Talabat outbound link, anchor nav, mobile menu
- Stock photo placeholders throughout with hover "Your photo here" hints; swap via content.js

## Backlog / Next Tasks
- P1: Replace stock images with owner's real photos (owner action or upload feature)
- P1: Point "Order Delivery" to exact Talabat store URL (currently talabat.com/qatar)
- P2: Full menu page with prices; WhatsApp order button; Instagram feed link
- P2: Arabic (RTL) version
