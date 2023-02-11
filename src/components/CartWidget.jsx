import React from "react"
import { Button } from "@chakra-ui/react"

const CartWidget = () => {
  return (
    <>
    <div className="cart">
      <Button size="md" variant="outline">
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </Button>
    </div>
      
    </>
  )
}

export default CartWidget