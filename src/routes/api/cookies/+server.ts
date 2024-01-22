import { json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
	const form = await request.formData();

	if (form.get('answer') == 'yes') {
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
