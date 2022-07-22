<script lang="ts">
  import { calcStore } from "../calcStore";
  import ResultBox from "../components/ResultBox.svelte";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";
  import type { Config } from "../config";

  export let config: Config;

  let totalCost = 0;
  calcStore.subscribe((state) => {
    totalCost = calculateTotalCostFromState(state);
  });
</script>

<ResultBox />
{#if $calcStore.salaries.length > 0}
  <div class="ott-calculator-footer">
    <div class="ott-result-buttons">
      {#if totalCost > config.ctaCostThreshold}
        <a class="ott-button" href={config.hrefHighCost}>
          {config.copy.ctaHighCost}
        </a>
      {:else}
        <a class="ott-button" href={config.hrefLowCost}>
          {config.copy.ctaLowCost}
        </a>
      {/if}
      <button type="button" class="ott-button secondary">
        {config.copy.shareButton}
      </button>
    </div>
    <p
      class="calc-again"
      on:click={() => {
        calcStore.update((s) => ({
          ...s,
          screen: "CALCULATOR",
        }));
      }}
    >
      Calculate again
    </p>
  </div>
{/if}

<style lang="scss" global>
  .ott-calculator {
    .ott-result-buttons {
      display: flex;
      flex-direction: column;
      gap: 1em;
      & > * {
        width: 100%;
      }
    }
    .calc-again {
      cursor: pointer;
    }
    .ott-calculator {
      &__selects {
        display: flex;
        gap: 1em;
        & > * {
          flex-grow: 1;
          width: 1px;
        }
      }

      &-attendees {
        display: flex;
        flex-direction: column;
        gap: 1em;
        &__item {
          display: flex;
          gap: 1em;
          align-items: center;
          .title {
            /* text-align: right; */
            flex-grow: 1;
            width: 120px;
          }
          & > *:last-child {
            min-width: 250px;
            width: 120px;
            flex-grow: 1;
          }
        }
      }
    }
  }
</style>
