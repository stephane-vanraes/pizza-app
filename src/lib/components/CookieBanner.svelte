<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	let answered = false;

	function handleEnhance() {
		return () => {
			answered = true;
		};
	}
</script>

{#if !answered}
	<form method="POST" action="/api/cookies" use:enhance={handleEnhance} out:slide>
		<p>Do you want our cookies ?</p>
		<button class="cta" type="submit" value="yes" name="answer">Yes</button>
		<button class="cta" type="submit" value="no" name="answer">No</button>
	</form>
{/if}

<style>
	form {
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
