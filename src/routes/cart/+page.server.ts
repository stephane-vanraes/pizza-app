import { DISCOUNTED } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		discounted: DISCOUNTED.split(',')
	};
}) satisfies PageServerLoad;
