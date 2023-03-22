// Chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';
import CreateFormula from 'views/admin/formula/components/CreateFormula';

import ModalCalculator from './components/ModalCalculator'

const Index = () => {
  return (
    <>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <SimpleGrid mb='20px' columns={1} spacing={{ base: '20px', xl: '20px' }}>
          <CreateFormula />
        </SimpleGrid>
      </Box>
      <ModalCalculator />
    </>
  )
}

export default Index