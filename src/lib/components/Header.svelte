<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
</script>

<header>
	<a href="/" class="icon">
		<Icon name="pizza" />
		<span>Home</span>
	</a>

	<nav>
		<a href="/" aria-current={$page.route.id == '/' ? 'page' : 'false'}>Home</a>
		<a href="/menu" aria-current={$page.route.id?.startsWith('/menu') ? 'page' : 'false'}>Menu</a>
	</nav>
</header>

<style>
	header {
		align-items: center;
		display: flex;
		font-size: 1.25rem;
		justify-content: space-between;
		padding: 1rem;
		width: 100%;
	}

	.icon {
		background-color: var(--color-red);
		border-radius: 0 0 50% 50%;
		padding: 1rem 1.125rem 0rem 1.125rem;
		transform: translateY(-1rem);
	}

	.icon > span {
		font-size: 0;
	}

	.icon:where(:active, :focus, :hover) {
		background-color: var(--color-green);
		color: black;
	}

	nav {
		display: flex;
		gap: 2rem;
	}

	nav > a {
		display: block;
		padding: 0 1rem 0.25rem;
	}

	nav > a[aria-current~='page'] {
		border-block-end: 2px solid currentColor;
	}
</style>
