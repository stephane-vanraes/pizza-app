<script lang="ts">
	export let label = '';
	export let min = 0;
	export let value = 0;
</script>

<label>
	<span>{label}</span>
	<input bind:value type="number" {min} />
</label>

<style>
	label {
		align-items: center;
		display: flex;
		gap: 1ch;
	}
	input {
		border: 2px solid currentColor;
		border-radius: 0.5rem;
		color: var(--text-color);
		padding: 0.25rem 0;
		text-align: center;
		width: 5ch;
	}
</style>
