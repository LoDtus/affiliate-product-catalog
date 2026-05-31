import { configureStore } from "@reduxjs/toolkit";
// import propertySlice from "../../features/preferences/preferences.slice";
// import userSlice from "../../features/user/user.slice";
// import authSlice from "../../features/auth/auth.slice";

const store = configureStore({
    reducer: {
        // auth: authSlice.reducer,
        // user: userSlice.reducer,
        // properties: propertySlice.reducer,
    },
});

export default store;
