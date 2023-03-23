import {Flex, FormLabel, Input, Select} from "@chakra-ui/react";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../stores/hooks";
import {RootState} from "../../../../stores";
import {push} from "../redux/unikStore";


export default function InputTextUnik(props: { data: any, id: any }) {
    const { data, id } = props;

    const [value, setValue] = useState("");
    const dispatch = useAppDispatch()
    const unikDatas = useAppSelector((state:RootState) => state.unikForm.unikDatas)

    useEffect(() => {
        setValue(data.value)
    }, []);

    useEffect(() => {

        const copyUnikDatas = unikDatas;

        const newDataUnik = copyUnikDatas.map((row) => {
            if (id === row.id) {
                const copyData = row.data;

                const newData = copyData.map((rowData) => {

                    if (rowData.id === data.id) {

                        return {...rowData, value }
                    }

                    return rowData;
                })

                return {...row, data: newData}
            }

            return row;
        });

        dispatch(push(newDataUnik))
    }, [value]);

    return (
        <Flex px='10px' pt='5px'>
            <FormLabel htmlFor="name">{ data.label }</FormLabel>
            <Input
                type={data.type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                borderRadius="16px"
            />
        </Flex>
    );
}