// Curated real travel photos (fetched via z-ai image-search, OSS-hosted & stable).
// Used on the landing page hero, trip-type cards, and featured destinations.

export interface DestinationImage {
  url: string;
  alt: string;
}

export const HERO_IMAGES: DestinationImage[] = [
  { url: "https://sfile.chatglm.cn/images-ppt/5bd219431797.jpg", alt: "Aerial coastal mountain travel landscape" },
  { url: "https://sfile.chatglm.cn/images-ppt/8518586527cb.jpeg", alt: "Scenic travel panorama" },
];

export interface TripCardImage {
  national: string;
  international: string;
  multi: string;
}

export const TRIP_CARD_IMAGES: TripCardImage = {
  national: "https://sfile.chatglm.cn/images-ppt/a3ab543e5d01.jpg",
  international: "https://sfile.chatglm.cn/images-ppt/f56619253696.jpg",
  multi: "https://sfile.chatglm.cn/images-ppt/89083d388f62.jpg",
};

export interface FeaturedDestination {
  city: string;
  country: string;
  image: string;
  blurb: string;
}

export const FEATURED_DESTINATIONS: FeaturedDestination[] = [
  { city: "Paris", country: "France", image: "https://sfile.chatglm.cn/images-ppt/db9308f03b6b.jpg", blurb: "Romance, art & café culture" },
  { city: "Tokyo", country: "Japan", image: "https://sfile.chatglm.cn/images-ppt/c563e15a0559.jpg", blurb: "Neon nights & ancient temples" },
  { city: "Santorini", country: "Greece", image: "https://sfile.chatglm.cn/images-ppt/9b6a8c8b2fe6.jpg", blurb: "Cliffside sunsets over the Aegean" },
  { city: "New York", country: "USA", image: "https://sfile.chatglm.cn/images-ppt/1b2b4b2bdfed.jpg", blurb: "The city that never sleeps" },
  { city: "Bali", country: "Indonesia", image: "https://sfile.chatglm.cn/images-ppt/7758927a0d9a.jpg", blurb: "Rice terraces & island temples" },
  { city: "Grand Canyon", country: "USA", image: "https://sfile.chatglm.cn/images-ppt/b9539366f306.jpg", blurb: "A wonder carved by time" },
];
