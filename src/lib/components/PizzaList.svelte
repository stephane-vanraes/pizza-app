<script lang="ts">
	import { afterNavigate, onNavigate } from '$app/navigation';
	import Icon from './Icon.svelte';
  
	export let pizzas: Pizza[] = [];

	let cur_image: HTMLElement | undefined;
	const images: Record<string, HTMLElement> = {};

	onNavigate((navigation) => {
		//@ts-expect-error
		console.log('start');
		if (!document.startViewTransition) return;
		console.log('step 1');
		cur_image && cur_image.classList.remove('image');
		console.log('step 2');
		navigation.to?.params?.id && images[navigation.to.params.id].classList.add('image');
		console.log('step 3');

		return new Promise((resolve) => {
			//@ts-expect-error
			console.log('step 4');
			document.startViewTransition(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});

	afterNavigate((navigation) => {
		cur_image = navigation.from?.params?.id ? images[navigation.from?.params?.id] : undefined;
		cur_image && cur_image.classList.add('image');
	});
</script>

<ul>
	{#each pizzas as pizza}
		<li>
			<a href="/menu/{pizza.id}" class:discounted={pizza.discounted}>
				<img src={pizza.image} alt="" bind:this={images[pizza.id]} />
				<p>{pizza.name}
          {#if pizza.vegetarian}
            <Icon name="leaf" />
          {/if}</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		align-items: center;
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
		list-style-type: none;
		margin-inline: auto;
		max-width: 96ch;
		width: 100%;
	}

	li {
		position: relative;
	}

	a {
		border-radius: 0.5rem;
		display: grid;
		filter: grayscale(var(--grayness));
		font-weight: 500;
		gap: 0.5rem;
		grid-template-rows: max-content 3lh;
		justify-items: center;
		opacity: 1;
		padding: 0.5rem;
		text-align: center;
	}

	img {
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		display: block;
		height: 100px;
		position: relative;
	}

	a.discounted:after {
		background-color: var(--primary-color);
		clip-path: polygon(0% 0%, 100% 0%, calc(100% - 0.5rem) 50%, 100% 100%, 0% 100%, 0.5rem 50%);
		content: '20% off';
		position: absolute;
		top: calc(50% - 2lh);
		left: 0;
		right: 0;
		text-align: center;
	}

	a:where(:active, :focus, :hover) {
		background-color: var(--primary-color);
		font-weight: 600;
	}

	a:is(:active, :focus, :hover):after {
		background-color: var(--background-color) !important;
		clip-path: none;
		font-weight: 600;
	}

	ul:has(a:where(:active, :focus, :hover)) a:not(:where(:active, :focus, :hover)) {
		_--grayness: 1;
		_opacity: 0.75;
	}

  a :global(svg) {
    color: var(--secondary-color);
    display: inline-block;
  }
</style>
