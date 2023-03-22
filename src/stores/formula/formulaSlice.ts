import { createSlice } from "@reduxjs/toolkit";

export const formulaSlice = createSlice({
  name: "formula",
  initialState: {
    showModal: false,
    calculation: "",
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
  },
});

export const { write, showModal, hideModal, remove } = formulaSlice.actions;

export default formulaSlice.reducer;
