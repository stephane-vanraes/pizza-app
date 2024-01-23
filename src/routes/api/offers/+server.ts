import { pizzas } from '$lib/server/data';
import { json } from '@sveltejs/kit';

export async function GET() {
	const offers = pizzas.filter((p) => p.discounted);

	return json(offers);
}
