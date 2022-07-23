import type { StoreValues } from "../calcStore";

const WORKING_HOURS_PER_YEAR = 2080;
const BENEFIT_COEFICIENT = 1.4;

export const calculateTotalCostFromState = (
  state: StoreValues,
  options: {
    benefitCoeficient: number;
    workingHoursPerYear?: number;
  }
) => {
  if (state.attendeeCount > 0) {
    const salariesPerYearTotal = state.salaries.reduce((res, next) => {
      return res + (next || 0);
    }, 0);

    const benefitCoeficient = options?.benefitCoeficient || BENEFIT_COEFICIENT;
    const workingHoursPerYear =
      options?.workingHoursPerYear || WORKING_HOURS_PER_YEAR;
    const meetingDuration = state.duration;
    return (
      (benefitCoeficient * meetingDuration * salariesPerYearTotal) /
      workingHoursPerYear
    );
  }

  return 0;
};
