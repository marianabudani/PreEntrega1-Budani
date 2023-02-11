import { Center, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ products }) => {
  const { id } = useParams()
  const productFilter = products.filter((product) => product.id == id)
  return (
    <>
      {productFilter.map((product) => (
        <div key={product.id}>
        <Center>
          <Card maxW='sm' key={product.id} className="card-main">
            <CardBody>
              <Image alt={product.name} borderRadius='lg'src={product.image}/>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.name}</Heading>
                <Text>Description: {product.description}</Text>
                <Text>Category: {product.category}</Text>
                <Text>Stock: {product.stock}</Text>
                <Text color='blue' fontSize='2xl'>$ {product.price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCount stock={product.stock}/>
              <Center className="btn-center">
                <Button variant="solid" color="blue">
                  Buy
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
      ))}
    </>
  )
}

export default ItemDetail