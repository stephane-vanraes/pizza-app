export const actions = {
	default: async (ev) => {
		const data = await ev.request.formData();
		console.log(...data.entries());

		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			order_id: crypto.randomUUID()
		};
	}
};
