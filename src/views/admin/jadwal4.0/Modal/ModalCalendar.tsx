import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import { RootState } from "stores";
import { useAppDispatch, useAppSelector } from "stores/hooks";
import { addEvent, closeModal, deleteEvent } from "stores/jadwal40.ts/jadwal40Slice";

export const ModalCalendar = () => {
  const modal = useAppSelector((state: RootState) => state.jadwal40.showModal);
  const selectedDate = useAppSelector(
    (state: RootState) => state.jadwal40.selectedDate
  );
  const selectedEvent:any = useAppSelector(
    (state: RootState) => state.jadwal40.selecetedEvent
  );
  console.log("🚀 ~ file: ModalCalendar.tsx:28 ~ ModalCalendar ~ selectedEvent:", selectedEvent)
  const { auth } = useAppSelector((state) => state.auth)
 

  const dispatch = useAppDispatch();
  const close = () => dispatch(closeModal());

  return (
    <>
      <Modal isOpen={modal} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ title: "" }}
              validate={(values) => {
                const errors: any = {};
                if (!values.title) {
                  errors.title = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const body = {title: values.title, date: selectedDate, userId: auth.id}
                dispatch(addEvent(body))
                close()
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    type="title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={selectedEvent.title ?? values.title}
                  />
                  {errors.title && touched.title && errors.title}
                  <Flex w="full" justifyContent="space-between" sx={{mt: 3}}>
                    <Button colorScheme="red" mr={3} onClick={() => dispatch(deleteEvent(selectedEvent.eventId))}>
                      Delete
                    </Button>
                    <Button colorScheme="blue" type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Flex>
                </form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
