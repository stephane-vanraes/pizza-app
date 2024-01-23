/**
 * IMAGES
 */
const files = import.meta.glob('./images/*.*', {
	as: 'url',
	eager: true
});

export const images = Object.keys(files).reduce(
	(acc, key) => {
		const new_key = key.replace('./images/', '').replace('.png', '');
		acc[new_key] = files[key];
		return acc;
	},
	{} as Record<string, string>
);

/**
 * PIZZAS
 */

import json_pizza from './dishes/pizzas.json';

export const pizzas = json_pizza as Pizza[];
export const pizzas_lookup = pizzas.reduce(
	(lookup, pizza) => {
		lookup[pizza.id] = pizza;
		lookup[pizza.slug] = pizza;
		return lookup;
	},
	{} as Record<string, Pizza>
);

export const related = (pizza: Pizza) => {
	const weighted = pizzas.map((p) => {
		let weight = 0;

		weight += Math.pow(2, p.ingredients.filter((i) => pizza.ingredients.includes(i)).length) - 1;
		weight += p.type == pizza.type ? 2 : 0;
		weight += p.spice == pizza.spice ? 2 : 0;
		weight += p.vegetarian && pizza.vegetarian ? 5 : 0;

		if (pizza.id == p.id) weight = 0;

		return {
			id: p.id,
			weight
		};
	});

	const sorted = weighted.sort((a, b) => b.weight - a.weight);
	const related = sorted.slice(0, 3).map(({ id }) => pizzas_lookup[id]);

	return related;
};
