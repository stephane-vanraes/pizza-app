<script lang="ts">
	import { afterNavigate, onNavigate } from '$app/navigation';

  export let discounted: string[] = []
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
			<a href="/menu/{pizza.id}" class:discounted={discounted.includes(pizza.id)}>
				<img src={pizza.image} alt="" bind:this={images[pizza.id]} />
				<p>{pizza.name}</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		align-items: center;
		display: grid;
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
		transition:
			background-color 500ms,
			opacity 500ms;
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
    clip-path: polygon(0% 0%, 100% 0%, calc(100% - .5rem) 50%, 100% 100%, 0% 100%, .5rem 50%);
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

	ul:has(a:where(:active, :focus, :hover)) a:not(:where(:active, :focus, :hover)) {
		--grayness: 1;
		opacity: 0.75;
	}
</style>
