import { Flex, Box, Text, Heading, Button, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <Flex bg="gray.300" as="nav" py={6} px={4} mb={4} alignItems="center" gap={6}>
      <Link to="/">
        <Heading as="h1" fontWeight="700">Metaltopia</Heading>
      </Link>
      <Spacer />
      <Box borderRadius="md" bgColor="#38A169" color="white" p="5px 10px">W</Box>
      <Text>wjbetech@gmail.com</Text>
      <Button colorScheme="green">Contact</Button>
    </Flex>
  )
}
