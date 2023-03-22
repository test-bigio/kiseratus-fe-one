import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, useDisclosure } from "@chakra-ui/react";
import { EventContent } from "./EventContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores";
import { useAppSelector } from "stores/hooks";
import {DateSelectArg, EventClickArg} from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import { ModalCalendar } from "./Modal/ModalCalendar";
import { selecetedEvent, selectedDate, showModal } from "stores/jadwal40.ts/jadwal40Slice";


const Jadwal40 = () => {
  const event = useAppSelector((state:RootState) => state.jadwal40.event)
  console.log("🚀 ~ file: Jadwal4.0.tsx:17 ~ Jadwal40 ~ event:", event)
  const { auth } = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()


  function handleSelect(e: DateSelectArg) {
    dispatch(showModal())
    dispatch(selectedDate(e.startStr))
  }

  function handleClick(e: EventClickArg) {
    dispatch(selecetedEvent(e.event._def.extendedProps))
    dispatch(showModal())
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        eventContent={EventContent} 
        events={event}
        eventClick={handleClick}
        select={handleSelect}
      />
      <ModalCalendar/>
    </Box>
  ); 
};

export default Jadwal40;
