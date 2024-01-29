import { pizzas } from '$lib/server/data';

export async function load() {
	const discounted = pizzas.filter((p) => p.discounted);

	return {
		discounted
	};
}
