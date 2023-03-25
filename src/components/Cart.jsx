import { useContext } from 'react'
import { Button, Container, Heading, Card, CardHeader, CardBody, CardFooter, Text, } from "@chakra-ui/react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";


const Cart = () => {
  const [cart, removeItem] = useContext(CartContext)

  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.id} >
            <Container className="main-catalogue">
              <Card maxW="sm">
                <CardHeader>
                  <Heading size="md">{item.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text as="b">Quantity: {item.quantity}</Text>
                  <Text>Price: $ {item.price}</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="red"
                    onClick={() => removeItem(item.id)}
                  >
                  Delete
                  </Button>
                </CardFooter>
                <Text> Total: $ {item.price * item.quantity}</Text>
              </Card>
            </Container>
          </div>
        );
      })}
      <SendOrder cart={cart} />
    </>
  )
}

export default Cart