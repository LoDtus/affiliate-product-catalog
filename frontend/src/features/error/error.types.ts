export type ErrorType =
    | "notFound"
    | "forbidden"
    | "rbac"
    | "serverError"
    | "generic"
    | "maintenance";

export type ErrorHandleMode = "navigation" | "mutation" | "silent";
