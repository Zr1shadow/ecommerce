import styled from "styled-components"
import '../App.css'
import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { StyledNavLink } from "./StyledComponents"
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


const CartWidget = () => {
  const {cart} = useContext(CartContext)
  useEffect(() => {
    
}, [cart.quantity])
  return (
    <CartContainer>
      <h2>Cart({cart.length})</h2>
      <Line />
      {cart?.length > 0 ? (
       cart?.map((item, key) => (
        <CartItems key={key}> 
        <CardTitleSec>
            <h5>{item.title}</h5> <FontAwesomeIcon className='clickable' icon={faTrash} />
          </CardTitleSec>
            <p>Qty: {item.quantity}</p>
            <p>Price: ${item.price}</p>
        </CartItems>
      ))
      ) : (
        <div> No Items in Cart yet</div>
      )}
      <StyledNavLink to='/Home'>CheckOut</StyledNavLink>
    </CartContainer>
  )
}

export default CartWidget