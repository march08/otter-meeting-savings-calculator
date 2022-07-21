const salaries = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 175, 200,
  225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 600, 700, 800,
  900, 1000,
];

function nFormatter(num: number, digits: number = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export const salaryOptions = salaries.map((item) => {
  const total = item * 1000;
  return {
    value: total,
    label: `$${nFormatter(total)}`,
  };
});
