import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box } from "@chakra-ui/react";
import { EventContent } from "./EventContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores";
import { useAppSelector } from "stores/hooks";


const Jadwal40 = () => {
  const event = useAppSelector((state:RootState) => state.jadwal40.event)
  console.log("🚀 ~ file: Jadwal4.0.tsx:13 ~ Jadwal40 ~ event:", event)
  const { auth } = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()

  function handleAdd(add: any) {
    console.log(add.event.toPlainObject());
    
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        eventContent={EventContent}
        eventAdd={handleAdd}
        events={event}
      />
      ;
    </Box>
  ); 
};

export default Jadwal40;
