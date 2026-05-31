import axios, { AxiosInstance, AxiosResponse } from "axios";

// Định nghĩa đúng interface ApiResponseDto giống hệt phía NestJS
export interface ApiResponse<T> {
    success: boolean;
    status: number;
    data: T;
    message?: string;
}

const apiInstance: AxiosInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000", // URL của NestJS
    baseURL: "http://localhost:9270/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor xử lý dữ liệu trả về
apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Trả thẳng object ApiResponseDto (chứa { success, status, data }) về cho service
        return response.data;
    },
    (error) => {
        // Xử lý các lỗi global như 401, 403, 500 tại đây nếu cần
        const errorMessage =
            error.response?.data?.message || "Đã có lỗi xảy ra từ hệ thống";
        return Promise.reject(new Error(errorMessage));
    },
);

export default apiInstance;
