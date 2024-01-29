<script lang="ts">
	import { page } from '$app/stores';

    
    export let data;
</script>

<h2>Currently Discounted</h2>

<div>
  {#each data.discounted as pizza}
    <a href="/menu/{pizza.id}" class:active={$page.params.id == pizza.id}>
      <img src={pizza.image} alt="">
      <p>{pizza.name}</p>
    </a>
  {/each}
</div>

<slot />

<style>
  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
  }
  a {
    display: grid;
    font-weight: 600;
    place-items: center;
    text-align: center;
  }
  a > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
  img {
    width: 100%;
  }
  p {
    background-color: #fffa;
  }
  a:hover > p, 
  .active > p {
    background-color: var(--primary-color);
  }
</style>