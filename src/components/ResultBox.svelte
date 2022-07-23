<script lang="ts">
  import { calcStore } from "../calcStore";
  import type { Config } from "../config";
  import { durationOptions } from "../options/durationOptions";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";
  import { formatUSD } from "../utils/formatUsd";

  export let config: Config;
  export let primary: boolean = false;
  export let showTitle: boolean = false;
  let value = 0;
  calcStore.subscribe((state) => {
    value = calculateTotalCostFromState(state, config);
  });
</script>

<div class="ott-result-box" class:primary>
  {#if showTitle}
    <p class="title">{config.copy.resultTitle}</p>
  {/if}
  <div class="ott-result-value">
    {formatUSD(value)}
  </div>
  <div class="ott-result-desc">
    {config.copy.resultInputSummary(
      $calcStore.duration,
      $calcStore.attendeeCount
    )}
  </div>
</div>

<style lang="scss" global>
  .ott {
    &-result-box {
      background: var(--secondary);
      border-radius: var(--radius);
      padding: 2em;
      @media screen and (max-width: 575px) {
        padding: 1.5em;
      }
      color: white;
      text-align: center;
      width: 100%;
      .title {
        max-width: 240px;
        margin: auto;
        padding-bottom: 1em;
      }
      &.primary {
        background: var(--primary);
      }
    }

    &-result-value {
      font-weight: 600;
      font-size: 2.5em;
    }
  }
</style>
