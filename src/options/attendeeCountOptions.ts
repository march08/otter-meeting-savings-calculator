const attendeeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const attendeeCountOptions = attendeeCount.map((value) => {
  return {
    value: value,
    label: `${value}`,
  };
});
