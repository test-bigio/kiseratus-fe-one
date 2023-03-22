import { createSlice } from "@reduxjs/toolkit";

export const confStore = createSlice({
    name: "confStore",
    initialState: {
        confFormDatas: []
    },
    reducers: {
        write: (state, action) => {
            state.confFormDatas = [...state.confFormDatas, action.payload];
        },
        remove: (state, action) => {
            state.confFormDatas = state.confFormDatas.filter(data => data.id !== action.payload.id)
        }
    },
});

export const { write, remove } = confStore.actions;

export default confStore.reducer;
