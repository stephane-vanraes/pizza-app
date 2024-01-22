<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
  import Pizza from '$lib/components/Pizza.svelte'
  export let data
</script>

<a href="/menu">
  <Icon name="arrow-left" />
  <span>Back to Menu</span>
</a>

<Pizza pizza={data.pizza} />

<style>
  a {
    align-items: center;
    display: flex;
    gap: 1ch;
  }
</style>