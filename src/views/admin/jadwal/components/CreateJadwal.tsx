import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";

interface props {
  isOpen: boolean;
  onClose: any;
  events: Array<any>;
  setRefresh: any;
  eventInfo?: any;
}

export const CreateJadwal = (props: props) => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    if (props.isOpen) {
      setJudul("");
      setDeskripsi("");
      setTanggal(moment().format("YYYY-MM-DD"));
      if (props.eventInfo) {
        // console.log(props.eventInfo.startStr);
        setJudul(props.eventInfo.title);
        setDeskripsi(props.eventInfo.extendedProps.description);
        setTanggal(props.eventInfo.startStr);
      }
    }
  }, [props.isOpen]);

  const handleDelete = () => {
    // e.preventDefault();
    // console.log("ini delete");
    let eventIndex = props.events.findIndex(
      (obj) => obj.id == props.eventInfo.id
    );
    props.events.splice(eventIndex, 1);
    localStorage.setItem("jadwal40", JSON.stringify(props.events));
    props.onClose();
    props.setRefresh(Date.now());
  };
  const handleSubmit = () => {
    let body = { title: judul, description: deskripsi, date: tanggal };
    if (props.eventInfo) {
      console.log(props.eventInfo.id);
      let eventIndex = props.events.findIndex(
        (obj) => obj.id == props.eventInfo.id
      );
      let eventObj = props.events[eventIndex];
      props.events[eventIndex] = { ...eventObj, ...body };
      //   console.log(eventObj);
    } else {
      props.events.push({
        id: Date.now(),
        ...body,
      });
    }
    localStorage.setItem("jadwal40", JSON.stringify(props.events));
    props.onClose();
    props.setRefresh(Date.now());
  };
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tambah Jadwal</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Judul</FormLabel>
              <Input
                type="text"
                isRequired={true}
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                // isReadOnly={true}
              />
              <FormLabel>Deskripsi</FormLabel>
              {/* <Input type="text" isRequired={true} /> */}
              <Textarea
                isRequired={true}
                defaultValue={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              >
                {/* {deskripsi} */}
              </Textarea>
              <FormLabel>Tanggal</FormLabel>
              <Input
                type="date"
                isRequired={true}
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Flex gap={"8px"}>
              <Button variant="ghost" onClick={props.onClose}>
                Batal
              </Button>
              {props.eventInfo && (
                <Button colorScheme={"red"} onClick={handleDelete}>
                  Hapus
                </Button>
              )}
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Simpan
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
