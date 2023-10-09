import { Flex, Box, Text, Heading, Button, Spacer } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Flex bg="gray.50" as="nav" py={6} px={4} mb={4} alignItems="center" gap={6}>
      <Heading as="h1" fontWeight="400">Metaltopia</Heading>
      <Spacer />
      <Box borderRadius="md" bgColor="#38A169" color="white" p="5px 10px">W</Box>
      <Text>wjbetech@gmail.com</Text>
      <Button colorScheme="green">Contact</Button>
    </Flex>
  )
}
