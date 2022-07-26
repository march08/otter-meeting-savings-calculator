<script lang="ts">
  import { writable } from "svelte/store";

  type SelectVal = string | number;
  export let options: { value: SelectVal; label: string }[] = [];
  export let value: SelectVal | null = null;
  export let placeholder: string = "";
  export let label: string = null;
  export let onSelectValue: (val: SelectVal) => void;

  const openState = writable({ isOpen: false });

  $: displayValue = options.find((item) => item.value === value)?.label || null;

  let wrapperEl: HTMLDivElement;
  function castToHtmlElement(element: any) {
    return element as HTMLElement;
  }
</script>

<svelte:body
  on:click={(e) => {
    try {
      const clickedEl = castToHtmlElement(e.target);
      const isClickOutside = !wrapperEl.contains(clickedEl);
      if (isClickOutside) {
        openState.set({ isOpen: false });
      }
    } catch {}
  }} />
<div class="ott-select" bind:this={wrapperEl}>
  {#if label}
    <div class="ott-select__label">{label}</div>
  {/if}
  <button
    type="button"
    class="ott-select__button"
    on:click={() => {
      openState.update((s) => ({
        isOpen: !s.isOpen,
      }));
    }}
  >
    {#if displayValue}
      <div class="ott-select__value">
        {displayValue}
      </div>
    {:else}
      <div class="ott-select__placeholder">
        {placeholder}
      </div>
    {/if}
    <div class="chevron-wrapper">
      <div class="chevron bottom" />
    </div>
  </button>
  <div class="ott-select__options" class:is-open={$openState.isOpen}>
    {#each options as option}
      <button
        type="button"
        on:click={() => {
          onSelectValue(option.value);
          openState.set({ isOpen: false });
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
    &__button {
      background: white;
      font-weight: 600;
      border: none;
      width: 100%;
      border-radius: 27px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 4px 0 1.5em;
      color: var(--text-primary);
      background: white;
      outline: none !important;
      border: none !important;
      font-size: 1em;
      cursor: pointer;
      .chevron {
        transition: 0.2s all;
      }
      &:hover .chevron {
        transform: scale(1.1);
      }
    }

    .chevron-wrapper {
      padding-top: 2px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    &__placeholder {
      color: var(--text-secondary);
    }

    &__options {
      position: absolute;
      z-index: 1000;
      top: calc(100% + 0.25em);
      right: 0;
      min-width: 100%;
      background: white;
      border-radius: 24px;
      padding: 1em 0;
      box-shadow: 0px 9.69389px 31.5051px rgb(130 148 165 / 38%);
      max-height: 33vh;
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
    &__options.is-open {
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
