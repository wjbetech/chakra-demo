import { Flex, Box, Text, Heading, Button, Spacer } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Flex bg="yellow.400" as="nav" py={6} px={4} mb={6} alignItems="center" gap={6} w="100vw">
      <Heading as="h1" fontWeight="400">Metal Bands</Heading>
      <Spacer />
      <Box borderRadius="md" bg="yellow.400" p="5px 10px">W</Box>
      <Text>wjbetech@gmail.com</Text>
      <Button colorScheme="yellow">Contact</Button>
    </Flex>
  )
}
