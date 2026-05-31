// // src/socket/socket.ts
// import { io, Socket } from "socket.io-client";

// const SOCKET_URL =
//     import.meta.env.VITE_SOCKET_URL ||
//     (import.meta.env.DEV ? "http://localhost:3000" : "https://api.yourapp.com");

// export const socket: Socket = io(SOCKET_URL, {
//     autoConnect: false, // ★★★ Quan trọng: không connect tự động
//     reconnection: true,
//     reconnectionAttempts: Infinity, // hoặc 5–10 tùy nhu cầu
//     reconnectionDelay: 1500,
//     reconnectionDelayMax: 10000,
//     timeout: 20000,
//     transports: ["websocket", "polling"],
//     withCredentials: true, // nếu backend dùng cookie/session
// });

// export function connectSocket(
//     authPayload: { token?: string; userId?: string } = {},
// ) {
//     if (authPayload.token) {
//         socket.auth = { token: authPayload.token }; // backend NestJS có thể verify
//     }
//     if (!socket.connected) {
//         socket.connect();
//     }
// }

// export function disconnectSocket() {
//     if (socket.connected) {
//         socket.disconnect(); // ngắt reconnect tự động cho đến khi connect lại
//     }
// }

// // Debug chỉ ở dev
// if (import.meta.env.DEV) {
//     socket.onAny((event, ...args) => {
//         console.log(`[Socket] Event: ${event}`, args);
//     });
// }
