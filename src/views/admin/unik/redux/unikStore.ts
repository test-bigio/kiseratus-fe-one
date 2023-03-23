import { createSlice } from "@reduxjs/toolkit";

const defaultDatas = [
    {
        id: 1,
        data: [
            {
                id: 1,
                type: 'text',
                label: 'Nama',
                maxSize: 10,
                typeNumber: '',
                value: 'TEst'
            },
            {
                id: 2,
                type: 'date',
                label: 'Tanggal Lahir',
                maxSize: 0,
                typeNumber: '',
                value: 'Test'
            },
            {
                id: 3,
                type: 'number',
                label: 'Jumlah Hp',
                maxSize: 0,
                typeNumber: 'integer',
                value: 'Test'
            }
        ]
    }
]

export const unikStore = createSlice({
    name: "unikForm",
    initialState: {
        unikDatas: defaultDatas
    },
    reducers: {
        write: (state, action) => {
            state.unikDatas = [...state.unikDatas, action.payload];
        },
        push: (state, action) => {
            state.unikDatas = action.payload;
        },
        remove: (state, action) => {
            state.unikDatas = state.unikDatas.filter(data => data.id !== action.payload.id)
        }
    },
});

export const { write, remove, push } = unikStore.actions;

export default unikStore.reducer;
