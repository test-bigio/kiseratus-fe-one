import { showModal } from 'stores/formula/formulaSlice'
import { useAppDispatch, useAppSelector } from 'stores/hooks'
import { RootState } from 'stores/'

// custom components
import Card from 'components/card/Card'

// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  useColorModeValue,
  Input
} from "@chakra-ui/react"


const CreateFormula = () => {
  const result = useAppSelector((state:RootState) => state.formula.result)
  const dispatch = useAppDispatch()
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
            value={result}
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