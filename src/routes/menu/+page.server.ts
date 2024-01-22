import { DISCOUNTED } from '$env/static/private';
import { pizzas } from '$lib/server/data';

export async function load() {
	return {
		discounted: DISCOUNTED.split(','),
		pizzas
	};
}
