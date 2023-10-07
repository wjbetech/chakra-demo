import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function Layout() {
  return (
    <Grid bg="gray.700" templateColumns="repeat(6, 1fr)">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1 }}
        bg="yellow.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "15px 35px", lg: "20px 25px" }}
      >
        <SideBar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 5 }}
        px={4}
      >
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
