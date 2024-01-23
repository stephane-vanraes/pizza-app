<script lang="ts">
	import Offer from './Offer.svelte';

  export let data
</script>

<h1>Our daily offers</h1>

<div>
{#each data.offers as pizza}
  <Offer {pizza} />
{/each}

</div>

<style>
  div {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
</style>