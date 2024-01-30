<script lang="ts">
	import { applyAction, enhance, } from '$app/forms';
	import Loader from '$lib/components/Loader.svelte';
	import OrderDetails from '$lib/components/OrderDetails.svelte';
	import { cart } from '$lib/stores/cart.js';
	import type { ActionResult } from '@sveltejs/kit';

  export let form

  let loading = false

  $: form && cart.clear();


  function handleOrder() {
    loading = true
    return async ({ result } : { result: ActionResult }) => {
      loading = false
      cart.clear();
      await applyAction(result)
    }
  }
</script>

<h1>Your Order</h1>

{#if loading}
  <Loader />
{:else if form}
  <p>Thank you for your order</p>
  <p>{form?.order_id}</p>
{:else}
  <form method="POST" use:enhance={handleOrder}>
  <OrderDetails />
  <button type="submit">I want Pizza</button>
  <button type="button" on:click={cart.demo}>Fill Cart</button>
</form>
{/if}
