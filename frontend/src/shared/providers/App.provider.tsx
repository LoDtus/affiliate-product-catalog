"use client"
import { ReactNode } from "react";
import { Provider } from "react-redux";
import CountryInitializer from "@/shared/providers/CountryInitializer.provider";
import { store } from "@/store/store";

export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <CountryInitializer>
                {children}
            </CountryInitializer>
        </Provider>
        //     <PersistGate loading={<LoadingRedux/>} persistor={persistor}>
        //         <ReduxProvider> {/* Provider có sử dụng redux */}
        //             <WebSocketProvider>
        //                 <AntdRegistry>
        //                     <GlobalNotification> {/* Provider cung cấp hàm gọi tới thông báo toàn cục, sử dụng thành phần do antd cung cấp */}
        //                         <div className='w-full h-full'>
        //                             { children }
        //                         </div>
        //                     </GlobalNotification>
        //                 </AntdRegistry>
        //             </WebSocketProvider>
        //         </ReduxProvider>
        //     </PersistGate>
    );
}
