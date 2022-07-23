export const scrollToCalculator = (offset: number = -50) => {
  try {
    window.scrollTo({
      top:
        document.getElementById("ott-meeting-cost-calculator").offsetTop +
        offset,
      left: 0,
      behavior: "smooth",
    });
  } catch {}
};
