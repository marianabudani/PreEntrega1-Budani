import { Flex, Spacer, Box, Container, Heading, Button, Menu, MenuButton, MenuList, MenuItem, Avatar, } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = ({titulo}) => {
  return (
    <>
      <Container maxW='container.xxl' bg='red.700' color='white'>
        <Flex alignItems="center" gap="2">
          <Avatar size="md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Umbrella_Corporation_logo.svg/2048px-Umbrella_Corporation_logo.svg.png"/>
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>{titulo}</Link>
            </Heading>
          </Box>
          <Spacer/>
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton as={Button} size="lg" variant="outline" colorScheme="teal" m="5">Catalogue</MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton as={Button} size="lg" variant="outline" colorScheme="teal"  _hover={{
                  background: "white",
                  color: "grey",
                }} m="5" rightIcon={<ChevronDownIcon/>}>Categories</MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Gotas"}`}><MenuItem>Gotas</MenuItem></Link>
                <Link to={`/category/${"Sueros"}`}><MenuItem>Sueros</MenuItem></Link>
                <Link to={`/category/${"Cremas"}`}><MenuItem>Cremas</MenuItem></Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </> 
  )
}

export default NavBar