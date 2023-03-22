import {Flex, FormLabel, Input, Select} from "@chakra-ui/react";
import Card from 'components/card/Card';
import * as React from "react";
import { useEffect, useState } from "react";
import moment from "moment/moment";

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
    });

    return (
        <Card justifyContent='center' alignItems='left' flexDirection='column' w='100%' mb='0px'>
            <Flex>
                <Select placeholder="Select Type" onChange={(e) => setType(e.target.value)}>
                    <option value={'text'} >Text</option>
                    <option value={'date'} >Date</option>
                    <option value={'number'}>Number</option>
                </Select>
            </Flex>

            <Input type="text" value={label} placeholder={'label'} onChange={(e) => setLabel(e.target.value)}/>

            {type === 'text' ? <Input type="number" value={maxSize} onChange={(e) => setMaxSize(e.target.value)} placeholder={'max character'} /> : null }

            {type === 'number' ? <Select placeholder="Type Number" onChange={(e) => setTypeNumber(e.target.value)}>
                <option selected={typeNumber === 'integer'} value={'integer'} >Integer</option>
                <option selected={typeNumber === 'float'} value={'float'} >Float</option>
            </Select> : null }

        </Card>
    );
}