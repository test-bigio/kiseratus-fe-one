import {Button, Flex, FormControl, FormLabel, Input, Select} from "@chakra-ui/react";
import TextDateConf from "./TextConf";
import * as React from "react";


export default function InputTextUnik(props: { data: any }) {
    const { data } = props;

    return (
        <Flex>
            <FormLabel htmlFor="name">{ data.label }</FormLabel>
            <Input
                type={data.type}
                borderRadius="16px"
            />
        </Flex>
    );
}