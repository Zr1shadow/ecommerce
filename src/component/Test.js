import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

const Test = () => {
    const { cart, setCart } = useContext(CartContext)
    const {cartUtils} = useContext(CartContext)
    const { Qty } = cartUtils
    console.log(cartUtils)
    console.log(cartUtils.getQty())
    return (
    <div>{cartUtils}</div>
  )
}

export default Test