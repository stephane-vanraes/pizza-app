import { desserts, pizzas, salads } from '$lib/data';
import pick_random from '$lib/utils/pick_random';

export const load = async () => {
	const pizza_image = pick_random(pizzas).image;
	const salad_image = pick_random(salads).image;
	const dessert_image = pick_random(desserts).image;

	return {
		pizza_image: `images/${pizza_image}`,
		salad_image: `images/${salad_image}`,
		dessert_image: `images/${dessert_image}`
	};
};
