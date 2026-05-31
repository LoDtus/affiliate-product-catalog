import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        list: [],
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        addToList: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const compareActions = compareSlice.actions;
export default compareSlice.reducer;