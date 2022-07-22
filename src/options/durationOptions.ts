const duration = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const hourMinutesFormatter = (value: number) => {
  const hours = Math.floor(value);
  const minutes = (value % 1) * 60;

  let result = "";
  if (hours === 1) {
    result += "1 hour";
  } else if (hours) {
    result += `${hours} hours`;
  }

  if (hours && minutes) {
    result += " ";
  }

  if (minutes === 1) {
    result += "1 minute";
  } else if (minutes) {
    result += `${minutes} minutes`;
  }

  return result;
};

export const durationOptions = duration.map((value) => {
  return {
    value: value,
    label: hourMinutesFormatter(value),
  };
});
