// // src/utils/authLoaders.ts
// import { redirect } from "react-router-dom";
// import store from "../../app/store/store";

// export const requireAuthLoader = () => {
//     const state = store.getState();
//     const { isAuthenticated } = state.auth; // tên slice là 'auth'

//     if (!isAuthenticated) {
//         // Lưu redirect URL để sau login quay lại
//         const redirectTo = encodeURIComponent(
//             window.location.pathname + window.location.search,
//         );
//         return redirect(`/auth/sign-in?redirect=${redirectTo}`);
//     }

//     return null;
// };

// export const alreadyAuthLoader = () => {
//     const state = store.getState();
//     const { isAuthenticated } = state.auth;

//     if (isAuthenticated) {
//         // Nếu đã login thì redirect về dashboard hoặc trang trước
//         const url = new URL(window.location.href);
//         const redirectTo = url.searchParams.get("redirect") || "/dashboard";
//         return redirect(redirectTo);
//     }

//     return null;
// };

// export const requireRoleLoader = (allowedRoles: string[]) => {
//     return () => {
//         const state = store.getState();
//         const { user } = state.auth;

//         if (!user || !user.roles?.some((role) => allowedRoles.includes(role))) {
//             return redirect("/forbidden");
//         }

//         return null;
//     };
// };
