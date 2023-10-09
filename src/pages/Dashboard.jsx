import { useLoaderData, Link } from "react-router-dom";
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
    <SimpleGrid gap="25px" mx="3px" mb="30px" minChildWidth="300px">
      {bands && bands.map(b => (
        <Card key={b.id} maxW='sm' bg="#fff" boxShadow="0 10px 20px rgba(0, 0, 0, 0.5)" borderLeft="8px solid #38A169">
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
              <Text fontWeight="500">
                {b.subgenre}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Link to="/profile">
                <Button leftIcon={<ViewIcon />}  colorScheme="green">
                  View
                </Button>
              </Link>
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
