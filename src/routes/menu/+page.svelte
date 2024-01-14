<script lang="ts">
	export let data;
</script>

<h1>Discover our delicious dishes</h1>

<div>
	<a href="/menu/pizzas">
		<img src={data.pizza_image} alt="" />
		<span>Our Pizzas</span>
	</a>
	<a href="/menu/salads">
		<img src={data.salad_image} alt="" />
		<span>Our Salads</span>
	</a>
	<a href="/menu/desserts">
		<img src={data.dessert_image} alt="" />
		<span>Our Desserts</span>
	</a>
</div>

<style>
	h1 {
		text-align: center;
	}

	div {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		margin: 2rem auto;
		max-width: 100%;
		width: calc(600px + 4rem);
		place-items: center;
	}

	a {
		aspect-ratio: 1 / 1;
		background-color: var(--color-red);
		display: grid;
		font-size: 2rem;
		gap: 0.5rem;
		justify-items: center;
		max-block-size: 200px;
		padding-block-end: 0.5rem;
	}

	a:where(:active, :focus, :hover) {
		background-color: var(--color-green);
		color: black;
	}
</style>
