<script lang="ts">
  import { calcStore } from "../calcStore";
  import type { Config } from "../config";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";

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
    <p class="title">Guess how much we are spending on this meeting?</p>
  {/if}
  <div class="ott-result-value">
    {Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    }).format(value)}
  </div>
  <div class="ott-result-desc">
    {$calcStore.duration * 60} mins
    {#if $calcStore.attendeeCount > 0}
      {"- "} {$calcStore.attendeeCount} attendees
    {/if}
  </div>
</div>

<style lang="scss" global>
  .ott {
    &-result-box {
      background: var(--secondary);
      border-radius: var(--radius);
      padding: 2em;
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
