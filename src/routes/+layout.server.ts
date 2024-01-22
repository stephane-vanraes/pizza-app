export async function load({ locals }) {
	return {
		hasCookiesEnabled: locals.hasCookiesEnabled
	};
}
