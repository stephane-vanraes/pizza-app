<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import Icon from './Icon.svelte';

  const total = cart.total;

  const handleInput = (pizza: Pizza) => (ev: FormEventHandler<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    cart.add(pizza, target.value as unknown as number)
  }
</script>

<div>
	{#each Object.values($cart) as pizza}
		<label for={pizza.id}>{pizza.name}</label>
 	{#if pizza.discounted}
    <p>
      <span class="discounted">{pizza.price} NOK</span>
      <span>{pizza.price * .8} NOK</span>
    </p>
  {:else}
    <p>{pizza.price} NOK</p>
  {/if}
		<input type="number" value={pizza.amount} on:input={handleInput(pizza)} />
    <span>{pizza.price * pizza.amount} NOK</span>
		<button on:click={() => cart.remove(pizza)}>
      <Icon name="bin" />
    </button>
	{/each}

  <div class="total">
    <span>Total:</span> 
    <span>{$total} NOK</span>
  </div>
</div>

<style>
	div {
    align-items: center;
		display: grid;
    gap: .5rem 1rem;
		grid-template-columns: 1fr 15ch max-content 10ch max-content;
    width: 100%;
	}

  label {
    font-weight: 600;
  }

  p {
    display: flex;
    gap: 1ch;
    justify-content: end;
    text-align: right;
  }
  
	input {
		border: 2px solid currentColor;
		border-radius: 0.5rem;
		color: var(--text-color);
		padding: 0.25rem 0;
		text-align: center;
		width: 5ch;
	}

  .discounted {
    text-decoration: line-through;
  }

  .total {
    background-color: var(--cta-color);
    border-block-end: 2px solid currentColor;
    display: grid;
    font-weight: 600;
    grid-template-columns: subgrid;
    grid-column: 3 / 5;
    padding: .25rem .5rem;
  }
</style>
