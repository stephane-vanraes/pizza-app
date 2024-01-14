<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Icons />
