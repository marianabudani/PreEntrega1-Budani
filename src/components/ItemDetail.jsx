import { Center, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetail = ({ productos }) => {
  const { id } = useParams()
  const [ prod, setProd ] = useState([])
  useEffect(() => {
    const database = getFirestore()
    const prodRef = doc(database, 'productos', `${id}`)
    getDoc(prodRef).then((snapshot) => {
      if(snapshot.exists()){
        setProd(snapshot.data())
      }else{
        console.log('docu')
      }
    })
  }, [])
  const productoFilter = productos.filter((producto) => producto.id == id)
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
              <ItemCount stock={producto.stock}/>
            </CardFooter>
          </Card>
        </Center>
      </div>
      ))}
    </>
  )
}

export default ItemDetail