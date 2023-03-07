import React, { useContext } from "react"
import { Button } from "@chakra-ui/react"
import { CartContext } from "../contexts/ShoppingCartContext"

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext)
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  return (
    <>
      <div className="cart">
        <Button size="md" variant="outline">
          <span className="material-symbols-outlined">add_shopping_cart</span>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  )
}

export default CartWidget