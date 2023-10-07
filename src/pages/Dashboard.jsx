import { useLoaderData } from "react-router-dom";
import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  ButtonGroup
} from '@chakra-ui/react'

export default function Dashboard() {

  const bands = useLoaderData()

  return (
    <SimpleGrid gap="10px" mx="15px" my="5px" minChildWidth="300px">
      {bands && bands.map(b => (
        <Card key={b.id} maxW='sm'>
          <CardBody>
            <Image
              src={b.img}
              alt={b.name}
              borderRadius='md'
              h="200px"
              w="100%"
              objectFit="cover"
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{b.name}</Heading>
              <Text>
                Members: {b.members}
              </Text>
              <Text>
                Record Label:: {b.label}
              </Text>
              <Text color='' fontSize='2xl'>
                Formed: {b.dateFormed}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
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
