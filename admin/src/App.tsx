import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { router } from "./app/routes";
import store from "./app/store/store";

export default function App() {
    return (
        // <Provider store={store}>
            <Suspense
                fallback={
                    <div className="flex items-center justify-center h-screen">
                        Đang tải ứng dụng...
                    </div>
                }
            >
                <RouterProvider router={router} />
            </Suspense>
        // </Provider>
    );
}
