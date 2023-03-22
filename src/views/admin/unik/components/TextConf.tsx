import {Flex, FormLabel, Input, Select} from "@chakra-ui/react";


export default function TextConf(props: { data: any }) {

    const { data } = props;

    return (
        <Flex>
            <Select placeholder="Select Type" name={data.type}>
                <option value={'text'} >Text</option>
                <option value={'date'} >Date</option>
                <option value={'number'}>Number</option>
            </Select>

            <Input name={data.label}  type="text" placeholder={'label'}/>

            {data.type === 'text' ? <Input type="number" placeholder={'max character'}/> : null }

            {data.type === 'number' ? <Select placeholder="Type Number">
                <option value={'integer'} >Integer</option>
                <option value={'float'} >Float</option>
            </Select> : null }

        </Flex>
    );
}