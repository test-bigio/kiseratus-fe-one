import { createSlice } from "@reduxjs/toolkit";

export const formulaSlice = createSlice({
  name: "formula",
  initialState: {
    showModal: false,
    calculation: "",
    result: 0
  },
  reducers: {
    write: (state, action) => {
      state.calculation += action.payload;
    },
    remove: (state) => {
      state.calculation = ''
    },
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
    setResult: (state, action) => {
      state.result = action.payload
    }
  },
});

export const { write, showModal, hideModal, remove, setResult } = formulaSlice.actions;

export default formulaSlice.reducer;
