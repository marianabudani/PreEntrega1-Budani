import { Center, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"

const ItemDetail = ({ products }) => {
  const { id } = useParams()
  const navigateTo = useNavigate()
  const productFilter = products.filter((product) => product.id === id)

  const [countDown, setCountDown ] = useState(3)
  if (productFilter.length != 0) {
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
  }else {
    useEffect(() => {
      const intervalId = setInterval(()=>{
        setCountDown(countDown => countDown - 1)
      }, 1000)
      return () => { clearInterval(intervalId) }
    }, [])
    useEffect(() => {
      if(countDown === 0){
        navigateTo('/catalogue')
      }
    }, [countDown, navigateTo])
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
          It seems that your search returned no results. You will be redirected to the catalogue in {countDown} ...
        </AlertDescription>
      </Alert>
      </>
    )
  }
  
}

export default ItemDetail