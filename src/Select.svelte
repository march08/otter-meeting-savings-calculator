<script lang="ts">
  type SelectVal = string | number;
  export let options: { value: SelectVal; label: string }[] = [];
  export let value: SelectVal | null = null;
  export let placeholder: string = "";
  export let label: string = null;
  export let onSelectValue: (val: SelectVal) => void;

  $: displayValue = options.find((item) => item.value === value)?.label || null;
</script>

<div class="ott-select">
  {#if label}
    <div class="ott-select__label">{label}</div>
  {/if}
  <div class="ott-select__valueContainer">
    {#if displayValue}
      <div class="ott-select__value">
        {displayValue}
      </div>
    {:else}
      <div class="ott-select__placeholder">
        {placeholder}
      </div>
    {/if}
    <button type="button" class="ott-select__button">
      <div class="chevron bottom" />
    </button>
  </div>
  <div class="ott-select__options">
    {#each options as option}
      <button
        type="button"
        on:click={(e) => {
          onSelectValue(option.value);
        }}
      >
        {option.label}
      </button>
    {/each}
  </div>
</div>

<style lang="scss" global>
  .ott-select:focus-within {
    z-index: 100;
  }
  .ott-select {
    position: relative;
    &__label {
      padding-bottom: 0.5em;
    }
    &__valueContainer {
      background: white;
      border: none;
      border-radius: 24px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 4px 0 1.5rem;
      color: var(--text-primary);
    }

    &__button {
      background: transparent;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      outline: none !important;
      border: none !important;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }

    &__placeholder {
      color: var(--text-secondary);
    }

    &__options {
      position: absolute;
      z-index: 1000;
      top: calc(100% + 0.5em);
      right: 0;
      min-width: 100%;
      background: white;
      border-radius: 24px;
      padding: 1em 0;
      box-shadow: 0px 9.69389px 31.5051px rgb(130 148 165 / 38%);
      max-height: 25vh;
      overflow-x: auto;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s all;

      button {
        display: flex;
        border: none !important;
        outline: none !important;
        font-size: 1em;
        padding: 0.75em 1.5em;
        background: transparent;
        color: var(--text-primary);
        width: 100%;
        cursor: pointer;
        &:hover {
          color: var(--primary);
        }
      }
    }
    &__valueContainer:focus-within + &__options {
      opacity: 1;
      /* display: block; */
      visibility: visible;
    }
  }

  .chevron::before {
    border-style: solid;
    border-width: 3px 3px 0 0;
    border-color: var(--primary);
    content: "";
    display: inline-block;
    height: 9px;
    left: 0;
    position: relative;
    top: 0;
    transform: rotate(135deg);
    vertical-align: top;
    width: 9px;
    border-radius: 2px;
  }
</style>
