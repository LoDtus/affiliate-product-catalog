import ENV from "@/shared/constants/env.constants";
import { notify } from "@/shared/utils/notification.utils";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export interface ApiErrorDto {
    code?: string;
    message?: string;
    details?: any;
}

export interface ApiMetadataDto {
    pagination?: any;
    sort?: string;
    search?: string;
    filter?: Record<string, any>;
}

export interface ApiResponseWrapper<T = unknown> {
    timestamp: string;
    success: boolean;
    status: number;
    message?: string;
    error?: ApiErrorDto;
    data?: T;
    metadata?: ApiMetadataDto;
    traceId?: string;
}

const instance: AxiosInstance = axios.create({
    baseURL: ENV.BACKEND_URL || "",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError<ApiResponseWrapper>) => {
        if (axios.isAxiosError(error)) {
            if (error.code === "ECONNABORTED" || !error.response) {
                notify(
                    "error",
                    "Network error: Unable to connect to the server. Please check your internet connection.",
                );
                return Promise.reject(error);
            }

            const status = error.response.status;
            const serverResponse = error.response.data;

            const errorMessage =
                serverResponse?.error?.message ||
                serverResponse?.message ||
                `System error (Status code: ${status})`;

            if (serverResponse?.traceId) {
                console.error(
                    `[API Error] TraceID: ${serverResponse.traceId}`,
                    serverResponse.error,
                );
            }

            switch (status) {
                case 400:
                    notify("warning", errorMessage);
                    break;
                case 404:
                    notify(
                        "error",
                        "Error 404: The requested resource could not be found.",
                    );
                    break;
                case 500:
                    notify("error", `Internal Server Error: ${errorMessage}`);
                    break;
                default:
                    notify("error", errorMessage);
            }
        } else {
            notify("error", "An unknown error occurred.");
        }

        return Promise.reject(error);
    },
);

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

interface RequestOptions {
    method?: HttpMethod;
    body?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
}

/**
 * Hàm gọi API Wrapper tối ưu, tự động bóc tách trường `data` và giữ Type-safe.
 */
export const apiRequest = async <T = any>(
    url: string,
    options: RequestOptions = {},
): Promise<T> => {
    const { method = "get", body, params, headers } = options;

    // Ép kiểu cụ thể sang AxiosRequestConfig và loại bỏ các thuộc tính undefined để pass exactOptionalPropertyTypes
    const config: AxiosRequestConfig = {
        method,
        url,
        ...(params ? { params } : {}),
        ...(headers ? { headers } : {}),
        ...(body ? { data: body } : {}),
    };

    const response = await instance.request<ApiResponseWrapper<T>>(config);

    // Ép kiểu tường minh để chắc chắn lấy ra trường data bên trong ApiResponseWrapper
    return (response.data as ApiResponseWrapper<T>).data as T;
};

/**
 * Lấy toàn bộ ApiResponseWrapper bao gồm cả metadata để xử lý phân trang
 */
export const apiRequestWithMeta = async <T = any>(
    url: string,
    options: RequestOptions = {},
): Promise<ApiResponseWrapper<T>> => {
    const { method = "get", body, params, headers } = options;

    const config: AxiosRequestConfig = {
        method,
        url,
        ...(params ? { params } : {}),
        ...(headers ? { headers } : {}),
        ...(body ? { data: body } : {}),
    };

    const response = await instance.request<ApiResponseWrapper<T>>(config);

    // Trả về toàn bộ cấu trúc bọc ngoài (ApiResponseWrapper) chứa data và metadata
    return response.data;
};

export default instance;
