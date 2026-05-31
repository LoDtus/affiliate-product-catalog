import { createContext } from "react";

type SocketContextType = {
    isConnected: boolean;
    connect: (authPayload?: { token?: string; userId?: string }) => void;
    disconnect: () => void;
};

export const SocketContext = createContext<SocketContextType | undefined>(undefined);