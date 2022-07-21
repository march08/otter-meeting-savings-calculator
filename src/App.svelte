<script lang="ts">
  import LogoSvg from "./assets/logo-otter.svg";
  import { calcStore } from "./calcStore";
  import ResultBox from "./ResultBox.svelte";
  import { salaryOptions } from "./salaryOptions";
  import Select from "./Select.svelte";
</script>

<div class="ott-calculator">
  <div class="ott-calculator-header ">
    <LogoSvg class="ott-calculator-logo" />
    <div>Meeting cost calculator</div>
  </div>
  <div class="ott-calculator__content">
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
        options={[
          {
            value: 0.75,
            label: "45 minutes",
          },
          {
            value: 1,
            label: "1 hour",
          },
          {
            value: 1.25,
            label: "1 hour 15 minutes",
          },
        ]}
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
                nextSalaries[i] = null;
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
        options={[
          {
            value: 1,
            label: "1",
          },
          {
            value: 2,
            label: "2",
          },
          {
            value: 3,
            label: "3",
          },
          {
            value: 4,
            label: "4",
          },
          {
            value: 5,
            label: "5",
          },
          {
            value: 6,
            label: "6",
          },
          {
            value: 7,
            label: "7",
          },
        ]}
      />
    </div>
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
  </div>
</div>

<style lang="scss" global>
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
    padding-bottom: 3em;
  }
  .ott {
    box-sizing: border-box;
    position: relative;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    &-calculator {
      --primary: #007aff;
      --secondary: #0060c8;
      --radius: 24px;
      --input-height: 54px;
      --text-primary: #041d34;
      --text-secondary: #8294a5;
      background: var(--primary);
      border-radius: var(--radius);
      padding: 60px;
      color: white;
      font-weight: 400;
      font-size: 16px;

      &__content {
        max-width: 625px;
        margin: 0 auto;
      }
      &__selects {
        margin-top: 2em;
        display: flex;
        gap: 1em;
        & > * {
          flex-grow: 1;
          width: 1px;
        }
      }

      &-attendees {
        margin-top: 3em;
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
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
