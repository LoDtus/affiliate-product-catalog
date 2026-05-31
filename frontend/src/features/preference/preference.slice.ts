import { createSlice } from "@reduxjs/toolkit";

const preferenceSlice = createSlice({
    name: 'preference',
    initialState: {
        headerDimensions: {},
        headerActionsWidth: 0,
        country: 'en',
    },
    reducers: {
        setHeaderDimensions: (state, action) => {

        },
        setHeaderActionsWidth: (state, action) => {
            state.headerActionsWidth = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    }
});

export const preferenceActions = preferenceSlice.actions;
export default preferenceSlice.reducer;