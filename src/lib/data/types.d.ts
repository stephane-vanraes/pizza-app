type Pizza = {
	id: string;
	image: string;
	name: string;
	description: string;
	ingredients: string[];
	slug: string;
	type: 'rossi' | 'bianca';
	vegetarian: boolean;
	spice: 0 | 1 | 2 | 3;
};

type Salad = {
	id: string;
	image: string;
	name: string;
	description: string;
	ingredients: string[];
	slug: string;
	type: 'salad';
	vegetarian: boolean;
	spice: 0 | 1 | 2 | 3;
};

type Dessert = {
	id: string;
	image: string;
	name: string;
	description: string;
	ingredients: string[];
	slug: string;
	type: 'dessert';
	vegetarian: boolean;
	spice: 0 | 1 | 2 | 3;
};

type Drink = {
	id: string;
	image: string;
	name: string;
	description: string;
	slug: string;
	type: 'soda' | 'beer' | 'wine' | 'cocktail';
	alcoholic: boolean;
};
