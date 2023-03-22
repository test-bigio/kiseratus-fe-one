import { createSlice } from "@reduxjs/toolkit";

const defaultDatas = [
    {
        id: 1,
        data: [
            {
                type: 'text',
                label: 'Apa itu Hewan',
                maxSize: 10,
                typeNumber: '',
                value: ''
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
        remove: (state, action) => {
            state.unikDatas = state.unikDatas.filter(data => data.id !== action.payload.id)
        }
    },
});

export const { write, remove } = unikStore.actions;

export default unikStore.reducer;
