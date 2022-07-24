export const scrollToCalculator = (offset: number = -50) => {
  try {
    window.scrollTo(
      0,
      document.getElementById("ott-meeting-cost-calculator").offsetTop + offset
    );
  } catch {}
};
