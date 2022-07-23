import App from "./App.svelte";
import type { ConfigOptional } from "./config";

export const OtterMeetingCostCalculator = (
  targetId: string,
  config: ConfigOptional
) => {
  const app = new App({
    target: document.getElementById(targetId),
    props: {
      options: config,
    },
  });

  return app;
};

(window as any).OtterMeetingCostCalculator = OtterMeetingCostCalculator;
export default OtterMeetingCostCalculator;
