import {
    Button,
    FormControl,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react"

import TextDateConf from "./TextConf";
import { useAppDispatch, useAppSelector } from 'stores/hooks'
import {write} from "../redux/configurtionStore";

import * as React from "react";

export default function ConfigurationForm(props: { configurationData: any, isOpen: boolean, onClose: any }) {
    const dispatch = useAppDispatch()
    const { configurationData, isOpen, onClose, } = props;

    const [ data ] = React.useState(() => [ ...configurationData ]);

    const addRow = () => {
        const newData = {
            id: Date.now(),
            type: '',
            label: '',
            maxSize: 0,
            typeNumber: ''
        }

        dispatch(write(newData))
    }

    return (
        <>
            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Configuration Form</ModalHeader>
                    <ModalBody>
                        <Button fontSize='sm' fontWeight='500' borderRadius='7px' onClick={() => addRow()}>
                            (+) add new form type
                        </Button>
                        <FormControl id="email">
                            {data.map((row, index) => {
                                return (<TextDateConf key={index} data={row} />);
                            })}
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Batal
                        </Button>
                        <Button colorScheme="blue" mr={3} onClick={(e) => alert("click")}>
                            Simpan
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}