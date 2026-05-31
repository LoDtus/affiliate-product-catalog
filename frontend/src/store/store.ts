import { configureStore } from '@reduxjs/toolkit';
import { AnyAction, combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
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

const createStorage = () => {
    return {
        getItem: async(key: string) => {
            if (typeof window === 'undefined') {
                return null; // Trả về null trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            return storage.getItem(key);
        },
        setItem: async(key: string, value: string) => {
            if (typeof window === 'undefined') {
                return; // Không lưu trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.setItem(key, value);
        },
        removeItem: async(key: string) => {
            if (typeof window === 'undefined') {
                return; // Không xóa trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.removeItem(key);
        },
    };
};

export type RootState = ReturnType<typeof appReducer>;
// export type RootState = ReturnType<typeof store.getState>;
const rootReducer = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'app',
    storage: createStorage(),
    whitelist: [
        'profile',
        'properties',
        'setting',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // tránh cảnh báo khi dùng redux-persist
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const resetReduxStore = async() => {
    // Dispatch action RESET để xóa state trong memory
    store.dispatch({ type: 'RESET' });
    
    // Xóa persisted data từ storage
    await persistor.purge();
    
    // (Nếu cần) Đồng bộ lại persistor
    await persistor.flush();
};

const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export { store, persistor, resetReduxStore };