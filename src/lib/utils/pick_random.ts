export default <T>(array: T[]): T => {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
};

export function selectX<T>(array: T[], x: number): T[] {
	const index = Math.floor(Math.random() * array.length);
	const item = array[index];

	if (x == 1) {
		return [item];
	} else {
		const new_array = structuredClone(array);
		new_array.splice(index, 1);
		return [item, ...selectX(new_array, x - 1)];
	}
}
