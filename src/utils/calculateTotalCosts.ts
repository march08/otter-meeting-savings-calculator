import type { StoreValues } from "../calcStore";

export const calculateTotalCostFromState = (state: StoreValues) => {
  if (state.attendeeCount > 0) {
    const salariesTotal = state.salaries.reduce((res, next) => {
      return res + (next || 0);
    }, 0);
    return ((1.4 * state.duration * 60) / 124800) * salariesTotal;
  }

  return 0;
};
