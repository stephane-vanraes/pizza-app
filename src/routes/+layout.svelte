<script lang="ts">
	import '../app.css';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import Header from '$lib/components/Header.svelte';
	import { PUBLIC_TITLE } from '$env/static/public';
	export let data;
</script>

<svelte:head>
  <title>{PUBLIC_TITLE}</title>
</svelte:head>

<Header showCart />

<main>
	<slot />
</main>

<Icons />

{#if !data.hasCookiesEnabled}
	<CookieBanner />
{/if}

<style>
	main {
		align-items: flex-start;
		justify-content: flex-start;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-inline: auto;
		max-width: 96ch;
		padding: 1rem;
		width: 100%;
	}
</style>
