"use client"
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import CountryInitializer from "@/shared/providers/CountryInitializer.provider";
import { makeStore } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function AppProvider({ children }: { children: ReactNode }) {
    const [store] = useState(() => makeStore());
    const [persistor] = useState(() => persistStore(store));

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CountryInitializer>
                    <div className="w-full h-full">
                        {children}
                    </div>
                </CountryInitializer>
            </PersistGate>
        </Provider>
    );
}
