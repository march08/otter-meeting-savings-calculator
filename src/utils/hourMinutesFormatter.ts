export const hourMinutesFormatter = (hrs: number) => {
  const hours = Math.floor(hrs);
  const minutes = (hrs % 1) * 60;

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
