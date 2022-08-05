import styled from "styled-components"
import '../App.css'
import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { StyledNavLink, StyledButton } from "./StyledComponents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  &::after{

  }
`

const CardTitleSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Line = styled.hr`
  color:red;
  width: 100%;
`


const CartWidget = ({setCheckOut, checkOut}) => {
  const {cart, setCart} = useContext(CartContext)
  useEffect(() => {
    
}, [cart.quantity])
const deleteItemFromCart = (item) => {
  console.log(cart)
  const stateCopy = [...cart]
  const index = stateCopy.findIndex((cartItem) => 
      { console.log(`Cart ID= ${cartItem.id} cartItem = ${item}`)
      return cartItem.id===item}
      )
  console.log(` index: ${index}`)
  stateCopy.splice(index, 1)
  setCart(stateCopy)
}

const getTotalForFirstEntry = () => {
  return(cart.map((item,index) => (item.price * item.quantity).toFixed(2)))
  // console.log(total)
}

const addArrayItem = (total, num) =>{
  const test = (parseFloat(total) + parseFloat(num)).toFixed(2)
  console.log(test)
  return  test
}
const getTotalForArray = () => {
  const total = []
  cart.map((item,index) => {
    total.push((item.price * item.quantity).toFixed(2))
    console.log(total)
    // total.push(price)
  })

  return total.reduce(addArrayItem)
  

  // total.push(cart.map((item,index) => (item.price * item.quantity).toFixed(2)))  
}

  return (
    <CartContainer>
      <h2>Cart({cart.length})</h2>
      <Line />
      {cart?.length > 0 ? (
       cart?.map((item, key) => (
        <CartItems key={key}> 
        <CardTitleSec>
            <h5>{item.title}</h5> <FontAwesomeIcon className='clickable' icon={faTrash} onClick={() => deleteItemFromCart(item.id)} />
          </CardTitleSec>
            <p>Qty: {item.quantity}</p>
            <p>Price: ${item.price}</p>
        </CartItems>
      ))
      ) : (
        <div> No Items in Cart yet</div>
      )}
      <p>
        Total: ${cart.length  
        ? cart.length === 1 ? getTotalForFirstEntry() : getTotalForArray()
        : '0'
      }
                
       </p>
      {/* <p>Total: ${cart.reduce((x, cartItem) => x + cartItem.price * cartItem.quantity).toFixed(2)}</p> */}
      {/* <StyledNavLink to='#'  onClick={() => setCheckout(true)}>CheckOut</StyledNavLink> */}
      <StyledButton onClick={() => setCheckOut(checkOut => !checkOut)}>Checkout</StyledButton>
    </CartContainer>
  )
}

export default CartWidget