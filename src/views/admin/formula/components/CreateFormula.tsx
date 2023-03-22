import { useEffect, useState } from 'react'
import { showModal } from '../../../../stores/formula/formulaSlice'
import { useAppDispatch, useAppSelector } from 'stores/hooks'
import { RootState } from '../../../../stores/'

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
  const calculation = useAppSelector((state:RootState) => state.formula.calculation)
  const dispatch = useAppDispatch()
  const textColor = useColorModeValue("navy.700", "white");

  const [result, setResult] = useState<number>(0)

  const doCalculation = (calculation: string) => {
      let arr = calculation.split('')
      let num = ''
  
      for(let i = 0; i < calculation.length; i++) {
        let char = calculation.charAt(i)
        switch (char) {
          case '+':
          case 'x':
          case '-':
          case '/':
            arr.push(num)
            arr.push(char)
            num = ''
            break
          default:
            num += char
            break
        }
      }
      arr.push(num)
  
      let hasil = parseInt(arr[0])
      for(let i = 1; i < arr.length; i += 2) {
        switch (arr[i]) {
          case '+':
            hasil += parseInt(arr[i+1])
            break
          case 'x':
            hasil *= parseInt(arr[i+1])
            break
          case '-':
            hasil -= parseInt(arr[i+1])
            break
          case '/':
            hasil /= parseInt(arr[i+1])
            break
        }
      }
      if(!hasil){
        return 0
      }
      return hasil
    }

  useEffect(() => {
    setResult(doCalculation(calculation))
  }, [calculation])
  

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