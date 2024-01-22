import { read } from '$app/server';
import images from '$lib/server/data/index.js';
import { error } from '@sveltejs/kit';

export async function GET({ params }) {
	const image = images[params.id];

	if (!image) {
		return error(404);
	}
	return read(image);
}
