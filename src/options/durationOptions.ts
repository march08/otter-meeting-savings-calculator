import { hourMinutesFormatter } from "../utils/hourMinutesFormatter";

const duration = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

export const durationOptions = duration.map((value) => {
  return {
    value: value,
    label: hourMinutesFormatter(value),
  };
});
