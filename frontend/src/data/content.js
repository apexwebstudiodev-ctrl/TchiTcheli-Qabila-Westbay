// OWNER: to use your own photos, replace any image "url" below with your photo URL
// (or drop files in /app/frontend/public/photos and use "/photos/your-file.jpg").

export const PHONE_DISPLAY = "+974 7030 0009";
export const PHONE_TEL = "tel:+97470300009";
export const TALABAT_URL = "https://www.talabat.com/qatar";
export const WEBSITE_URL = "https://tchetche.qa";
export const MAPS_EMBED = "https://www.google.com/maps?q=8GGQ%2B46%20Doha%20Qatar&output=embed";
export const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=8GGQ%2B46+Doha";
export const ADDRESS = "Dafna St, Qabila Westbay Hotel, Doha, Qatar";

const genericFood =
  "https://images.pexels.com/photos/27897606/pexels-photo-27897606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const IMAGES = {
  hero: {
    url: "https://images.unsplash.com/photo-1756981168649-0e3c3c8a32f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwbG91bmdlJTIwaW50ZXJpb3IlMjBzaGlzaGElMjBuaWdodHxlbnwwfHx8fDE3ODczMDc3Njh8MA&ixlib=rb-4.1.0&q=85",
    alt: "Tchi Tchi Café interior lounge",
  },
  promo: {
    url: "https://images.pexels.com/photos/10480246/pexels-photo-10480246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Business lunch spread",
  },
  vibe: {
    url: "https://images.pexels.com/photos/5923508/pexels-photo-5923508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Friends enjoying shisha in the lounge",
  },
};

export const MENU_ITEMS = [
  {
    name: "Chili Cheese Fries",
    tag: "Crowd favourite",
    url: "https://images.unsplash.com/photo-1669743851910-b7e19930c8a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-3 md:row-span-4",
    position: "object-center",
  },
  {
    name: "Tche Tche Avocado Cocktail",
    tag: "Signature",
    url: genericFood,
    span: "md:col-span-3 md:row-span-2",
    position: "object-[center_top]",
  },
  {
    name: "Cheese Nachos",
    tag: "Perfect for the match",
    url: "https://images.unsplash.com/photo-1564758565388-0d5da0cbb08c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-3 md:row-span-2",
    position: "object-center",
  },
  {
    name: "Qalayet Tomato with Meat",
    tag: "From the kitchen",
    url: genericFood,
    span: "md:col-span-2 md:row-span-3",
    position: "object-[center_30%]",
  },
  {
    name: "Penne Arrabbiata",
    tag: "Italian classic",
    url: "https://images.unsplash.com/photo-1552580715-4d9bc27f1e2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-2 md:row-span-3",
    position: "object-center",
  },
  {
    name: "Osmalya",
    tag: "Sweet ending",
    url: genericFood,
    span: "md:col-span-2 md:row-span-3",
    position: "object-[center_70%]",
  },
];

export const GALLERY = [
  {
    url: "https://images.pexels.com/photos/18843833/pexels-photo-18843833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Shisha detail",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1577715694662-6bcf16c06e29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    alt: "Golden fries",
    aspect: "aspect-[4/3]",
  },
  {
    url: IMAGES.hero.url,
    alt: "Lounge seating",
    aspect: "aspect-square",
  },
  {
    url: genericFood,
    alt: "Fresh dishes",
    aspect: "aspect-[3/4]",
    position: "object-[center_top]",
  },
  {
    url: IMAGES.vibe.url,
    alt: "Shisha with friends",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1552580715-4d9bc27f1e2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    alt: "Penne arrabbiata",
    aspect: "aspect-[3/4]",
  },
  {
    url: IMAGES.promo.url,
    alt: "Lunch table spread",
    aspect: "aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1564758565388-0d5da0cbb08c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBhc3RhJTIwZnJpZXMlMjBuYWNob3N8ZW58MHx8fHwxNzg3MzA3NzY4fDA&ixlib=rb-4.1.0&q=85",
    alt: "Cheese nachos",
    aspect: "aspect-[4/3]",
  },
];

export const REVIEWS = [
  {
    quote:
      "I really enjoy visiting Tchi Tchi Cafe in Dafna. It's a very nice place to relax, have shisha, and watch football matches with friends. The atmosphere is always lively and comfortable, especially during big games. The daily business lunch offers are very reasonable and the portions are generous.",
    author: "Bashar Mraish",
    meta: "Local Guide · 2 months ago",
  },
  {
    quote:
      "Hidden gem alert! I had an amazing experience at Tchi Tchi Café — honestly, it exceeded expectations.",
    author: "Abdelrahman Alsaadi",
    meta: "Local Guide · 3 months ago",
  },
  {
    quote:
      "John was great! He treated us like it was his home and we were his guests. Clean atmosphere, very relaxing space. Definitely recommended for quick bites and a relaxed space.",
    author: "Sahar Omar",
    meta: "Local Guide · 7 months ago",
  },
  {
    quote:
      "Absolutely fantastic! The food was delicious, the service was quick, and the atmosphere was lovely. Highly recommend the snacks platter. Will definitely be coming back.",
    author: "Nvjib Hr",
    meta: "5 months ago",
  },
  {
    quote:
      "I would like to thank the entire café for the warm welcome and true hospitality that made my girlfriend's birthday unforgettable. The star of the show has to be Mr Hassan — his service, humility and kindness left a mark on us.",
    author: "Musa & Sauleha",
    meta: "4 months ago",
  },
  {
    quote:
      "The place is spacious and full of energy. The warm hospitality and great service make you feel like home, and the portions are decent with great presentation. Looking forward to revisiting.",
    author: "Moi",
    meta: "Local Guide · 2 months ago",
  },
  {
    quote:
      "This restaurant is part of my daily routine; breakfast has become an addiction, the service is excellent.",
    author: "Google Review",
    meta: "Verified visitor",
  },
];
