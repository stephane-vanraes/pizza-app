export const actions = {
	default: async (ev) => {
		const data = await ev.request.formData();
		console.log(...data.entries());

		return {
			order_id: crypto.randomUUID()
		};
	}
};
