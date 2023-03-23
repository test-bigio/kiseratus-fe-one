import {Button, Flex, FormLabel, Input, Select} from "@chakra-ui/react";
import Card from 'components/card/Card';
import * as React from "react";
import { useEffect, useState } from "react";
import {remove, push} from "../redux/configurtionStore";

import { useAppDispatch, useAppSelector } from 'stores/hooks'
import {RootState} from "../../../../stores";

export default function TextConf(props: { data: any }) {
    const { data } = props;

    const [type, setType] = useState("");
    const [label, setLabel] = useState("");
    const [maxSize, setMaxSize] = useState(null);
    const [typeNumber, setTypeNumber] = useState("");

    useEffect(() => {
        setType(data.type);
        setLabel(data.label);
        setMaxSize(data.maxSize);
        setTypeNumber(data.typeNumber);
    }, []);

    const dispatch = useAppDispatch()

    const confDatas = useAppSelector((state:RootState) => state.confFormStore.confFormDatas)

    useEffect(() => {
       const copyData = confDatas;

       const newData = copyData.map((row) => {
           if (data.id === row.id) {
               return { label,type, maxSize, typeNumber}
           }

           return row;
       });

       dispatch(push(newData))

    }, [type, label, maxSize, typeNumber]);


    return (
        <Card justifyContent='center' alignItems='left' flexDirection='column' w='100%' mb='0px'>
            <Button fontSize='sm' fontWeight='500' borderRadius='7px' onClick={() => dispatch(remove(data))}>
                (-) remove
            </Button>

            <Flex>
                <Select placeholder="Select Type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value={'text'} >Text</option>
                    <option value={'date'} >Date</option>
                    <option value={'number'}>Number</option>
                </Select>
            </Flex>

            <Input type="text" value={label} placeholder={'label'} onChange={(e) => setLabel(e.target.value)}/>

            {type === 'text' ? <Input type="number" value={maxSize} onChange={(e) => setMaxSize(e.target.value)} placeholder={'max character'} /> : null }

            {type === 'number' ? <Select placeholder="Type Number" value={typeNumber} onChange={(e) => setTypeNumber(e.target.value)}>
                <option selected={typeNumber === 'integer'} value={'integer'} >Integer</option>
                <option selected={typeNumber === 'float'} value={'float'} >Float</option>
            </Select> : null }

        </Card>
    );
}