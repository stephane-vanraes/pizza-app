<script lang="ts">
	import { enhance } from '$app/forms';
	import OrderDetails from '$lib/components/OrderDetails.svelte';
	import { cart } from '$lib/stores/cart.js';

  export let form

  $: form && cart.clear();
</script>

<h1>Your Order</h1>

{#if form}
  <p>Thank you for your order</p>
  <p>{form?.order_id}</p>
{:else}
  <form method="POST" use:enhance>
  <OrderDetails />
  <button type="submit">I want Pizza</button>
  <button type="button" on:click={cart.demo}>Fill Cart</button>
</form>
{/if}
