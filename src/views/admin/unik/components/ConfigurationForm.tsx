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
import {write, push} from "../redux/configurtionStore";

import * as React from "react";

import {RootState} from "../../../../stores";

export default function ConfigurationForm(props: { isOpen: boolean, onClose: any }) {
    const dispatch = useAppDispatch()
    const { isOpen, onClose, } = props;

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

    const confDatas = useAppSelector((state:RootState) => state.confFormStore.confFormDatas)

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
                            {confDatas.map((row, index) => {
                                return (<TextDateConf key={index} data={row} />);
                            })}
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Batal
                        </Button>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Simpan
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}