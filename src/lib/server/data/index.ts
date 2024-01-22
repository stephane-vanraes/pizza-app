const files = import.meta.glob('./images/*.*', {
	as: 'url',
	eager: true
});

const images = Object.keys(files).reduce((acc, key) => {
	const new_key = key.replace('./images/', '').replace('.png', '');
	acc[new_key] = files[key];
	return acc;
}, {} as Record<string, string>);

export default images;

/*import { read } from '$app/server';

import json_pizza from './pizzas.json';
import json_salads from './salads.json';
import json_desserts from './desserts.json';

export const pizzas = json_pizza as Pizza[];
export const salads = json_salads as Salad[];
export const desserts = json_desserts as Dessert[];

export const pizza_table = pizzas.reduce((lookup, pizza) => {
	lookup[pizza.id] = pizza;
	lookup[pizza.slug] = pizza;
	return lookup;
}, {} as Record<string, Pizza>);

export const ingredients: string[] = [...new Set(pizzas.flatMap((pizza) => pizza.ingredients))];

export function findByIngredient(ingredient: string) {
	return pizzas.filter((p) => p.ingredients.some((i) => i == ingredient));
}
*/
