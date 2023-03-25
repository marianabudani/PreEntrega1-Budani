import { Flex, 
  Spacer, 
  Box, 
  Container, 
  Heading, 
  Button, 
  Menu,
  MenuButton,
  MenuItem,
  Avatar,
  MenuList
 } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons";
//import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const NavBar = ({titulo}) => {
  const [categorias, setCategorias] = useState([])
  /*useEffect(()=>{
    const database = getFirestore()
    const categoriasCollection = collection(database, 'categorias')
      getDocs(categoriasCollection).then((querySnapshot) => {
        const categorias = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }))
        setCategorias(categorias)
      })
  })*/
  const gotas = 'Gotas'
  const sueros = 'Sueros'
  const cremas = 'Cremas'
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
                <MenuButton as={Button} size="lg" variant="outline" _hover={{
                  background: "grey",
                  color: "black",
                  }} m="5">Catalogue</MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton as={Button} ssize="lg" variant="outline" _hover={{
                  background: "grey",
                  color: "black",
                }} m="5" rightIcon={<ChevronDownIcon/>}>Categories</MenuButton>
               <MenuList color="black" className="menu-list">
                <Link to={`/category/${gotas}`}><MenuItem>Gotas</MenuItem></Link>
                <Link to={`/category/${sueros}`}><MenuItem>Sueros</MenuItem></Link>
                <Link to={`/category/${cremas}`}><MenuItem>Cremas</MenuItem></Link>
              </MenuList>
              {/*{categorias.map((cat)=>{
                <Link to={`/category/${cat}`}><MenuItem>{cat.name}</MenuItem></Link>
              })}*/}
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