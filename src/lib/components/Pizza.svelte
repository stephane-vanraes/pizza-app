<script lang="ts">
	import Icon from './Icon.svelte';
	import NumberField from './NumberField.svelte';
	import { cart } from '$lib/stores/cart';

  export let discounted = false;
	export let pizza: Pizza;

	let value = $cart[pizza.id]?.amount ?? 0;

	const removeAll = () => cart.remove(pizza);
	const setCart = (count: number) => (count > 0 ? cart.add(pizza, count) : cart.remove(pizza));

	$: setCart(value);

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		//@ts-expect-error
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			//@ts-expect-error
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="wrapper">
	<img src={pizza.image} alt="" />
	<div>
		<h1>{pizza.name}</h1>
		<p>{pizza.description}</p>
    {#if discounted}
      <p class="discount_banner">Now 20% off</p>
    {/if}
	</div>
</div>

<form>
	<NumberField label="In Cart" bind:value />
 	{#if discounted}
    <span class="discounted">{pizza.price} NOK</span>
    <span>{pizza.price * .8} NOK</span>
  {:else}
  <span>{pizza.price} NOK</span>
  {/if}
	<button on:click={removeAll}>Remove all</button>
	<a class="btn" href="/cart">Go to cart</a>
</form>

<dl>
	<dt>Vegetarian</dt>
	<dd>{pizza.vegetarian ? 'Yes' : 'No'}</dd>
	<dt>Spice Level</dt>
	<dd>
		{#each { length: pizza.spice } as _}
			<Icon name="flame" />
		{:else}
			NA
		{/each}
	</dd>
	<dt>Ingredients</dt>
	<dd>
		{#each pizza.ingredients as ingredient}
			<span>{ingredient}</span>
		{/each}
	</dd>
</dl>

<style>
	.wrapper {
		align-items: center;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		justify-content: center;
		justify-items: center;
		place-items: center;
		margin: 0rem auto;
		max-width: 100%;
	}

	.wrapper > div {
		align-items: center;
		background-color: var(--accent-color);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		justify-content: center;
		padding: 2rem;
    position: relative;
    overflow: hidden;
		text-align: center;
	}

  .discount_banner {
    background-color: var(--primary-color);
    font-weight: 600;
    padding: .25rem 2rem .25rem 2rem;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: bottom left;
    transform: translate(3rem, -100%) rotate(45deg);
  }
  
	img {
		aspect-ratio: 1 / 1;
		view-transition-name: image;
		width: 100%;
	}

	dl {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 0.5rem 1rem;
		max-width: 800px;
		width: 100%;
	}

	dt {
		font-weight: 600;
	}

	dd {
		display: flex;
		flex-wrap: wrap;
	}

	dd > span + span:before {
		content: '|';
		display: inline-block;
		padding-inline: 1ch;
	}

	form {
		align-items: center;
		display: flex;
		gap: 2ch;
	}

	form > span {
		font-weight: 600;
	}

  .discounted {
    text-decoration: line-through;
  }
</style>
