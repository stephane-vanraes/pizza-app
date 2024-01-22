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
