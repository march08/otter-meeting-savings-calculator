import { hourMinutesFormatter } from "./utils/hourMinutesFormatter";

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
    endShareButton: string;
    endCalcAgain: string;
    calculatorCtaEstimate: string;
    calculatorSalaryItem: (index: number) => string;
    calculatorCoeficientNote: (coeficient: number) => string;
    shareTitle: string;
    shareClose: string;
    shareUrlFacebook: string;
    shareUrlTwitter: string;
    shareUrlLinkedin: string;
    shareUrlEmail: string;
    shareEmailSubjet: string;
    shareMessage: (props: {
      amountSpent: number;
      amountSpentFormatted: string;
    }) => string;
    resultTitle: string;
    resultInputSummary: (hours: number, attendees: number) => string;
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
    endShareButton: "Share this meeting costs",
    endCalcAgain: "Calculate again",
    calculatorCtaEstimate: "Estimate my meeting cost",
    calculatorSalaryItem: (index) => `Estimate salary #${index + 1}`,
    calculatorCoeficientNote: (coeficient) =>
      `Salaries multiplied by ${coeficient} to account for benefits`,
    shareTitle: "Share this tool",
    shareClose: "Close",
    shareMessage: (props) => {
      return `Guess how much we’re spending on this meeting? ${props.amountSpentFormatted} @otter_ai`;
    },
    shareUrlFacebook:
      "https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=facebook",
    shareUrlTwitter:
      "https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=twitter",
    shareUrlLinkedin:
      "https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=linkedin",
    shareEmailSubjet: "We can save on money on meetings with Otter.ai",
    shareUrlEmail:
      "https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=email",
    resultTitle: "Guess how much we are spending on this meeting?",
    resultInputSummary: (hours, attendees) => {
      const res = [];
      if (hours) {
        res.push(hourMinutesFormatter(hours));
      }
      if (attendees === 1) {
        res.push("1 attendee");
      }
      if (attendees) {
        res.push(`${attendees} attendees`);
      }

      return res.join(" - ");
    },
  },
};
