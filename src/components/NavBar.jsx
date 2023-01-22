import { Flex, Spacer, Box, Center, Container, Heading } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = ({titulo}) => {
  return (
    <>
    <Container maxW='container.xl' bg='purple.200' color='white'>
      <Flex>
        <Heading>
          {titulo}
        </Heading>
        <Center w='100rem'>  
          <ul>
            <a href="#">Productos </a>
            <a href="#">Gotas </a>
            <a href="#">Cremas</a>
          </ul>
        </Center>
        <Spacer/>
        <Box flex="2">
          < CartWidget />
        </Box>
      </Flex>
    </Container>
    </> 
  )
}

export default NavBar