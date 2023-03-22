
import {
    Box,
    SimpleGrid,
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Icon, Button, useColorModeValue, useDisclosure,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import ConfigurationForm from "./components/ConfigurationForm";
import UnikForm from "./components/UnikForm";

import formConfiguration from "./variables/formConfiguration";
import unikDatas from "./variables/unikDatas";

export default function UnikComponent() {
    const {
        isOpen: isOpenCreateModal,
        onOpen: onOpenCreateModal,
        onClose: onCloseCreateModal,
    } = useDisclosure();

    const {
        isOpen: isOpenPreviewModal,
        onOpen: onOpenPreviewModal,
        onClose: onClosePreviewModal,
    } = useDisclosure();

    const {
        isOpen: isOpenConfModal,
        onOpen: onOpenConfModal,
        onClose: onCloseConfModal,
    } = useDisclosure();

    const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
                <Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px'>
                    <Flex align='left' justify='space-between' w='100%' pe='20px' pt='5px'>
                        <Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px' onClick={onOpenConfModal}>
                            Configuration Form
                        </Button>
                        <Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px' onClick={onOpenPreviewModal}>
                            Preview Form
                        </Button>
                        <Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px' onClick={onOpenCreateModal}>
                            Add
                        </Button>
                    </Flex>
                    <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
                        <Table variant="simple">
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {unikDatas.map((row, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>{ row.id} </Td>
                                            <Td><Button>detail</Button></Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Flex>
                </Card>
            </SimpleGrid>

            <ConfigurationForm
                configurationData={formConfiguration}
                isOpen={isOpenConfModal}
                onClose={onCloseConfModal}
            ></ConfigurationForm>

            <UnikForm
                configurationData={formConfiguration}
                isSubmit={true}
                title={'Form Tambah'}
                isOpen={isOpenCreateModal}
                onClose={onCloseCreateModal}
            ></UnikForm>

            <UnikForm
                configurationData={formConfiguration}
                isSubmit={false}
                title={'Form Preview'}
                isOpen={isOpenPreviewModal}
                onClose={onClosePreviewModal}
            ></UnikForm>
        </Box>
    );
}
