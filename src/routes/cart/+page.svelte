<script lang="ts">
  import { cart } from '$lib/stores/cart'
</script>

<h1>Your Order</h1>

<ul>
{#each Object.values($cart) as order}
  <li>
    <span>{order.name}</span>
    <span>{order.amount}</span>
    <span>{order.amount * order.price} NOK</span>
  </li>

{/each}
</ul>