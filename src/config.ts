export type Config = {
  title: string;
  // calculations
  benefitCoeficient: number;
  workingHoursPerYear: number;
  // end screen
  hrefHighCost: string;
  hrefLowCost: string;
  ctaCostThreshold: number;
  // copy
  copy: {
    ctaLowCost: string;
    ctaHighCost: string;
    shareButton: string;
  };
};

export const defaultConfig: Config = {
  title: "Meeting cost calculator",

  // end screen
  hrefHighCost: "https://otter.ai",
  hrefLowCost: "https://otter.ai",
  ctaCostThreshold: 50,

  benefitCoeficient: 1.4,
  workingHoursPerYear: 2080,

  copy: {
    ctaLowCost: "Ottermazing! That’s time well spent",
    ctaHighCost: "That'll add up. Can you cut cost?",
    shareButton: "Share this meeting costs",
  },
};
