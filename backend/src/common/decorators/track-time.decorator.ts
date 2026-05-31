export const TrackTime = () => {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;

		descriptor.value = async function (...args: any[]) {
			const start = performance.now();
			const result = await originalMethod.apply(this, args);
			const finish = performance.now();
			console.log(
				`Hàm ${propertyKey} chạy mất: ${(finish - start).toFixed(2)}ms`,
			);
			return result;
		};

		return descriptor;
	};
}
