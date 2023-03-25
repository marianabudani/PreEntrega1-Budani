import { Center, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Divider, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, Button } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../contexts/ShoppingCartContext"
//import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetail = ({ productos }) => {
  const { addToCart } = useContext(CartContext)
  const [ stock, setStock ] = useState(1)

  /*useEffect(() => {
    const database = getFirestore()
    const prodRef = doc(database, 'productos', `${id}`)
    getDoc(prodRef).then((snapshot) => {
      if(snapshot.exists()){
        setProd(snapshot.data())
      }else{
        console.log('docu')
      }
    })
  }, [])*/
  function onAdd(productos) {
      addToCart(productos, stock)
  }
  console.log(productos.id)
  const productoFilter = productos.filter((producto) => producto.id == id)
  if (productoFilter.length != 0){
    return (
      <>
        {productoFilter.map((producto) => (
          <div key={producto.id}>
            <Center>
              <Card maxW='sm' key={producto.id} className="card-main">
                <CardBody>
                  <Image alt={producto.name} borderRadius='lg'src={producto.image}/>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.name}</Heading>
                    <Text>Description: {producto.description}</Text>
                    <Text>Category: {producto.category}</Text>
                    <Text>Stock: {producto.stock}</Text>
                    <Text color='blue' fontSize='2xl'>$ {producto.price}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount stockProd={producto.stock}  stock={stock}  setStock={setStock}/>
                  <Button onClick={() => onAdd()} variant="solid" colorScheme="blue">            
                    Add to cart
                  </Button>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    )
  }else{
    return(
      <>
        <Alert status='warning' variant='subtle' flexDirection='column' alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Error!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            It seems that your search returned no results...
          </AlertDescription>
        </Alert>
      </>
    )
  }
  
}

export default ItemDetail