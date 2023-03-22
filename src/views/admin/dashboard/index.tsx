import { Box, Center, Flex, Text } from "@chakra-ui/react"

const Dashboard = () => {
	return (
			<Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
				<Flex width="100%" minH="80vh" justifyContent="center" alignContent="center">
					<Center>
						<Text>Selamat Datang di Aplikasi KiSeratus</Text>
					</Center>
				</Flex>
			</Box>
    )
}

export default Dashboard