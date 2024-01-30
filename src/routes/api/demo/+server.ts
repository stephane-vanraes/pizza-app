import { DISCOUNTED } from '$env/static/private';
import { pizzas } from '$lib/server/data';
import { selectX } from '$lib/utils/pick_random';
import { json } from '@sveltejs/kit';

export async function GET() {
	const result = selectX(pizzas, 5).map((r) => ({
		...r,
		amount: Math.ceil(Math.random() * 3),
		discounted: DISCOUNTED.includes(r.id)
	}));

	return json(result);
}
