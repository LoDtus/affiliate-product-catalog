import slugify from '@sindresorhus/slugify';

// Hàm chuyển từ text thành slug
export const genSlug = (text: string): string => {
	return slugify(text, {
		separator: '-',
		lowercase: true,
		decamelize: true, // Tự động tách các từ viết nếu nó được viết theo dạng camelCase như 'fooBar' → 'foo-bar'
		customReplacements: [
			['&', ''],
			['🇻🇳', 'viet-nam'],
			['VN', 'viet-nam'],
			['cua', ''],
			['va', ''],
			['la', ''],
			['nhung', ''],
			['cac', ''],
			['a', ''],
		],
		preserveLeadingUnderscore: false, // Không giữ lại dấu gạch chân '_' ở đầu chuỗi nếu có
		preserveTrailingDash: false, // Không giữ lại dấu gạch ngang '-' ở cuối chuỗi nếu có
		transliterate: true, // Chuyển sang các ký tự latin
	});
};

/**
 * @param prefix Tiền tố (ví dụ: '240326')
 * @param alphaLength Độ dài phần chữ (xxx)
 * @param numLength Độ dài phần số (yyy)
 * @param index Số thứ tự bắt đầu từ 0
 * @param sort 'ASC' (tăng dần từ AAA000) hoặc 'DESC' (giảm dần từ ZZZ999)
 */
export const genCustomCode = (
	prefix: string,
	alphaLength: number = 3,
	numLength: number = 3,
	index: number = 0,
	sort: 'asc' | 'desc' = 'asc',
): string => {
	// 1. Tính tổng số tổ hợp tối đa (26^alphaLength * 10^numLength)
	const maxAlphaComb = Math.pow(26, alphaLength);
	const maxNumComb = Math.pow(10, numLength);
	const totalMax = maxAlphaComb * maxNumComb;

	if (index >= totalMax) {
		throw new Error(`Index vượt quá giới hạn tối đa: ${totalMax - 1}`);
	}

	// 2. Xử lý logic theo hướng sắp xếp
	// Nếu DESC, ta lấy giá trị cao nhất trừ đi index
	const currentVal =
		sort.toLowerCase() === 'desc' ? totalMax - 1 - index : index;

	// 3. Tách phần số (yyy)
	const numericPart = (currentVal % maxNumComb)
		.toString()
		.padStart(numLength, '0');

	// 4. Tách phần chữ (xxx)
	let alphaRemaining = Math.floor(currentVal / maxNumComb);
	let alphaPart = '';

	for (let i = 0; i < alphaLength; i++) {
		// Lấy ký tự từ phải sang trái (hệ cơ số 26)
		const charCode = 65 + (alphaRemaining % 26);
		alphaPart = String.fromCharCode(charCode) + alphaPart;
		alphaRemaining = Math.floor(alphaRemaining / 26);
	}

	return prefix?.trim()
		? `${prefix}-${alphaPart}${numericPart}`
		: `${alphaPart}${numericPart}`;
};