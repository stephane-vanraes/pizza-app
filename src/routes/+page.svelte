<script lang="ts">
	import { desserts, drinks, pizzas, salads } from '$lib/data';
	import Card from './Card.svelte';
</script>

<section>
	<h2>Drinks ({drinks.length})</h2>
	<ul>
		{#each drinks as drink}
			<li>
				<Card {...drink} />
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Pizzas ({pizzas.length})</h2>
	<ul>
		{#each pizzas as pizza}
			<li>
				<Card {...pizza} />
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Salads ({salads.length})</h2>
	<ul>
		{#each salads as salad}
			<li>
				<Card {...salad} />
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Desserts ({desserts.length})</h2>
	<ul>
		{#each desserts as dessert}
			<li>
				<Card {...dessert} />
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		list-style-type: none;
	}
</style>
