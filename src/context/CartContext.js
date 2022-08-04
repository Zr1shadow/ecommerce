import { createContext, useState } from "react"

const CartContext = createContext(null)

const CartProvider = (props) => {
    const [cart, setCart] = useState([])
    const [category, setCategory] = useState("")

    
  
    return (
    <CartContext.Provider value={{cart, setCart, category, setCategory}}>
        {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider}