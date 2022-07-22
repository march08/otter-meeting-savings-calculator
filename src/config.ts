export type Config = {
  title: string;
  hrefHighCost: string;
  hrefLowCost: string;
  ctaCostThreshold: number;
  copy: {
    ctaLowCost: string;
    ctaHighCost: string;
    shareButton: string;
  };
};

export const defaultConfig: Config = {
  title: "Meeting cost calculator",
  hrefHighCost: "https://otter.ai",
  hrefLowCost: "https://otter.ai",
  ctaCostThreshold: 50,
  copy: {
    ctaLowCost: "Ottermazing! That’s time well spent",
    ctaHighCost: "That'll add up. Can you cut cost?",
    shareButton: "Share this meeting costs",
  },
};
