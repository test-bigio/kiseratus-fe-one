import { Box, Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Card from "components/card/Card";
// import  from "fullcalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { CreateJadwal } from "./components/CreateJadwal";

const Index = () => {
  const {
    isOpen: isOpenCreateModal,
    onOpen: onOpenCreateModal,
    onClose: onCloseCreateModal,
  } = useDisclosure();
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("jadwal40") || "[]")
  );
  const [refresh, setRefresh] = useState(Date.now());

  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem("jadwal40") || "[]"));
  }, [refresh]);

  return (
    <>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={1}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            width={"36"}
            onClick={(e) => {
              setEventInfo(null);
              onOpenCreateModal();
            }}
          >
            Tambah Jadwal
          </Button>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={(info) => {
              setEventInfo(info.event);
              onOpenCreateModal();
            }}
          />
        </SimpleGrid>
        <CreateJadwal
          isOpen={isOpenCreateModal}
          onClose={onCloseCreateModal}
          events={events}
          setRefresh={setRefresh}
          eventInfo={eventInfo}
        />
      </Box>
    </>
  );
};
export default Index;
