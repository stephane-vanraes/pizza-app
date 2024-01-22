import { DISCOUNTED } from '$env/static/private';
import { pizzas_lookup } from '$lib/server/data/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const pizza = pizzas_lookup[params.id];

	return {
		pizza,
		discounted: DISCOUNTED.split(',').includes(params.id)
	};
}
