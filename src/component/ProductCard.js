import styled from "styled-components"
import Rating from "./Rating"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { StyledButton } from '../component/StyledComponents'

const ProductCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
`
const ProductImg = styled.img`
margin-top: 5px;
  width: 90%;
  height: 200px;
`

const ProductCard = (props) => {
    const {title, image, description, price, category, rating} = props
    const { cart, setCart } = useContext(CartContext)
    const [ item, setItem ] = useState({})
    
    const addQty = (event) => {
        // have to create newProps to add new property to props because props is immutable
        const newProps = {...props}
        newProps.quantity = Number(event.target.value)    
        // console.log(newProps)
        setItem(newProps)
        console.log(item)
    }

    const addToCart = (props) => {
        setCart(item)
        console.log(cart)
    }
  return (
    <ProductCardDiv>
        <div>
            <h1>{title}</h1>
            <ProductImg src={image} alt={title} />
        </div>
        <ProductCardContent>
            <p>{price}</p>
            <Rating {...rating} />
            <p>{description}</p>
        
            <select name="Qty" onChange={addQty}>
                <option value="o">Select Qty</option>    
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <StyledButton onClick={() => addToCart(props)}>Add to Cart</StyledButton>
            <p>{cart.quantity}</p>
        </ProductCardContent>
    </ProductCardDiv>
  )
}

export default ProductCard