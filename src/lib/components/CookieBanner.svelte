<script lang="ts">
	import { slide } from 'svelte/transition';
	let answered = false;

	async function handleClick(answer: string) {
		await fetch(`/api/cookies?answer=${answer}`, { method: 'POST' });
		answered = true;
	}
</script>

{#if !answered}
	<div out:slide>
		<p>Do you want our cookies ?</p>
		<button class="cta" on:click={() => handleClick('yes')}>Yes</button>
		<button class="cta" on:click={() => handleClick('no')}>No</button>
	</div>
{/if}

<style>
	div {
		align-items: center;
		background-color: var(--cta-color);
		bottom: 0;
		display: flex;
		gap: 1rem;
		justify-content: center;
		padding: 1rem;
		position: fixed;
		width: 100%;
	}
</style>
