
import { useState } from 'react';

// Chakra imports
import { Box, Button, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import CreateFormula from 'views/admin/formula/components/CreateFormula';

import ModalCalculator from './components/ModalCalculator'


const Index = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <SimpleGrid mb='20px' columns={1} spacing={{ base: '20px', xl: '20px' }}>
          <CreateFormula setShowModal={setShowModal} />
        </SimpleGrid>
      </Box>
      <ModalCalculator isOpen={showModal} onClose={() => setShowModal(prev => !prev)} />
    </>
  )
}

export default Index