import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

export const jadwal40Slice = createSlice({
  name: "jadwal40",
  initialState: {
    showModal: false,
    event: [
      {eventId: 1, userid: 'kikoadmn', title: 'event kikoadmn', date: '2023-03-23'},
      {eventId: 2, userid: 'adlan', title: 'event adlan', date: '2023-03-24'},
      {eventId: 3, userid: 'randy', title: 'event randy', date: '2023-03-26'},
      {eventId: 4, userid: 'dimas', title: 'event dimas', date: '2023-03-26'},
    ],
  },
  reducers: {
    addEvent: (state, action) => {
      state.event.push({...action.payload, eventId: uniqueId});
    },
    deleteEvent: (state, action) => {
      state.event = state.event.filter(el => el.eventId !== action.payload.eventId);
    },
    showModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { addEvent, deleteEvent, closeModal, showModal } = jadwal40Slice.actions;

export default jadwal40Slice.reducer;
