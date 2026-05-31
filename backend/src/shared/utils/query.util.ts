import {
	ArrayFilter,
	BooleanFilter,
	DateFilter,
	EnumFilter,
	NullFilter,
	NumberFilter,
	StringFilter,
	StringFilterMode,
} from '../../shared/dtos/request/base-filter.dto';
import { QueryRequestDto } from '../../shared/dtos/request/query-request.dto';

/**
 * Kiểm tra xem một request tìm kiếm có chứa các tiêu chí "Fuzzy Search" hay không.
 * @param req Đối tượng QueryRequestDto chứa filter và search keyword
 * @param fuzzyFields Tập hợp các fields được định nghĩa là fuzzy cho model này
 */
export const hasAnyFuzzyField = <T>(
	req: QueryRequestDto<T>,
	fuzzyFields: Set<keyof T>,
): boolean => {
	if (req.search?.keyword?.trim() && req.search?.fields?.length) return true;

	const filter = req.filter;
	if (!filter) return false;

	for (const field of fuzzyFields) {
		const value = (filter as any)[field];
		if (value === undefined) continue;

		// ✅ Chỉ route ES khi field fuzzy-capable VÀ StringFilter có fuzzy op
		if (
			typeof value === 'object' &&
			value !== null &&
			value.fuzzy !== undefined
		) {
			return true;
		}
	}

	return false;
};

// ================================================== DATABASE UTILS ==================================================
// Build condition cho StringFilter
export const buildStringCondition = (sf: StringFilter | undefined): any => {
	if (!sf) return undefined;

	const cond: any = {};

	if (sf.equals !== undefined) cond.$eq = sf.equals;
	if (sf.not !== undefined) cond.$ne = sf.not;
	if (sf.in?.length) cond.$in = sf.in;
	if (sf.notIn?.length) cond.$nin = sf.notIn;

	// Regex chỉ được set 1 lần, ưu tiên contains > startsWith > endsWith
	if (sf.contains) cond.$regex = sf.contains;
	else if (sf.startsWith) cond.$regex = `^${sf.startsWith}`;
	else if (sf.endsWith) cond.$regex = `${sf.endsWith}$`;

	// Nếu như xuất hiện bất kỳ điều kiện nào dưới đây thì sẽ bật chế độ không
	// phân biệt chữ hoa / thường ($options = 'i')
	if (
		sf.mode === StringFilterMode.insensitive ||
		sf.contains ||
		sf.startsWith ||
		sf.endsWith
	) {
		cond.$options = 'i';
	}

	return Object.keys(cond).length > 0 ? cond : undefined;
};

export const buildNumberCondition = (nf: NumberFilter | undefined): any => {
	if (!nf) return undefined;

	const cond: any = {};

	if (nf.equals !== undefined) cond.$eq = nf.equals;
	if (nf.not !== undefined) cond.$ne = nf.not;
	if (nf.gt !== undefined) cond.$gt = nf.gt;
	if (nf.gte !== undefined) cond.$gte = nf.gte;
	if (nf.lt !== undefined) cond.$lt = nf.lt;
	if (nf.lte !== undefined) cond.$lte = nf.lte;
	if (nf.in?.length) cond.$in = nf.in;
	if (nf.notIn?.length) cond.$nin = nf.notIn;

	return Object.keys(cond).length > 0 ? cond : undefined;
};

// Build condition cho DateFilter
export const buildDateCondition = (df: DateFilter | undefined): any => {
	if (!df) return undefined;

	const cond: any = {};

	if (df.equals !== undefined) cond.$eq = df.equals;
	if (df.not !== undefined) cond.$ne = df.not;
	if (df.gt !== undefined) cond.$gt = df.gt;
	if (df.gte !== undefined) cond.$gte = df.gte;
	if (df.lt !== undefined) cond.$lt = df.lt;
	if (df.lte !== undefined) cond.$lte = df.lte;

	return Object.keys(cond).length > 0 ? cond : undefined;
};

// Build condition cho BooleanFilter
export const buildBooleanCondition = (bf: BooleanFilter | undefined): any => {
	if (!bf) return undefined;
	if (bf.equals !== undefined) return bf.equals;
	if (bf.not !== undefined) return { $ne: bf.not };
	return undefined;
};

export const buildEnumCondition = <T>(ef: EnumFilter<T> | undefined): any => {
	if (!ef) return undefined;

	const cond: any = {};

	if (ef.equals !== undefined) cond.$eq = ef.equals;
	if (ef.not !== undefined) cond.$ne = ef.not;
	if (ef.in?.length) cond.$in = ef.in;
	if (ef.notIn?.length) cond.$nin = ef.notIn;

	return Object.keys(cond).length > 0 ? cond : undefined;
};

export const buildArrayCondition = <T>(af: ArrayFilter<T> | undefined): any => {
	if (!af) return undefined;

	const cond: any = {};

	// equals: mảng phải giống hệt (dùng $all + $size để mô phỏng exact match)
	if (af.equals !== undefined) {
		return { $all: af.equals, $size: af.equals.length };
	}

	// has: mảng chứa ít nhất phần tử này
	if (af.has !== undefined) cond.$elemMatch = { $eq: af.has };

	// hasEvery: mảng phải chứa tất cả các giá trị
	if (af.hasEvery?.length) cond.$all = af.hasEvery;

	// hasSome: mảng chứa ít nhất 1 trong các giá trị → dùng $in
	if (af.hasSome?.length) cond.$in = af.hasSome;

	return Object.keys(cond).length > 0 ? cond : undefined;
};

export const buildNullCondition = (nf: NullFilter | undefined): any => {
	if (!nf || nf.equals === undefined) return undefined;
	// equals: true  → field IS NULL     → { $eq: null }
	// equals: false → field IS NOT NULL → { $ne: null }
	return nf.equals ? { $eq: null } : { $ne: null };
};

// Helper để build logical operators ($and, $or, $not)
export const buildLogicalMatch = <T>(
	filter: T & { and?: T[]; or?: T[]; not?: T },
	buildMatchFn: (f: T) => any,
): any => {
	const match: any = {};

	if ((filter as any).and?.length) {
		const clauses = (filter as any).and
			.map((f: T) => buildMatchFn(f))
			.filter((c: any) => Object.keys(c).length > 0);
		if (clauses.length) match.$and = clauses;
	}
	if ((filter as any).or?.length) {
		const clauses = (filter as any).or
			.map((f: T) => buildMatchFn(f))
			.filter((c: any) => Object.keys(c).length > 0);
		if (clauses.length) match.$or = clauses;
	}
	if ((filter as any).not) {
		const clause = buildMatchFn((filter as any).not);
		if (Object.keys(clause).length) match.$nor = [clause];
	}

	return match;
};

// Build sort stage từ string "-field1, field2"
export const buildSortStage = (
	sortStr?: string,
	allowedFields: string[] = [],
): Record<string, 1 | -1> | undefined => {
	if (!sortStr) return undefined;

	const sortMap: Record<string, 1 | -1> = {};
	const parts = sortStr
		.split(',')
		.map((p) => p.trim())
		.filter(Boolean);

	for (const part of parts) {
		const isDesc = part.startsWith('-');
		const field = isDesc ? part.slice(1).trim() : part;

		if (allowedFields.length === 0 || allowedFields.includes(field)) {
			sortMap[field] = isDesc ? -1 : 1;
		}
	}

	return Object.keys(sortMap).length > 0 ? sortMap : undefined;
};

export const buildProjectStage = (
	computedFields: Record<string, any>,
	directFields: Set<string>,
	requiredFields: string[],
	selectedFields?: string[],
): any => {
	const project: any = { _id: 0 };

	const fields = selectedFields?.length
		? [...new Set([...requiredFields, ...selectedFields])]
		: [...Object.keys(computedFields), ...directFields];

	for (const field of fields) {
		if (computedFields[field] !== undefined) {
			project[field] = computedFields[field];
		} else if (directFields.has(field)) {
			project[field] = 1;
		}
	}

	return project;
};

// ================================================== ELASTICSEARCH UTILS ==================================================

/**
 * Build ES wildcard/prefix clause từ StringFilter.
 * Trả về một mảng ES clauses để push vào must[] hoặc filter[].
 * Tách must_clauses và filter_clauses ra riêng vì chúng có semantic khác nhau trong bool query.
 */
export const buildEsStringClauses = (
	esField: string,
	sf: StringFilter | undefined,
): { must: any[]; filter: any[] } => {
	const must: any[] = [];
	const filter: any[] = [];

	if (!sf) return { must, filter };

	// Exact / set matching → đi vào filter (không ảnh hưởng score)
	if (sf.equals !== undefined)
		filter.push({ term: { [esField]: sf.equals } });
	if (sf.not !== undefined)
		filter.push({ bool: { must_not: [{ term: { [esField]: sf.not } }] } });
	if (sf.in?.length) filter.push({ terms: { [esField]: sf.in } });
	if (sf.notIn?.length)
		filter.push({
			bool: { must_not: [{ terms: { [esField]: sf.notIn } }] },
		});

	// Pattern matching → đi vào must (có relevance score)
	const alwaysCaseInsensitive = true; // UX: luôn insensitive cho search
	const caseInsensitive =
		alwaysCaseInsensitive || sf.mode === StringFilterMode.insensitive;

	if (sf.contains) {
		must.push({
			wildcard: {
				[esField]: {
					value: `*${sf.contains}*`,
					case_insensitive: caseInsensitive,
				},
			},
		});
	} else if (sf.startsWith) {
		must.push({
			prefix: {
				[esField]: {
					value: sf.startsWith,
					case_insensitive: caseInsensitive,
				},
			},
		});
	} else if (sf.endsWith) {
		must.push({
			wildcard: {
				[esField]: {
					value: `*${sf.endsWith}`,
					case_insensitive: caseInsensitive,
				},
			},
		});
	}

	return { must, filter };
};

/**
 * Build ES range/term clause từ NumberFilter.
 * equals/not/in/notIn → filter (không ảnh hưởng score)
 * gt/gte/lt/lte → filter range
 */
export const buildEsNumberClause = (
	esField: string,
	nf: NumberFilter | undefined,
): any[] => {
	const filter: any[] = [];
	if (!nf) return filter;

	if (nf.equals !== undefined)
		filter.push({ term: { [esField]: nf.equals } });
	if (nf.not !== undefined)
		filter.push({ bool: { must_not: [{ term: { [esField]: nf.not } }] } });
	if (nf.in?.length) filter.push({ terms: { [esField]: nf.in } });
	if (nf.notIn?.length)
		filter.push({
			bool: { must_not: [{ terms: { [esField]: nf.notIn } }] },
		});

	const range: any = {};
	if (nf.gt !== undefined) range.gt = nf.gt;
	if (nf.gte !== undefined) range.gte = nf.gte;
	if (nf.lt !== undefined) range.lt = nf.lt;
	if (nf.lte !== undefined) range.lte = nf.lte;
	if (Object.keys(range).length) filter.push({ range: { [esField]: range } });

	return filter;
};

/**
 * Build ES range clause từ DateFilter.
 * Trả về clause hoặc undefined nếu không có điều kiện nào.
 */
export const buildEsDateClause = (
	esField: string,
	df: DateFilter | undefined,
): any[] => {
	// 👈 đổi sang any[] để nhất quán với Number
	const filter: any[] = [];
	if (!df) return filter;

	// equals/not → term (exact), không phải range
	if (df.equals !== undefined)
		filter.push({ term: { [esField]: df.equals } });
	if (df.not !== undefined)
		filter.push({ bool: { must_not: [{ term: { [esField]: df.not } }] } });

	const range: any = {};
	if (df.gt !== undefined) range.gt = df.gt;
	if (df.gte !== undefined) range.gte = df.gte;
	if (df.lt !== undefined) range.lt = df.lt;
	if (df.lte !== undefined) range.lte = df.lte;
	if (Object.keys(range).length) filter.push({ range: { [esField]: range } });

	return filter;
};

/**
 * Build ES term clause từ BooleanFilter.
 * Luôn đi vào filter[] (boolean không có relevance score).
 */
export const buildEsBooleanClause = (
	esField: string,
	bf: BooleanFilter | undefined,
): any[] => {
	const filter: any[] = [];
	if (!bf) return filter;

	if (bf.equals !== undefined)
		filter.push({ term: { [esField]: bf.equals } });
	if (bf.not !== undefined)
		filter.push({ bool: { must_not: [{ term: { [esField]: bf.not } }] } });

	return filter;
};

/**
 * Build ES term/terms clause từ EnumFilter.
 * Generic — dùng được cho mọi enum field.
 */
export const buildEsEnumClause = <T>(
	esField: string,
	ef: EnumFilter<T> | undefined,
): any[] => {
	const filter: any[] = [];
	if (!ef) return filter;

	if (ef.equals !== undefined)
		filter.push({ term: { [esField]: ef.equals } });
	if (ef.not !== undefined)
		filter.push({ bool: { must_not: [{ term: { [esField]: ef.not } }] } });
	if (ef.in?.length) filter.push({ terms: { [esField]: ef.in } });
	if (ef.notIn?.length)
		filter.push({
			bool: { must_not: [{ terms: { [esField]: ef.notIn } }] },
		});

	return filter;
};

/**
 * Build ES clause từ ArrayFilter.
 * Tương đương buildArrayCondition cho MongoDB nhưng dùng ES terms/bool.
 *
 * equals    → phải khớp chính xác toàn bộ mảng (dùng kết hợp terms + filter count — ES
 *             không có toán tử exact-array, nên dùng terms_set với minimum_should_match)
 * has       → mảng chứa ít nhất phần tử này (term)
 * hasEvery  → mảng chứa TẤT CẢ các giá trị (bool must terms)
 * hasSome   → mảng chứa ÍT NHẤT MỘT (terms)
 */
export const buildEsArrayClause = <T>(
	esField: string,
	af: ArrayFilter<T> | undefined,
): any[] => {
	const filter: any[] = [];
	if (!af) return filter;

	if (af.equals !== undefined) {
		// Mô phỏng exact array match: tất cả giá trị phải có mặt
		// VÀ không có giá trị nào khác — dùng terms_set
		filter.push({
			terms_set: {
				[esField]: {
					terms: af.equals,
					minimum_should_match_script: {
						source: `Math.max(params.num_terms, doc['${esField}'].length)`,
					},
				},
			},
		});
	}

	// has: chứa đúng phần tử này
	if (af.has !== undefined) {
		filter.push({ term: { [esField]: af.has } });
	}

	// hasEvery: chứa TẤT CẢ → mỗi giá trị phải có mặt → bool must
	if (af.hasEvery?.length) {
		filter.push({
			bool: {
				must: af.hasEvery.map((v) => ({ term: { [esField]: v } })),
			},
		});
	}

	// hasSome: chứa ÍT NHẤT MỘT → terms query
	if (af.hasSome?.length) {
		filter.push({ terms: { [esField]: af.hasSome } });
	}

	return filter;
};

/**
 * Build ES exists clause từ NullFilter.
 * equals: true  → field IS NULL     → must_not exists
 * equals: false → field IS NOT NULL → must exists
 */
export const buildEsNullClause = (
	esField: string,
	nf: NullFilter | undefined,
): any | undefined => {
	if (!nf || nf.equals === undefined) return undefined;

	return nf.equals
		? { bool: { must_not: [{ exists: { field: esField } }] } }
		: { exists: { field: esField } };
};

/**
 * Build ES bool clauses cho logical operators (and/or/not).
 * Bản ES tương đương của buildLogicalMatch cho MongoDB.
 *
 * @param filter Filter object có thể chứa and/or/not
 * @param buildQueryFn Hàm build ES query body từ một sub-filter — inject từ service vào
 */
export const buildEsLogicalClauses = <
	T extends { and?: T[]; or?: T[]; not?: T },
>(
	filter: T,
	buildQueryFn: (subFilter: T) => Record<string, any>,
): { must: any[]; filter: any[]; should: any[] } => {
	const must: any[] = [];
	const filter_clauses: any[] = [];
	const should: any[] = [];

	if (filter.and?.length) {
		for (const sub of filter.and) {
			const subBody = buildQueryFn(sub);
			if (subBody?.query?.bool) must.push({ bool: subBody.query.bool });
		}
	}

	if (filter.or?.length) {
		const orClauses = filter.or
			.map((sub) => buildQueryFn(sub))
			.filter((b) => b?.query?.bool)
			.map((b) => ({ bool: b.query.bool }));
		if (orClauses.length) should.push(...orClauses);
	}

	if (filter.not) {
		const subBody = buildQueryFn(filter.not);
		if (subBody?.query?.bool)
			filter_clauses.push({
				bool: { must_not: [{ bool: subBody.query.bool }] },
			});
	}

	return { must, filter: filter_clauses, should };
};

/**
 * Wrap bool clauses (must/filter/should) + pagination + sort thành ES request body.
 * Generic — không phụ thuộc domain nào.
 */
export const buildEsRequestBody = (
	boolClauses: { must: any[]; filter: any[]; should: any[] },
	options: {
		sort?: any[]; // Đã được build sẵn bởi buildEsSortClauses
		page?: number;
		limit?: number;
		trackTotalHits?: boolean;
		_source?: string[] | boolean;
	} = {},
): Record<string, any> => {
	const page = options.page ?? 1;
	const limit = options.limit ?? 20;

	const bool: any = {};
	if (boolClauses.must.length) bool.must = boolClauses.must;
	if (boolClauses.filter.length) bool.filter = boolClauses.filter;
	if (boolClauses.should.length) {
		bool.should = boolClauses.should;
		bool.minimum_should_match = 1;
	}

	const body: any = {
		query: Object.keys(bool).length ? { bool } : { match_all: {} },
		from: (page - 1) * limit,
		size: limit,
		track_total_hits: options.trackTotalHits ?? true,
	};

	if (options.sort?.length) body.sort = options.sort;
	if (options._source) body._source = options._source;

	return body;
};

/**
 * Build ES sort array từ sort string "-field1, field2".
 * @param fieldMapper Optional function để map DTO field name sang ES field path.
 *                    Nếu không truyền thì dùng field name gốc.
 */
export const buildEsSortClauses = (
	sortStr?: string,
	fieldMapper?: (field: string) => string,
): any[] => {
	if (!sortStr) return [];

	return sortStr
		.split(',')
		.map((p) => p.trim())
		.filter(Boolean)
		.map((part) => {
			const isDesc = part.startsWith('-');
			const field = isDesc ? part.slice(1).trim() : part;
			const esField = fieldMapper ? fieldMapper(field) : field;
			return { [esField]: { order: isDesc ? 'desc' : 'asc' } };
		});
};

/**
 * Extract total hits count từ ES response — handle cả dạng number lẫn object.
 */
export const extractEsTotalHits = (hitsWrapper: any): number => {
	if (!hitsWrapper) return 0;
	return typeof hitsWrapper.total === 'object'
		? (hitsWrapper.total?.value ?? 0)
		: (hitsWrapper.total ?? 0);
};

/**
 * Build ES fuzzy search clause chuyên dụng cho tiếng Việt.
 * Hỗ trợ tốt:
 * - Thiếu chữ (nguy → Nguyen Van A)
 * - Gõ sai chính tả (nguyen → nuyen, nguuyen, nugyen)
 * - Dính chữ một phần (nguyenvana)
 */
export const buildEsFuzzySearchClause = (
	keyword: string,
	fields: string[], // ví dụ: ['fullName', 'username']
	options: {
		fuzziness?: number | 'AUTO';
		prefixLength?: number;
		boostFullName?: boolean;
	} = {},
): any[] => {
	if (!keyword?.trim() || fields.length === 0) return [];

	const k = keyword.trim().toLowerCase();
	const clauses: any[] = [];

	const fuzziness = options.fuzziness ?? 'AUTO';
	const prefixLength = options.prefixLength ?? 1;

	fields.forEach((field) => {
		const boost = options.boostFullName && field === 'fullName' ? 3.0 : 1.0;

		// Multi-match + fuzziness
		clauses.push({
			multi_match: {
				query: k,
				fields: [field],
				type: 'best_fields',
				fuzziness,
				prefix_length: prefixLength,
				operator: 'or',
				boost,
			},
		});

		// Edge n-gram cho fullName (rất hiệu quả với prefix và dính chữ)
		if (field === 'fullName' || field.endsWith('.fullName')) {
			clauses.push({
				match: {
					fullName: {
						query: k,
						fuzziness: 2,
						prefix_length: 2,
						operator: 'and',
					},
				},
			});
		}
	});

	return clauses;
};

/**
 * Fuzzy Search nâng cao cho tiếng Việt
 * Hỗ trợ tốt hơn: thừa chữ, dính chữ, sai thứ tự nhẹ
 */
export const buildEsAdvancedFuzzySearch = (
	keyword: string,
	fields: string[],
): any[] => {
	if (!keyword?.trim() || fields.length === 0) return [];

	const k = keyword.trim().toLowerCase();
	const clauses: any[] = [];

	fields.forEach((field) => {
		const boost = field === 'fullName' ? 3.0 : 1.0;

		// 1. Multi match + fuzziness
		clauses.push({
			multi_match: {
				query: k,
				fields: [field],
				type: 'best_fields',
				fuzziness: 2, // Tăng fuzziness
				prefix_length: 1,
				operator: 'or',
				boost,
			},
		});

		// 2. Edge ngram cho prefix và dính chữ
		clauses.push({
			match: {
				[field]: {
					query: k,
					analyzer: 'edge_ngram_analyzer', // sẽ tạo sau
				},
			},
		});

		// 3. Wildcard cho dính chữ mạnh
		if (field === 'fullName') {
			clauses.push({
				wildcard: {
					[field]: {
						value: `*${k}*`,
						case_insensitive: true,
					},
				},
			});
		}
	});

	return clauses;
};
