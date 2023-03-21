import React, { FC, useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
  Center
} from '@chakra-ui/react'

interface IModalCalculator {
  isOpen: boolean
  onClose: () => void
}

const ModalCalculator:FC<IModalCalculator> = (props) => {
  const { isOpen, onClose} = props

  const textColor = useColorModeValue("white", "black")
  const resultBarBg = useColorModeValue("gray.700", "white")
  const CalcBarBg = useColorModeValue("gray.500", "white")
  const CalcButtonBg = useColorModeValue("green.400", "white")
  const buttonNumberBg = useColorModeValue("gray.400", "white")
  const buttonClearBg = useColorModeValue("blue.400", "white")
  const buttonEqualBg = useColorModeValue("red.400", "white")

  const [calculation, setCalculation] = useState<string>('')

  const renderNumber = (n:number) => {
    if(n%4 !== 0){
      if(n > 8){
        return n - 2
      }
      else if(n > 4){
        return n - 1
      } else {
        return n
      }
    } else {
      if(n === 4) return('+')
      if(n === 8) return('-')
      if(n === 12) return('x')
    }
  }

  const handleClick = (input:string | number) => {
    const formula = ['+', '-', '/', 'x']
    setCalculation((prev) => {
      const lastChar = prev.split('').at(-1)
      if(formula.includes(lastChar) && formula.includes(input.toString())){
        return prev
      } 
      return prev+=input
    })
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Formula</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={textColor}>
            <Grid templateRows='repeat(4, 1fr)'>
              <GridItem rowSpan={1} colSpan={4} bg={resultBarBg} p={4} border='1px' borderColor='gray.100'>
                <Center></Center>
              </GridItem>
              <GridItem rowSpan={1} colSpan={4} bg={CalcBarBg} p={4} border='1px' borderColor='gray.100'>
                <Center>{calculation}</Center>
              </GridItem>
              {Array(12).fill(null).map((_,idx) => (
                  <GridItem rowSpan={1} colSpan={1} bg={(idx+1 )% 4 !== 0 ? buttonNumberBg : CalcButtonBg} p={4} key={idx} border='1px' borderColor='gray.100' cursor={'pointer'} onClick={() => handleClick(renderNumber(idx+1))}>
                    <Center>
                      {renderNumber(idx+1)}
                    </Center>
                  </GridItem> 
                )
              )}
              <GridItem rowSpan={1} colSpan={2} bg={buttonNumberBg} p={4} border='1px' borderColor='gray.100' cursor={'pointer'}>
                <Center>0</Center> 
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg={buttonNumberBg} p={4} border='1px' borderColor='gray.100' cursor={'pointer'}>
                <Center>.</Center> 
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg={CalcButtonBg} p={4} border='1px' borderColor='gray.100' cursor={'pointer'}>
                <Center>/</Center> 
              </GridItem>
              <GridItem rowSpan={1} colSpan={2} bg={buttonClearBg} p={4} border='1px' borderColor='gray.100' cursor={'pointer'}>
                <Center>C</Center> 
              </GridItem>
              <GridItem rowSpan={1} colSpan={2} bg={buttonEqualBg} p={4} border='1px' borderColor='gray.100' cursor={'pointer'}>
                <Center>=</Center>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost'  onClick={onClose}>Close</Button>
            <Button colorScheme='blue' mr={3}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalCalculator