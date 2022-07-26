import { initVal, StoreValues } from "./calcStore";
import type { DeepPartial } from "./types";
import { hourMinutesFormatter } from "./utils/hourMinutesFormatter";

export type Config = {
  initialValues: {
    duration: number; // hours
    attendeeCount: number; // number
  };
  defaultSalary: number;
  title: string;
  // calculations
  benefitCoeficient: number;
  workingHoursPerYear: number;
  // end screen
  hrefHighCost: string;
  hrefLowCost: string;
  ctaCostThreshold: number;
  // select options
  optionsDuration: number[]; // hours
  optionsSalaries: number[]; // in thousands
  optionsAttendees: number[]; // number of attendees
  // copy
  copy: {
    endCtaLowerCost: string;
    endCtaHigherCost: string;
    endShareButton: string;
    endCalcAgain: string;
    calculatorCtaEstimate: string;
    calculatorSalaryItemLabel: (index: number) => string;
    calculatorCoeficientNote: (coeficient: number) => string;
    calculatorShareCta: string;
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

export type ConfigOptional = DeepPartial<Config>;

export const defaultConfig: Config = {
  initialValues: {
    duration: 0.25,
    attendeeCount: 0,
  },
  defaultSalary: 40000,
  title: "Meeting cost calculator",
  hrefHighCost: "https://otter.ai",
  hrefLowCost: "https://otter.ai",
  ctaCostThreshold: 50,
  benefitCoeficient: 1.4,
  workingHoursPerYear: 2080,
  optionsAttendees: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  optionsDuration: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  optionsSalaries: [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 175, 200,
    225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 600, 700, 800,
    900, 1000,
  ],
  copy: {
    endCtaLowerCost: "Ottermazing! That’s time well spent",
    endCtaHigherCost: "That'll add up. Can you cut cost?",
    endShareButton: "Share this meeting cost",
    endCalcAgain: "Calculate again",
    calculatorShareCta: "Share this tool",
    calculatorCtaEstimate: "Estimate my meeting cost",
    calculatorSalaryItemLabel: (index) => `Estimate salary #${index + 1}`,
    calculatorCoeficientNote: (coeficient) =>
      `Salaries multiplied by ${coeficient} to account for benefits`,
    shareTitle: "Share this tool",
    shareClose: "Close",
    shareMessage: (props) => {
      if (!props.amountSpent) {
        return "How much are you spending on meetings? Find out with the Meeting Cost Calculator from @otter_ai ";
      }
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
    resultTitle: "How much are you spending on meetings?",
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
