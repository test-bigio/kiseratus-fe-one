import { createSlice } from "@reduxjs/toolkit";

export const formulaSlice = createSlice({
  name:'formula',
  initialState: {
    showModal: false,
    formula: ''
  },
  reducers: {
    write: (state, action) => {
      state.formula += action.payload
    },
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    },
  }
})

export const { write, showModal, hideModal } = formulaSlice.actions

export default formulaSlice.reducer