<script lang="ts">
	import { cart } from '$lib/stores/cart';
</script>

<div>
	{#each Object.values($cart) as pizza}
		<label for={pizza.id}>{pizza.name}</label>
		<input type="number" bind:value={$cart[pizza.id].amount} />
		<button on:click={() => cart.remove(pizza)}>Remove</button>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>
