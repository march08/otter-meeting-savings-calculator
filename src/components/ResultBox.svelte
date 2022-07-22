<script lang="ts">
  import { calcStore } from "../calcStore";
  import { calculateTotalCostFromState } from "../utils/calculateTotalCosts";

  let value = 0;
  calcStore.subscribe((state) => {
    value = calculateTotalCostFromState(state);
  });
</script>

<div class="ott-result-box">
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
      padding: 40px;
      color: white;
      text-align: center;
    }

    &-result-value {
      font-weight: 600;
      font-size: 2.5em;
    }
  }
</style>
