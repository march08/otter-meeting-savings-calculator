export const scrollToCalculator = (offset: number = -50) => {
  try {
    console.log(
      document
        .getElementById("ott-meeting-cost-calculator")
        .getBoundingClientRect()
    );
    const top =
      document
        .getElementById("ott-meeting-cost-calculator")
        .getBoundingClientRect().top +
      offset +
      window.scrollY;
    window.scrollTo(0, top);
  } catch {}
};
