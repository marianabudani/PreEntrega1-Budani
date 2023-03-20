import React from 'react'
import { Container, Text } from "@chakra-ui/react";
import SendOrder from './SendOrder';

const Cart = () => {
  return (
    <>
      <Container className="cart-container">
        <Text>Acá va toda la compra</Text>
      </Container>
      <SendOrder/>
    </>

  )
}

export default Cart