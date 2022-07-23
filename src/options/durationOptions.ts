import { hourMinutesFormatter } from "../utils/hourMinutesFormatter";

export const getDurationOptions = (durOpts: number[]) => {
  return durOpts.map((value) => {
    return {
      value: value,
      label: hourMinutesFormatter(value),
    };
  });
};
