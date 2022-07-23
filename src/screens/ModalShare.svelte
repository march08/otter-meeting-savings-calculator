<script lang="ts">
  import { calcStore } from "../calcStore";
  import ResultBox from "../components/ResultBox.svelte";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";
  import type { Config } from "../config";
  import Facebook from "../assets/Facebook.svelte";
  import Linkedin from "../assets/Linkedin.svelte";
  import Twitter from "../assets/Twitter.svelte";
  import Email from "../assets/Email.svelte";

  export let config: Config;
</script>

<div class="ott-modal-overlay">
  <div class="ott-modal">
    <ResultBox {config} primary={true} showTitle />
    <div class="ott-modal__content">
      <p>Share this tool</p>
      <div class="ott-share-buttons">
        <a class="ott-share-btn">
          <Facebook />
        </a>
        <a class="ott-share-btn">
          <Linkedin />
        </a>
        <a class="ott-share-btn">
          <Twitter />
        </a>
        <a class="ott-share-btn email">
          <Email />
        </a>
      </div>

      <p
        class="close"
        on:click={() => {
          calcStore.update((s) => ({
            ...s,
            displayShareModal: false,
          }));
        }}
      >
        Close
      </p>
    </div>
  </div>
</div>

<style lang="scss" global>
  .ott-calculator {
    .ott-modal-overlay {
      animation: ottfadein 0.2s;
      position: fixed;
      z-index: 10000;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .ott-modal {
      width: calc(100% - 4em);
      max-width: 450px;
      background: white;
      border-radius: var(--radius);
      color: var(--text-primary);
      text-align: center;
      .ott-result-box {
        border-radius: var(--radius) var(--radius) 0 0;
      }
    }
    .ott-modal__content {
      padding: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
      .close {
        text-align: center;
        font-size: 0.875em;
        color: var(--text-secondary);
        cursor: pointer;
      }
    }
    .ott-share-buttons {
      display: flex;
      align-items: center;
      gap: 0.25em;
      .ott-share-btn {
        width: 3em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: transparent;
        transition: 0.2s all;
        text-decoration: none !important;
        cursor: pointer;
        &:hover {
          background: var(--primary);
          color: white;
        }

        svg {
          height: 2em;
          width: 2em;
        }

        &.email {
          svg {
            height: 1.85em;
            width: 1.85em;
          }
        }
      }
    }
  }
</style>
