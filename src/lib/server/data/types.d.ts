type Pizza = {
	id: string;
	image: string;
	name: string;
	description: string;
	ingredients: string[];
	price: number;
	slug: string;
	type: 'rossi' | 'bianca';
	vegetarian: boolean;
	spice: 0 | 1 | 2 | 3;
};
