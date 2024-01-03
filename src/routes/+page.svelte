<script lang="ts">
	import { ingredients, pizzas } from '$lib/data';

	let filter_type: undefined | 'bianca' | 'rossi';
	let filter_ingredients: string[] = [];
	let filter_vegetarian = false;
	$: filtered = pizzas
		.filter((p) => (filter_type ? p.type == filter_type : true))
		.filter((p) =>
			filter_ingredients.length == 0
				? true
				: !filter_ingredients.some((fi) => !p.ingredients.includes(fi))
		)
		.filter((p) => (!filter_vegetarian ? true : p.vegetarian));
</script>

<div>
	<select bind:value={filter_type}>
		<option value={undefined}>All</option>
		<option value="bianca">Bianca</option>
		<option value="rossi">Rossi</option>
	</select>
	<label>
		<input type="checkbox" bind:value={filter_vegetarian} />
		<span>Only vegetarian</span>
	</label>
	<div>
		{#each ingredients as ingredient}
			<label>
				<input type="checkbox" bind:group={filter_ingredients} value={ingredient} />
				<span>{ingredient}</span>
			</label>
		{/each}
	</div>
</div>
<pre>
{JSON.stringify(filter_ingredients)}
</pre>
<ul>
	{#each filtered as pizza}
		<li>{pizza.name}</li>
	{/each}
</ul>

<style>
	div {
		align-items: start;
		display: grid;
		gap: 1rem;
		grid-template-columns: 100px 100px 1fr;
	}

	div > div {
		display: flex;
		flex-wrap: wrap;
	}
</style>
