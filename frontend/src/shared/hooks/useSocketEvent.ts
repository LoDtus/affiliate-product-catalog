// // src/socket/hooks/useSocketEvent.ts
// import { useEffect } from "react";
// import { socket } from "../services/socket.service";

// export function useSocketEvent<T = any>(
//     event: string,
//     callback: (data: T) => void,
//     dependencies: any[] = [],
// ) {
//     useEffect(() => {
//         socket.on(event, callback);

//         return () => {
//             socket.off(event, callback);
//         };
//     }, [event, callback, ...dependencies]);
// }
