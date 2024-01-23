import { pizzas_lookup, related } from '$lib/server/data';
import { error, json } from '@sveltejs/kit';

export async function GET({ url }) {
	const id = url.searchParams.get('id');

	console.log(id);

	if (!id) {
		return error(404);
	}

	return json({
		pizza: pizzas_lookup[id],
		related: related(pizzas_lookup[id])
	});
}
