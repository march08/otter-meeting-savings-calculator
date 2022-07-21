import App from "./App.svelte";

const app = new App({
  target: document.getElementById("calculator"),
  props: {
    name: "world",
  },
});

export default app;
