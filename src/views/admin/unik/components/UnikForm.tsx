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
import { useAppDispatch, useAppSelector } from 'stores/hooks'
import {RootState} from "../../../../stores";
import {useEffect, useState} from "react";
import {write} from "../redux/unikStore";
import {list} from "@chakra-ui/system";

export default function UnikForm(
    props: { isSubmit: boolean, isOpen: boolean, onClose: any, title: string, id: any }) {
    const { isSubmit, isOpen, onClose, title, id } = props;
    const dispatch = useAppDispatch()

    const [confDatas, setConfDatas] = useState(useAppSelector((state:RootState) => state.confFormStore.confFormDatas))

    const lists = useAppSelector((state:RootState) => state.unikForm.unikDatas)

    useEffect(() => {
        if (id != null && typeof(id) != "undefined" && id !== '') {
            const list = lists.find(row => { return row.id === id})
            setConfDatas(list.data)
        }
    }, [id]);

    const addRow = (data : any) => {
        const newData = {
            id: Date.now(),
            data:  lists
        }

        dispatch(write(newData))
    }
    return (
        <>
            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{ title }</ModalHeader>
                    <ModalBody>
                        <FormControl id="email">
                            {confDatas.map((row, index) => {
                                return (<InputTextUnik key={index} id={id} data={row} />);
                            })}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Batal
                        </Button>
                        {isSubmit ?  <Button colorScheme="blue" mr={3} onClick={(e) => addRow(confDatas)}>
                            Simpan
                        </Button> : null}

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}