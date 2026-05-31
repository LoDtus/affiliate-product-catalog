export const HTTP_STATUS = {
	// INFORMATIONAL: Request đã được nhận và server đang tiếp tục xử lý ------------------------------
	100: {
		// Client có thể tiếp tục gửi request body
		code: 'CONTINUE',
		description: 'Continue',
	},
	101: {
		// Server đồng ý chuyển protocol (ví dụ HTTP → WebSocket)
		code: 'SWITCHING_PROTOCOLS',
		description: 'Switching Protocols',
	},
	102: {
		// Server đã nhận và đang xử lý request (thường dùng trong WebDAV)
		code: 'PROCESSING',
		description: 'Processing',
	},
	103: {
		// Server gửi hint sớm (header) để client preload resource, cải thiện tốc độ
		code: 'EARLY_HINTS',
		description: 'Early Hints',
	},

	// SUCCESS: Request được xử lý thành công ------------------------------
	200: {
		// Request thành công, trả về dữ liệu bình thường
		code: 'OK',
		description: 'OK',
	},
	201: {
		// Resource mới được tạo thành công (thường sau POST)
		code: 'CREATED',
		description: 'Created',
	},
	202: {
		// Request được chấp nhận nhưng xử lý chưa hoàn tất (async)
		code: 'ACCEPTED',
		description: 'Accepted',
	},
	203: {
		// Thông tin không phải từ nguồn gốc chính thức (proxy đã sửa đổi)
		code: 'NON_AUTHORITATIVE_INFORMATION',
		description: 'Non-Authoritative Information',
	},
	204: {
		// Thành công nhưng không có body (thường dùng cho DELETE, PUT)
		code: 'NO_CONTENT',
		description: 'No Content',
	},
	205: {
		// Thành công, client nên reset form hoặc document view
		code: 'RESET_CONTENT',
		description: 'Reset Content',
	},
	206: {
		// Trả về một phần dữ liệu (range request, ví dụ video streaming)
		code: 'PARTIAL_CONTENT',
		description: 'Partial Content',
	},
	207: {
		// Trả về nhiều status code trong một response (WebDAV)
		code: 'MULTI_STATUS',
		description: 'Multi-Status',
	},
	208: {
		// Resource đã được báo cáo trước đó (tránh lặp lại trong multistatus - WebDAV)
		code: 'ALREADY_REPORTED',
		description: 'Already Reported',
	},
	214: {
		// Proxy hoặc cache đã áp dụng transformation (nén, mã hóa, thay đổi format) - thường dùng kèm Warning header (unofficial, từ RFC cũ)
		code: 'TRANSFORMATION_APPLIED',
		description: 'Transformation Applied',
	},
	226: {
		// Server dùng instance manipulation (delta encoding) để trả response hiệu quả hơn
		code: 'IM_USED',
		description: 'IM Used',
	},

	// REDIRECTION: Client cần thực hiện hành động khác để hoàn thành ------------------------------
	300: {
		// Có nhiều lựa chọn resource, client cần chọn một
		code: 'MULTIPLE_CHOICES',
		description: 'Multiple Choices',
	},
	301: {
		// Resource chuyển hướng vĩnh viễn (cập nhật URL mới)
		code: 'MOVED_PERMANENTLY',
		description: 'Moved Permanently',
	},
	302: {
		// Resource tạm thời chuyển hướng (thường giữ nguyên method cũ)
		code: 'FOUND',
		description: 'Found',
	},
	303: {
		// Chuyển hướng đến URL khác, dùng GET để lấy (thường sau POST để tránh resubmit)
		code: 'SEE_OTHER',
		description: 'See Other',
	},
	304: {
		// Resource chưa thay đổi (dùng cache, client dùng bản cũ)
		code: 'NOT_MODIFIED',
		description: 'Not Modified',
	},
	305: {
		// Phải truy cập qua proxy được chỉ định (rất hiếm dùng hiện nay)
		code: 'USE_PROXY',
		description: 'Use Proxy',
	},
	306: {
		// Code dự phòng cũ (không còn dùng, trước đây liên quan đến Use Proxy)
		code: 'UNUSED',
		description: 'Unused',
	},
	307: {
		// Redirect tạm thời, giữ nguyên method gốc (tốt hơn 302 cho non-GET)
		code: 'TEMPORARY_REDIRECT',
		description: 'Temporary Redirect',
	},
	308: {
		// Redirect vĩnh viễn, giữ nguyên method gốc (tốt hơn 301 cho non-GET)
		code: 'PERMANENT_REDIRECT',
		description: 'Permanent Redirect',
	},

	// Client Error: Lỗi từ phía client ------------------------------
	400: {
		// Request không hợp lệ (sai cú pháp, thiếu param, format sai...)
		code: 'BAD_REQUEST',
		description: 'Bad Request',
	},
	401: {
		// Chưa xác thực (thiếu hoặc sai token, auth)
		code: 'UNAUTHORIZED',
		description: 'Unauthorized',
	},
	402: {
		// Cần thanh toán (rất hiếm dùng thực tế, dành cho future payment)
		code: 'PAYMENT_REQUIRED',
		description: 'Payment Required',
	},
	403: {
		// Đã xác thực nhưng không có quyền truy cập
		code: 'FORBIDDEN',
		description: 'Forbidden',
	},
	404: {
		// Không tìm thấy resource
		code: 'NOT_FOUND',
		description: 'Not Found',
	},
	405: {
		// Method không được hỗ trợ (ví dụ POST vào endpoint chỉ GET)
		code: 'METHOD_NOT_ALLOWED',
		description: 'Method Not Allowed',
	},
	406: {
		// Server không thể trả định dạng mà client chấp nhận (Accept header)
		code: 'NOT_ACCEPTABLE',
		description: 'Not Acceptable',
	},
	407: {
		// Cần xác thực proxy
		code: 'PROXY_AUTHENTICATION_REQUIRED',
		description: 'Proxy Authentication Required',
	},
	408: {
		// Client gửi request quá chậm (server timeout)
		code: 'REQUEST_TIMEOUT',
		description: 'Request Timeout',
	},
	409: {
		// Xung đột (ví dụ concurrent modification, version conflict)
		code: 'CONFLICT',
		description: 'Conflict',
	},
	410: {
		// Resource đã bị xóa vĩnh viễn (khác 404: không bao giờ quay lại)
		code: 'GONE',
		description: 'Gone',
	},
	411: {
		// Thiếu header Content-Length khi server yêu cầu
		code: 'LENGTH_REQUIRED',
		description: 'Length Required',
	},
	412: {
		// Precondition trong header không thỏa mãn (If-Match, If-Unmodified-Since...)
		code: 'PRECONDITION_FAILED',
		description: 'Precondition Failed',
	},
	413: {
		// Payload (body) quá lớn so với giới hạn server
		code: 'PAYLOAD_TOO_LARGE',
		description: 'Payload Too Large',
	},
	414: {
		// URI quá dài
		code: 'REQUEST_URI_TOO_LONG',
		description: 'Request-URI Too Long',
	},
	415: {
		// Media type (Content-Type) không được hỗ trợ
		code: 'UNSUPPORTED_MEDIA_TYPE',
		description: 'Unsupported Media Type',
	},
	416: {
		// Range request không thỏa mãn (range ngoài giới hạn dữ liệu)
		code: 'REQUEST_RANGE_NOT_SATISFIABLE',
		description: 'Request Range Not Satisfiable',
	},
	417: {
		// Expect header không thỏa mãn (ví dụ Expect: 100-continue thất bại)
		code: 'EXPECTATION_FAILED',
		description: 'Expectation Failed',
	},
	419: {
		// Trang/session hết hạn (thường dùng ở Laravel cho CSRF token expire)
		code: 'PAGE_EXPIRED',
		description: 'Page Expired',
	},
	421: {
		// Request gửi nhầm server (HTTP/2 connection reuse sai)
		code: 'MISDIRECTED_REQUEST',
		description: 'Misdirected Request',
	},
	422: {
		// Entity đúng cú pháp nhưng không xử lý được (validation fail, WebDAV)
		code: 'UNPROCESSABLE_ENTITY',
		description: 'Unprocessable Entity',
	},
	423: {
		// Resource bị lock (WebDAV)
		code: 'LOCKED',
		description: 'Locked',
	},
	424: {
		// Thất bại do dependency khác lỗi (WebDAV)
		code: 'FAILED_DEPENDENCY',
		description: 'Failed Dependency',
	},
	425: {
		// Request quá sớm (trước khi server sẵn sàng, chống replay attack)
		code: 'TOO_EARLY',
		description: 'Too Early',
	},
	426: {
		// Client cần upgrade protocol (ví dụ lên TLS version mới hơn)
		code: 'UPGRADE_REQUIRED',
		description: 'Upgrade Required',
	},
	427: {
		// Chưa được gán chính thức (reserved)
		code: 'UNASSIGNED',
		description: 'Unassigned',
	},
	428: {
		// Bắt buộc phải có precondition header (If-Match...)
		code: 'PRECONDITION_REQUIRED',
		description: 'Precondition Required',
	},
	429: {
		// Quá nhiều request (rate limiting)
		code: 'TOO_MANY_REQUESTS',
		description: 'Too Many Requests',
	},
	431: {
		// Header fields quá lớn (tổng kích thước header vượt giới hạn)
		code: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
		description: 'Request Header Fields Too Large',
	},
	444: {
		// Nginx: đóng kết nối ngay, không trả response (chặn bot, tấn công) - unofficial
		code: 'NO_RESPONSE',
		description: 'No Response',
	},
	450: {
		// Microsoft: bị chặn bởi Windows Parental Controls - unofficial
		code: 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS',
		description: 'Blocked by Windows Parental Controls',
	},
	451: {
		// Không khả dụng vì lý do pháp lý (DMCA, lệnh tòa...)
		code: 'UNAVAILABLE_FOR_LEGAL_REASONS',
		description: 'Unavailable For Legal Reasons',
	},
	495: {
		// Nginx/Cloudflare: lỗi SSL certificate từ client - unofficial
		code: 'SSL_CERTIFICATE_ERROR',
		description: 'SSL Certificate Error',
	},
	496: {
		// Nginx/Cloudflare: client chưa cung cấp certificate khi yêu cầu - unofficial
		code: 'SSL_CERTIFICATE_REQUIRED',
		description: 'SSL Certificate Required',
	},
	497: {
		// Nginx: client gửi HTTP request vào port HTTPS - unofficial
		code: 'HTTP_REQUEST_SENT_TO_HTTPS_PORT',
		description: 'HTTP Request Sent to HTTPS Port',
	},
	498: {
		// Một số API (Laravel, custom): token hết hạn hoặc invalid - unofficial
		code: 'TOKEN_EXPIRED_INVALID',
		description: 'Token expired/invalid',
	},
	499: {
		// Nginx: client đóng kết nối trước khi server trả xong - unofficial
		code: 'CLIENT_CLOSED_REQUEST',
		description: 'Client Closed Request',
	},

	// Server Errors: Lỗi từ phía server ------------------------------
	500: {
		// Lỗi nội bộ server chung (catch-all)
		code: 'INTERNAL_SERVER_ERROR',
		description: 'Internal Server Error',
	},
	501: {
		// Server chưa implement chức năng/method yêu cầu
		code: 'NOT_IMPLEMENTED',
		description: 'Not Implemented',
	},
	502: {
		// Gateway/proxy nhận response invalid từ upstream
		code: 'BAD_GATEWAY',
		description: 'Bad Gateway',
	},
	503: {
		// Server tạm thời quá tải hoặc bảo trì
		code: 'SERVICE_UNAVAILABLE',
		description: 'Service Unavailable',
	},
	504: {
		// Gateway/proxy timeout chờ upstream
		code: 'GATEWAY_TIMEOUT',
		description: 'Gateway Timeout',
	},
	506: {
		// Lỗi cấu hình content negotiation (variant negotiate vòng lặp)
		code: 'VARIANT_ALSO_NEGOTIATES',
		description: 'Variant Also Negotiates',
	},
	507: {
		// Server hết dung lượng lưu trữ (WebDAV)
		code: 'INSUFFICIENT_STORAGE',
		description: 'Insufficient Storage',
	},
	508: {
		// Phát hiện vòng lặp vô hạn (WebDAV)
		code: 'LOOP_DETECTED',
		description: 'Loop Detected',
	},
	509: {
		// Vượt giới hạn băng thông (hosting/shared server throttle) - unofficial
		code: 'BANDWIDTH_LIMIT_EXCEEDED',
		description: 'Bandwidth Limit Exceeded',
	},
	510: {
		// Request thiếu extension cần thiết (Not Extended)
		code: 'NOT_EXTENDED',
		description: 'Not Extended',
	},
	511: {
		// Cần xác thực mạng (captive portal, public WiFi yêu cầu login)
		code: 'NETWORK_AUTHENTICATION_REQUIRED',
		description: 'Network Authentication Required',
	},
	521: {
		// Cloudflare: origin server từ chối kết nối - unofficial
		code: 'WEB_SERVER_IS_DOWN',
		description: 'Web Server Is Down',
	},
	522: {
		// Cloudflare: timeout kết nối TCP tới origin - unofficial
		code: 'CONNECTION_TIMED_OUT',
		description: 'Connection Timed Out',
	},
	523: {
		// Cloudflare: không reach được origin (DNS sai, firewall...) - unofficial
		code: 'ORIGIN_IS_UNREACHABLE',
		description: 'Origin Is Unreachable',
	},
	525: {
		// Cloudflare: SSL handshake giữa Cloudflare và origin thất bại - unofficial
		code: 'SSL_HANDSHAKE_FAILED',
		description: 'SSL Handshake Failed',
	},
	530: {
		// Cloudflare (cũ): site bị freeze/tạm dừng bởi user hoặc policy - unofficial
		code: 'SITE_FROZEN',
		description: 'Site Frozen',
	},
	599: {
		// Một số proxy/CDN: timeout kết nối mạng tổng quát - unofficial
		code: 'NETWORK_CONNECT_TIMEOUT_ERROR',
		description: 'Network Connect Timeout Error',
	},
};
