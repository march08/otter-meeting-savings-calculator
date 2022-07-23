import App from "./App.svelte";

const app = new App({
  target: document.getElementById("calculator"),
  props: {
    options: {
      initialValues: {
        attendeeCount: 2,
      },
      defaultSalary: 0,
    },
  },
});

export default app;
