export const getAttendeeCountOptions = (counts: number[]) =>
  counts.map((value) => {
    return {
      value: value,
      label: `${value}`,
    };
  });
