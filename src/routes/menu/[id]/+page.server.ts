import { pizzas_lookup, related } from '$lib/server/data/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const pizza = pizzas_lookup[params.id];

	if (!pizza) {
		return error(404);
	}

	return {
		pizza,
		related: related(pizza)
	};
}
