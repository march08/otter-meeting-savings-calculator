<script lang="ts">
  import { calcStore } from "../calcStore";
  import ResultBox from "../components/ResultBox.svelte";
  import { salaryOptions } from "../options/salaryOptions";
  import Select from "../components/Select.svelte";
  import { durationOptions } from "../options/durationOptions";
  import { attendeeCountOptions } from "../options/attendeeCountOptions";
</script>

<ResultBox />
<div class="ott-calculator__selects">
  <Select
    label="Meeting length"
    value={$calcStore.duration}
    onSelectValue={(value) => {
      calcStore.update((s) => {
        const val = Number(value);
        return {
          ...s,
          duration: val,
        };
      });
    }}
    options={durationOptions}
  />
  <Select
    label="Attendees"
    value={$calcStore.attendeeCount}
    placeholder="none"
    onSelectValue={(value) => {
      calcStore.update((state) => {
        const attendeeCount = Number(value);
        let nextSalaries = [...state.salaries];
        if (attendeeCount > state.attendeeCount) {
          for (let i = state.attendeeCount; i < attendeeCount; i += 1) {
            nextSalaries[i] = 40000;
          }
        } else {
          nextSalaries = nextSalaries.slice(0, attendeeCount);
        }
        return {
          ...state,
          attendeeCount,
          salaries: nextSalaries,
        };
      });
    }}
    options={attendeeCountOptions}
  />
</div>
{#if $calcStore.salaries.length > 0}
  <div class="ott-calculator-attendees">
    {#each $calcStore.salaries as salary, index}
      <div class="ott-calculator-attendees__item">
        <div class="title">
          Estimate salary for attendee {index}
        </div>
        <Select
          value={salary}
          onSelectValue={(value) => {
            calcStore.update((state) => {
              const salary = Number(value);
              const nextSalaries = [...state.salaries];
              nextSalaries[index] = salary;
              return {
                ...state,
                salaries: nextSalaries,
              };
            });
          }}
          placeholder="Unknown"
          options={salaryOptions}
        />
      </div>
    {/each}
  </div>
  <div class="ott-calculator-footer">
    <button
      type="button"
      class="ott-button lg secondary"
      on:click={() => {
        calcStore.update((s) => ({
          ...s,
          screen: "END",
        }));
      }}
    >
      Estimate my meeting cost
    </button>
    <p>Salaries multiplied by 1.4 to account for benefits</p>
  </div>
{/if}

<style lang="scss" global>
  .ott-calculator {
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
