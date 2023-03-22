import { createSlice } from "@reduxjs/toolkit";

export const unikStore = createSlice({
    name: "unikForm",
    initialState: {
        unikDatas: []
    },
    reducers: {
        write: (state, action) => {
            state.unikDatas = [...state.unikDatas, action.payload];
        },
        remove: (state, action) => {
            state.unikDatas = state.unikDatas.filter(data => data.id !== action.payload.id)
        }
    },
});

export const { write, remove } = unikStore.actions;

export default unikStore.reducer;
