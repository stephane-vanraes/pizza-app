<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { cart } from '$lib/stores/cart';

	const cart_items = cart.items;
</script>

<div>
	<header>
		<a href="/" class="icon">
			<Icon name="pizza" />
			<span>Generic Pizza Store</span>
		</a>

		<nav>
			<a href="/" aria-current={$page.route.id == '/' ? 'page' : 'false'}>Home</a>
			<a href="/menu" aria-current={$page.route.id?.startsWith('/menu') ? 'page' : 'false'}>Menu</a>
			{#if $cart_items > 0}
				<a href="/cart" aria-current={$page.route.id == '/cart' ? 'page' : 'false'}
					>Cart ({$cart_items} items)</a
				>
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
		border-block-end: 2px solid transparent;
		padding: 0 0.5rem;
	}

	nav a:where(:active, :focus, :hover, [aria-current~='page']) {
		border-block-end-color: currentColor;
	}
</style>
