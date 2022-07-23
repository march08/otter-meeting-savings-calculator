<script lang="ts">
  import LogoSvg from "./assets/logo-otter.svg";
  import { calcStore } from "./calcStore";
  import ScreenCalculator from "./screens/ScreenCalculator.svelte";
  import ScreenEnd from "./screens/ScreenEnd.svelte";
  import { Config, defaultConfig } from "./config";
  import type { DeepPartial } from "./types";
  import ModalShare from "./screens/ModalShare.svelte";

  export let options: DeepPartial<Config> = defaultConfig;
  $: config = {
    ...defaultConfig,
    ...options,
    copy: {
      ...defaultConfig.copy,
      ...options.copy,
    },
  };
</script>

<div class="ott-calculator" id="ott-meeting-cost-calculator">
  <div class="ott-calculator-header ">
    <LogoSvg class="ott-calculator-logo" />
    <div class="ott-calculator-title">{config.title}</div>
  </div>
  {#if $calcStore.screen === "END"}
    <ScreenEnd {config} />
  {:else}
    <ScreenCalculator {config} />
  {/if}
  {#if $calcStore.displayShareModal}
    <ModalShare {config} />
  {/if}
</div>

<style lang="scss" global>
  .ott-calculator {
    box-sizing: border-box;
    position: relative;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    font-family: "Averta Std", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    button {
      font-family: "Averta Std", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    --primary: #007aff;
    --secondary: #0060c8;
    --radius: 24px;
    --input-height: 54px;
    --text-primary: #041d34;
    --text-secondary: #8294a5;
    background: var(--primary);
    border-radius: var(--radius);
    padding: 3.5em;
    color: white;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 3em;
    & > * {
      width: 100%;
    }

    @media screen and (max-width: 575px) {
      padding: 2em;
      gap: 2em;
    }

    .ott-calculator-title {
      text-align: right;
    }
    .ott-button {
      border-radius: 24px;
      display: flex;
      align-items: center;
      height: 48px;
      outline: none !important;
      border: none !important;
      font-size: 1em;
      padding: 0 1.5em;
      line-height: 1em;
      text-align: center;
      cursor: pointer;
      background: white;
      color: var(--primary);
      font-weight: 600;
      transition: 0.3s all;
      justify-content: center;
      text-decoration: none !important;
      &:hover {
        box-shadow: inset 0 0 150px 0 rgba(0, 0, 0, 0.1);
        color: var(--primary);
      }

      &.secondary {
        background: var(--secondary);
        color: white;
        &:hover {
          color: white;
        }
      }
      &.lg {
        height: 64px;
        border-radius: 32px;
        padding: 0 2em;
        font-size: 1.25em;
      }
    }

    .ott-calculator-logo {
      /* transform-origin: left center; */
      /* transform: scale(0.8); */
      height: 32px;
      display: block;
    }
    .ott-calculator-header {
      display: flex;
      justify-content: space-between;
      gap: 2em;
    }

    .ott-calculator-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      .footer-note {
        text-align: center;
      }
    }
    .ott-calculator__content {
      max-width: 625px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      opacity: 0;
      animation: ottfadein 0.3s forwards;
      animation-delay: 0.1s;
      gap: 3rem;
      @media screen and (max-width: 575px) {
        gap: 1.5em;
      }
    }
  }

  @keyframes ottfadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
