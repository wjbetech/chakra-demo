import { Tab, Tabs, TabList, TabPanel, TabPanels, List, ListItem, Image } from "@chakra-ui/react";

export default function Profile() {

  return (
    <Tabs mt="40px" p="20px" colorScheme="green" variant="enclosed">

      {/* tabs */}
      <TabList>
        <Tab fontSize="20px" _selected={{ color: "white", bg: "green.500" }}>Band Info</Tab>
        <Tab fontSize="20px" _selected={{ color: "white", bg: "green.500" }}>Band History</Tab>
      </TabList>

      {/* panels */}
      <TabPanels>

        {/* band info tab */}
        <TabPanel m="30px 0 0 0" w="50%">
          <List>
            <ListItem fontSize="25px" p="7px 15px">
              Band Name:
            </ListItem>
            <ListItem fontSize="25px" p="7px 15px">
              Year Formed:
            </ListItem>
            <ListItem fontSize="25px" p="7px 15px">
              Genre:
            </ListItem>
            <ListItem fontSize="25px" p="7px 15px">
              Members:
            </ListItem>
          </List>
        </TabPanel>

        {/* band history tab */}
        <TabPanel m="15px 0 0 0" w="50%">
          <List>
            <Image
              src="https://placehold.co/600x400"
              alt=""
              borderRadius='md'
              h="200px"
              w="100%"
              objectFit="cover"
              mb="45px"
            />
            <ListItem fontSize="25px" p="7px 15px">
              Year Formed:
            </ListItem>
            <ListItem fontSize="22px" p="7px 15px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio ut quisquam eveniet quo culpa, sint facilis, reiciendis repudiandae assumenda repellat eaque provident doloremque nesciunt, ipsam quas fuga. Ullam, eaque!
            </ListItem>
          </List>
        </TabPanel>

      </TabPanels>

    </Tabs>
  );
}
