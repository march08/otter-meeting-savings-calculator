<script lang="ts">
  export let href: string;

  let clazz: string = "";
  export { clazz as class };
</script>

<a
  class={clazz}
  class:ott-external-link={true}
  target="_blank"
  rel="noopener noreferrer"
  {href}
>
  <slot />
</a>

<style lang="scss" global>
  .ott-external-link {
    color: var(--primary);
    &:visited,
    &:active {
      color: var(--primary);
    }
  }
</style>
