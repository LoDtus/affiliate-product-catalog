import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import Cookies from "js-cookie";
import cartSlice from '@/features/cart/cart.slice';
import preferenceSlice from '@/features/preference/preference.slice';
import compareSlice from '@/features/compare/compare.slice';
import categorySlice from '@/features/category/category.slice';

const appReducer = combineReducers({
    cart: cartSlice,
    compare: compareSlice,
    preference: preferenceSlice,
    category: categorySlice,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

const createStorage = () => {
    return {
        getItem: async (key: string) => {
            if (typeof window === 'undefined') return null;
            const rememberMe = Cookies.get('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            return storage.getItem(key);
        },
        setItem: async (key: string, value: string) => {
            if (typeof window === 'undefined') return;
            const rememberMe = Cookies.get('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.setItem(key, value);
        },
        removeItem: async (key: string) => {
            if (typeof window === 'undefined') return;
            const rememberMe = Cookies.get('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.removeItem(key);
        },
    };
};

const persistConfig = {
    key: 'apc',
    storage: createStorage(),
    whitelist: [
        'search',
        'cart',
        'preference',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
};

// Định nghĩa các Type chuẩn hóa dựa trên thực thể tạo ra từ makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];