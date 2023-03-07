import { useState, useContext } from 'react'
import { Button, Container, Center, Heading, Card, CardHeader, CardBody, CardFooter, Text, Spinner } from "@chakra-ui/react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  return (
    <>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Quantity: {item.quantity}</Text>
                <Text>Price: U$D {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("Eliminando")}
                >
                 Delete
                </Button>
                <Spinner />
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <SendOrder />
    </>
  )
}

export default Cart