import { createRollupConfigEmbed } from "./rollup.createConfig";

export default createRollupConfigEmbed((config) => {
  return {
    ...config,
    input: "src/main-embed.ts",
    output: {
      sourcemap: true,
      format: "umd",
      exports: "named",
      name: "OtterMeetingCostCalculator",
      file: "public/umd/otter-meeting-calculator.js",
    },
  };
});
