import {
    Button,
    FormControl,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import InputTextUnik from "./InputTextUnik";
import * as React from "react";

export default function UnikForm(
    props: { configurationData: any, isSubmit: boolean, isOpen: boolean, onClose: any, title: string }) {
    const { configurationData, isSubmit, isOpen, onClose, title } = props;

    const [ data ] = React.useState(() => [ ...configurationData ]);

    return (
        <>
            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{ title }</ModalHeader>
                    <ModalBody>
                        <FormControl id="email">
                            {data.map((row, index) => {
                                return (<InputTextUnik key={index} data={row} />);
                            })}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Batal
                        </Button>
                        {isSubmit ?  <Button colorScheme="blue" mr={3} onClick={(e) => alert("click")}>
                            Simpan
                        </Button> : null}

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}