import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	event.locals.hasCookiesEnabled = event.cookies.get('cookies') == 'true';

	return resolve(event);
};
