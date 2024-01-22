<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { cart } from '$lib/stores/cart';

	export let showCart = false;
	$: id = $page.route.id;

	const cart_items = cart.items;
</script>

<div>
	<header>
		<a href="/" class="icon">
			<Icon name="pizza" />
			<span>Generic Pizza Store</span>
		</a>

		<nav>
			<a href="/" class:active={$page.route.id == '/'}>Home</a>
			<a href="/menu" class:active={$page.route.id?.startsWith('/menu')}>Menu</a>
			{#if showCart}
				<a href="/cart" class:active={$page.route.id == '/cart'}>
					<Icon name="cart" />
					<span>({$cart_items})</span>
				</a>
			{/if}
		</nav>
	</header>
</div>

<style>
	div {
		background-color: var(--secondary-color);
		color: var(--accent-color);
	}

	header {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: auto;
		max-width: 96ch;
		padding-block: 1rem;
		width: 100%;
	}

	.icon {
		align-items: center;
		display: flex;
		gap: 1ch;
		font-size: 2rem;
	}

	nav {
		display: flex;
		gap: 2ch;
		font-size: 1.25rem;
	}

	nav a {
		align-items: center;
		border-block-end: 2px solid transparent;
		display: flex;
		gap: 1ch;
		padding: 0 0.5rem;
	}

	nav a:where(:active, :focus, :hover, .active) {
		border-block-end-color: currentColor;
	}
</style>
