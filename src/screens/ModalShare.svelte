<script lang="ts">
  import { calcStore } from "../calcStore";
  import ResultBox from "../components/ResultBox.svelte";
  import type { Config } from "../config";
  import Facebook from "../assets/Facebook.svelte";
  import Linkedin from "../assets/Linkedin.svelte";
  import Twitter from "../assets/Twitter.svelte";
  import Email from "../assets/Email.svelte";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";
  import { formatUSD } from "../utils/formatUsd";
  import ExternalLink from "../components/ExternalLink.svelte";

  export let config: Config;

  let amountSpent = 0;
  calcStore.subscribe((state) => {
    amountSpent = calculateTotalCostFromState(state, config);
  });
  $: shareMessage = config.copy.shareMessage({
    amountSpent,
    amountSpentFormatted: formatUSD(amountSpent),
  });
</script>

<div class="ott-modal-overlay">
  <div class="ott-modal">
    <ResultBox {config} primary={true} showTitle />
    <div class="ott-modal__content">
      <p>{config.copy.shareTitle}</p>
      <div class="ott-share-buttons">
        <ExternalLink
          class="ott-share-btn"
          href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
            shareMessage
          )}&u=${encodeURIComponent(config.copy.shareUrlFacebook)}`}
        >
          <Facebook />
        </ExternalLink>
        <ExternalLink
          class="ott-share-btn"
          href={`https://twitter.com/share?text=${encodeURIComponent(
            shareMessage
          )}&url=${encodeURIComponent(config.copy.shareUrlTwitter)}`}
        >
          <Twitter />
        </ExternalLink>
        <ExternalLink
          class="ott-share-btn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            config.copy.shareUrlLinkedin
          )}`}
        >
          <Linkedin />
        </ExternalLink>
        <ExternalLink
          href={`mailto:?subject=${encodeURIComponent(
            config.copy.shareEmailSubjet
          )}&body=${encodeURIComponent(shareMessage)}
          %0D%0A%0D%0A
${encodeURIComponent(config.copy.shareUrlEmail)}`}
          class="ott-share-btn email"
        >
          <Email />
        </ExternalLink>
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
        {config.copy.shareClose}
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
