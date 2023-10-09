import { useLoaderData } from "react-router-dom";
import {
  SimpleGrid,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  ButtonGroup,
  HStack,
  Flex
} from '@chakra-ui/react'
import { ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {

  const bands = useLoaderData()

  return (
    <SimpleGrid gap="25px" mx="3px" mb="30px" minChildWidth="300px" bg="#E2E8F0">
      {bands && bands.map(b => (
        <Card key={b.id} maxW='sm' bg="blackAlpha.300" boxShadow="0 10px 20px rgba(0, 0, 0, 0.5)" borderLeft="8px solid #38A169">
          <HStack>
            <Flex align="end" p="10px 20px 0 20px" gap="15px">
              <Heading size='lg'>{b.name}</Heading>
              <Text fontSize="18px" align="center">{b.dateFormed}</Text>
            </Flex>
          </HStack>
          <CardBody>
            <Image
              src={b.img}
              alt={b.name}
              borderRadius='md'
              h="200px"
              w="100%"
              objectFit="cover"
            />
            <Stack mt={4} fontSize="18px">
              <Text>
                {b.subgenre}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button leftIcon={<ViewIcon />} variant="outline" colorScheme="green">
                View
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const bandsLoader = async () => {
  const res = await fetch("http://localhost:3000/metal_bands");
  return res.json()
}
