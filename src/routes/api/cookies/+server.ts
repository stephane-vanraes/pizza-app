import { json } from '@sveltejs/kit';

export async function POST({ cookies, url }) {
	const answer = url.searchParams.get('answer');

	if (answer == 'yes') {
		cookies.set('cookies', 'true', {
			path: '/',
			maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
		});
	} else {
		cookies.delete('cookies', {
			path: '/'
		});
	}

	return json({});
}
