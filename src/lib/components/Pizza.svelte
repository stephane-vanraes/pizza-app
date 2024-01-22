<script lang="ts">
	import Icon from "./Icon.svelte";
	import NumberField from "./NumberField.svelte";
  import { cart } from '$lib/stores/cart';

  export let pizza : Pizza
  
  let value = $cart[pizza.id]?.amount ?? 0;

  const removeAll = () => cart.remove(pizza)
  const setCart = (count: number) => count > 0  ? cart.add(pizza, count) : cart.remove(pizza);

  $: setCart(value)

</script>

<div class="wrapper">
  <img src={pizza.image} alt="" />
    <div>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
    </div>
</div>

<form>
  <NumberField label="In Cart" bind:value  />
  <span>{pizza.price} NOK</span>
  <button on:click={removeAll}>Remove all</button>
  <a class="btn" href="/cart">Go to cart</a>
</form>

<dl>
  <dt>Vegetarian</dt>
  <dd>{pizza.vegetarian ? 'Yes': 'No'}</dd>
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

  .wrapper > div  {
    align-items: center;
    background-color: var(--accent-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }

  img {
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: .5rem 1rem;
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

</style>