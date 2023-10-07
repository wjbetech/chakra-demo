import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { AddIcon, EmailIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"

export default function SideBar() {
  return (
    <List fontSize="1.25em">
      <ListItem fontSize="34px" marginBottom={4}>
        <NavLink to="/">
          Metaltopia
        </NavLink>
      </ListItem>
      <ListItem marginBottom={4}>
        <NavLink to="/">
          <ListIcon as={AddIcon}></ListIcon>
          Add Band
        </NavLink>
      </ListItem>
      <ListItem marginBottom={4}>
        <NavLink to="/">
          <ListIcon as={EmailIcon}></ListIcon>
          Contact
        </NavLink>
      </ListItem>
    </List>
  )
}
