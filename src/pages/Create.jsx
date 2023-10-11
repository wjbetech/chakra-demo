import { Stack, InputGroup, InputLeftAddon, Input,Heading, Button, FormControl, Textarea, Text, useToast } from '@chakra-ui/react'
import { Form, redirect } from "react-router-dom"

export default function Create() {

  const toast = useToast()
  const showToast = () => {
    toast({
      title: "Added a new band!",
      description: "You successfully added a new band.",
      variant: "top-accent",
      isClosable: true,
      position: "top",
      status: "success",
      containerStyle: {
        scale: "120%",
        width: "50%",
        maxWidth: "350px",
        marginBottom: "50px",
      },
      duration: 2000
    })
  }

  return (

    <Stack spacing={4} width="45%" minW="500px" m="25px auto">

      <Heading as="h2" fontWeight="400" fontSize="36px" mb="30px">Add a Band</Heading>

      <Form method="post" action="/add-band">

          {/* band name */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Band Name'  />
            <Input bg="white" isRequired pl="30px" type="text" name="name"  placeholder="Metallica" />
          </InputGroup>

          {/* year formed */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Year Formed' />
            <Input bg="white" isRequired pl="30px" type="number" name="year"  placeholder='2004' />
          </InputGroup>

          {/* nationality */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Nationality' />
            <Input bg="white" isRequired pl="30px" name="nationality"  placeholder='American' />
          </InputGroup>

          {/* members */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Members' />
            <Input bg="white" isRequired pl="30px" type="number" name="members"  placeholder='4' />
          </InputGroup>

          {/* label */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Label' />
            <Input bg="white" isRequired pl="30px" type="text" name="label"  placeholder='Sumerian Records' />
          </InputGroup>

          {/* subgenre */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Genre' />
            <Input bg="white" isRequired pl="30px" type="text" name="subgenre"  placeholder='Metalcore' />
          </InputGroup>

          {/* band history */}
          <Text fontSize="20px">Band History:</Text>
          <InputGroup size="lg" mb="10px">
            <Textarea bg="white" isRequired type="text" name="history"  placeholder='The band formed in...' />
          </InputGroup>

          {/* img */}
          <InputGroup size="lg" mb="10px">
            <InputLeftAddon bg="#fff" borderLeft="8px solid #38A169"  w="25%" minWidth="150px" children='Band Photo' />
            <Input bg="white" p="10px" pl="30px" type="file" name="img"  placeholder='metallica.png' border="none" />
          </InputGroup>

          <Button onClick={showToast} type="submit" colorScheme="green" mt="20px" w="100%">Submit</Button>

      </Form>


    </Stack>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const band = {
    name: data.get("name"),
    dateFormed: data.get("year"),
    nationality: data.get("nationality"),
    members: data.get("members"),
    label: data.get("label"),
    subgenre: data.get("subgenre"),
    img: data.get("img"),
    history: data.get("history")
  }

  console.log(band)

  return redirect("/")
}
