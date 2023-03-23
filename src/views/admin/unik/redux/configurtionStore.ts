import { createSlice } from "@reduxjs/toolkit";

const defaultDatas = [
    {
        id: 1,
        type: 'text',
        label: 'Nama',
        maxSize: 10,
        typeNumber: '',
        value: ''
    },
    {
        id: 2,
        type: 'date',
        label: 'Tanggal Lahir',
        maxSize: 0,
        typeNumber: '',
        value: ''
    },
    {
        id: 3,
        type: 'number',
        label: 'Jumlah Hp',
        maxSize: 0,
        typeNumber: 'integer',
        value: ''
    }
];

export const confStore = createSlice({
    name: "confStore",
    initialState: {
        confFormDatas: defaultDatas
    },
    reducers: {
        write: (state, action) => {
            state.confFormDatas = [...state.confFormDatas, action.payload];
        },
        push: (state, action) => {
            state.confFormDatas = action.payload;
        },
        remove: (state, action) => {
            state.confFormDatas = state.confFormDatas.filter(data => data.id !== action.payload.id)
        }
    },
});

export const { write, remove, push } = confStore.actions;

export default confStore.reducer;
