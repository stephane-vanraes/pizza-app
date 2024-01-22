<script lang="ts">
	import PizzaList from '$lib/components/PizzaList.svelte';    
  export let data
</script>

<PizzaList pizzas={data.pizzas} />
