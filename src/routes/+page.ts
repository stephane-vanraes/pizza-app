export async function load({ fetch }) {
	const offers = (await fetch('/api/offers').then((res) => res.json())) as Pizza[];

	return {
		offers
	};
}
