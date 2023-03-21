import { useDispatch } from 'react-redux'
import { showModal } from '../../../../stores/formula/formulaSlice'

// custom components
import Card from 'components/card/Card';

// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  useColorModeValue,
  Input
} from "@chakra-ui/react";


const CreateFormula = () => {
  const dispatch = useDispatch()

  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Card p='20px'>
      <FormControl>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          Formula
        </FormLabel>
        <Flex gap='20px'>
          <Input
            isRequired={true}
            variant='auth'
            fontSize='sm'
            ms={{ base: "0px", md: "0px" }}
            type='email'
            placeholder='formula'
            mb='24px'
            fontWeight='500'
            size='lg'
            disabled
          />
          <Button
            fontSize='sm'
            variant='brand'
            fontWeight='500'
            onClick={() => dispatch(showModal())}
          >
            Buat Formula
          </Button>
        </Flex>
      </FormControl>
    </Card>
  )
}

export default CreateFormula