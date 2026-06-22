"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { makeStore } from "@/store/store";

export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // Truyền một hàm callback vào useState.
    // React sẽ chỉ gọi hàm makeStore() này 1 lần duy nhất lúc khởi tạo.
    const [store] = useState(() => makeStore());
    const [persistor] = useState(() => persistStore(store)); // Khởi tạo persistor từ instance store cố định

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
