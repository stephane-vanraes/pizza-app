import { derived, writable } from 'svelte/store';

type CartPizza = Pizza & { amount: number };

function createCart() {
	const store = writable<Record<string, CartPizza>>({});

	function add(pizza: Pizza, amount: number) {
		store.update(($store) => {
			if (!$store[pizza.id]) {
				$store[pizza.id] = { ...pizza, amount };
			} else {
				$store[pizza.id].amount = amount;
			}
			return $store;
		});
	}

	function remove(pizza: Pizza) {
		store.update(($store) => {
			delete $store[pizza.id];
			return $store;
		});
	}

	const items = derived(store, ($store) =>
		Object.values($store).reduce((acc, cur) => acc + cur.amount, 0)
	);
	const total = derived(store, ($store) =>
		Object.values($store).reduce((acc, cur) => acc + cur.amount * cur.price, 0)
	);

	return {
		add,
		items,
		remove,
		subscribe: store.subscribe,
		total
	};
}

export const cart = createCart();
