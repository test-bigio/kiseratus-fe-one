import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { RootState } from "stores";
import { useAppDispatch, useAppSelector } from "stores/hooks";
import { closeModal } from "stores/jadwal40.ts/jadwal40Slice";

export const ModalCalendar = () => {
  const modal = useAppSelector((state:RootState) => state.jadwal40.showModal)
  const dispatch = useAppDispatch()
    const close = () => dispatch(closeModal())
    
  return (
    <>
      <Modal isOpen={modal} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
                Tess
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={close}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
