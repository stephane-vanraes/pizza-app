import data from './pizzas.json';

export const pizzas = data as Pizza[];

export const pizza_table = pizzas.reduce((lookup, pizza) => {
	lookup[pizza.id] = pizza;
	lookup[pizza.slug] = pizza;
	return lookup;
}, {} as Record<string, Pizza>);

export const ingredients: string[] = [...new Set(pizzas.flatMap((pizza) => pizza.ingredients))];

export function findByIngredient(ingredient: string) {
	return pizzas.filter((p) => p.ingredients.some((i) => i == ingredient));
}
