import { Box, Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Card from "components/card/Card";
// import  from "fullcalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { CreateJadwal } from "./components/CreateJadwal";

const Index = () => {
  const {
    isOpen: isOpenCreateModal,
    onOpen: onOpenCreateModal,
    onClose: onCloseCreateModal,
  } = useDisclosure();
  const [events, setEvents] = useState([
    {
      //   timeZone: "Asia/Jakarta",
      title: "The Title",
      date: "2023-03-01",
      description: "hahaheheheh",
    },
  ]);
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
            onClick={onOpenCreateModal}
          >
            Tambah Jadwal
          </Button>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={onOpenCreateModal}
          />
        </SimpleGrid>
        <CreateJadwal isOpen={isOpenCreateModal} onClose={onCloseCreateModal} />
      </Box>
    </>
  );
};
export default Index;
