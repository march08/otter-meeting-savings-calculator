<script lang="ts">
  import { calcStore } from "../calcStore";
  import ResultBox from "../components/ResultBox.svelte";
  import { getSalaryOptions } from "../options/salaryOptions";
  import Select from "../components/Select.svelte";
  import { getDurationOptions } from "../options/durationOptions";
  import { getAttendeeCountOptions } from "../options/attendeeCountOptions";
  import type { Config } from "../config";
  import { scrollToCalculator } from "../utils/scrollToCalculator";
  export let config: Config;

  const durationOptions = getDurationOptions(config.optionsDuration);
  const salaryOptions = getSalaryOptions(config.optionsSalaries);
  const attendeeCountOptions = getAttendeeCountOptions(config.optionsAttendees);
</script>

<div class="ott-calculator__content">
  <ResultBox {config} />
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
              nextSalaries[i] = config.defaultSalary;
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
            {config.copy.calculatorSalaryItemLabel(index)}
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
            placeholder="0"
            options={salaryOptions}
          />
        </div>
      {/each}
    </div>
    <!-- <button
        type="button"
        class="ott-button lg secondary"
        on:click={() => {
          scrollToCalculator();
          calcStore.update((s) => ({
            ...s,
            screen: "END",
          }));
        }}
      >
        {config.copy.calculatorCtaEstimate}
      </button> -->
    {#if config.benefitCoeficient !== 1}
      <div class="ott-calculator-footer">
        <p class="footer-note">
          {config.copy.calculatorCoeficientNote(config.benefitCoeficient)}
        </p>
      </div>
    {/if}
    <!-- {:else}
    <div class="ott-calculator-footer">
      <button
        type="button"
        class="ott-button secondary sm"
        on:click={() => {
          calcStore.update((s) => ({
            ...s,
            displayShareModal: true,
          }));
        }}
      >
        {config.copy.calculatorShareCta}
      </button>
    </div> -->
  {/if}
</div>

<style lang="scss" global>
  .ott-calculator {
    .ott-calculator {
      &__selects {
        display: flex;
        gap: 1em;
        & > * {
          flex-grow: 1;
          width: 100%;
          flex-shrink: 1;
        }

        @media screen and (max-width: 575px) {
          flex-direction: column;
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
            width: 50%;
          }
          & > *:last-child {
            min-width: 200px;
            width: 50%;
            flex-grow: 1;
          }

          @media screen and (max-width: 400px) {
            flex-direction: column;
            gap: 0.5em;
            & > * {
              width: 100% !important;
            }
          }
        }
      }
    }
  }
</style>
