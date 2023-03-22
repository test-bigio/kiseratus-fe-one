import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "components/card/Card";
// import  from "fullcalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Index = () => {
  return (
    <>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={1}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </SimpleGrid>
      </Box>
    </>
  );
};
export default Index;
