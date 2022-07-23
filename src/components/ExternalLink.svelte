<script lang="ts">
  export let href: string;

  let clazz: string = "";
  export { clazz as class };
</script>

<a class={clazz} target="_blank" rel="noopener noreferrer" {href}>
  <slot />
</a>
