import styled from "styled-components"
import Rating from "./Rating"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { StyledButton } from '../component/StyledComponents'
import CartWidget from "./CartWidget"

const ProductCardDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    margin: 25px;
    height: 100vh;
    @media(max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`
const ProductCardContent = styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    justify-content: flex-start; */
    @media screen {
     flex-direction:column;
    }
`
const ProductImg = styled.img`
  width: 90%;
  height: 50%;
`

const CartSection = styled.div`
    display: flex;
    justify-content: flex-start;
`



const ProductCard = (props) => {
    const {title, image, description, price, category, rating} = props
    const { cart, setCart } = useContext(CartContext)
    const [ item, setItem ] = useState({})
    const vaildateItem = cart.findIndex((cartItem) => cartItem.id===props.id )
    let Qty = 1
    
    const getQty = (event) => {
        Qty = Number(event.target.value)
    }

    const appendQtyToCart = () => {
        const newProps = {...props}
        newProps.quantity = Qty 
        setCart([...cart, newProps])
    }

    const updateQty = () => {
        if(cart[vaildateItem].id === props.id) {
            console.log(`cartNumber: ${cart[vaildateItem].quantity} itemNum: ${Qty} = ${cart[vaildateItem].quantity + Qty}`)     
            const newQty=(cart[vaildateItem].quantity = cart[vaildateItem].quantity + Qty)
            console.log(cart) 
        }
    }

    const checkIfItemExist = () => {
        if(vaildateItem === -1) {
            appendQtyToCart()
            console.log("CheckIfItemExist")
        }
        else {
            console.log(vaildateItem)
            console.log("updateQty")
            updateQty()
        }
    }

    const addToCart = () => {
        
        // console.log(cart)
        
        // console.log(item[0].id)
        if( cart.length !== 0) {
            console.log('not empty')
            
            console.log(vaildateItem)
            checkIfItemExist()
        } else {
            
            appendQtyToCart()
            console.log(cart)
        }
        
    }
  return (
    <ProductCardDiv>
        <ProductCardContent>
            <ProductImg src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <div>
                    <Rating {...rating} />
                </div>
                <p>{description}</p>
                {/* Need to make this its on component */}
                <select name="Qty" onChange={getQty}>   
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <StyledButton onClick={() => addToCart()}>Add to Cart</StyledButton>
            </div>
        </ProductCardContent>
        <div>
            <CartWidget />
        </div>
    </ProductCardDiv>
  )
}

export default ProductCard