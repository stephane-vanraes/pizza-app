<script lang="ts">
	export let image = '';
	export let name = '';
</script>

<div>
	<img src="/images/{image}" alt="" />
	<span>{name}</span>
</div>

<style>
	div {
		text-align: center;
		display: grid;
		font-weight: 600;
		gap: 0.5rem;
		width: 100%;
	}
	img {
		border-radius: 4px;
		display: block;
		max-width: 100%;
	}
</style>
