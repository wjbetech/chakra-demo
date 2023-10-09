import { List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { AddIcon, EmailIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"

export default function SideBar() {
  return (
    <List fontSize="1.25em">
      <ListItem fontSize="34px" marginBottom={4}>
        <Text>
          Menu
        </Text>
      </ListItem>
      <ListItem marginBottom={4}>
        <NavLink to="/add-band">
          <ListIcon as={AddIcon} m="0 15px 3px 0"></ListIcon>
          Add Band
        </NavLink>
      </ListItem>
      <ListItem marginBottom={4}>
        <NavLink to="/contact">
          <ListIcon as={EmailIcon} m="0 15px 3px 0"></ListIcon>
          Contact
        </NavLink>
      </ListItem>
    </List>
  )
}
