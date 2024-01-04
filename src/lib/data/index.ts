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
