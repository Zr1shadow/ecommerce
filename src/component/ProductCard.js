import styled from "styled-components"
import Rating from "./Rating"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { StyledButton } from '../component/StyledComponents'
import CartWidget from "./CartWidget"

import Test from "./Test"
import Checkout from "./Checkout"

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
    flex-direction: column;
    width: 80%;
    height: 90vh;
    /* flex-direction: column;
    padding-left: 20px; */
    justify-content: center;
`
const ProductImg = styled.img`
  width: 60%;
  margin: auto;
  height: 80%;
`

const CartSection = styled.div`
    display: flex;
    justify-content: flex-start;
`



const ProductCard = (props) => {
    const {title, image, description, price, category, rating} = props
    const { cart, setCart } = useContext(CartContext)
    const [ checkOut, setCheckOut ] = useState(false)
    const [Qty, setQty] = useState({value: 1})
    
    
    const convertQtyToInt = (event) => {
        console.log(Qty.value)
        Qty.value = Number(event.target.value)
        // setQty({value: event.target.value})
    }

    const appendQtyToCart = () => {
        const newProps = {...props}
        newProps.quantity = Qty.value 
        setCart([...cart, newProps])
        // getTotal()
    }

    const updateQty = () => {
        const vaildateItem = cart.findIndex((cartItem) => cartItem.id===props.id )
        if(cart[vaildateItem].id === props.id) {
            const stateCopy = [...cart]
            const newQty = cart[vaildateItem].quantity + Qty.value
            stateCopy[vaildateItem] = {...stateCopy[vaildateItem], quantity: newQty}
            setCart(stateCopy)
            // getTotal()
            console.log(cart) 
        }
    }

    const checkIfItemExist = () => {
        const vaildateItem = cart.findIndex((cartItem) => cartItem.id===props.id )
        if(vaildateItem === -1) {
            appendQtyToCart()
            // console.log("CheckIfItemExist")
        }
        else {
            // console.log("updateQty")
            updateQty()
        }
    }
    const mathForTotal = (item,index) => {
        
    }
    const getTotalForFirstEntry = () => {
        const total = cart.map((item,index) => (item.price * item.quantity).toFixed(2))

        return 
        // console.log(total)
    }
    const addToCart = () => {
        
        // console.log(cart)
        
        // console.log(item[0].id)
        if( cart.length !== 0) {
            // console.log('not empty')
            
            // console.log(vaildateItem)
            checkIfItemExist()
        } else {
            
            appendQtyToCart()
            // getTotalForFirstEntry()
            
        }
    }

    
  return (
    <ProductCardDiv>
        {!checkOut ? (
            <ProductCardContent>
                <ProductImg src={image} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>${price}</p>
                    <div>
                        <Rating {...rating} />
                    </div>
                    <p>{description}</p>
                    {/* Need to make this its on component */}
                    {/* defaultValue make react keep the new Qty as the new default selected value so the user doesn't have to keep changing it back */}
                    <select name="Qty"  onChange={convertQtyToInt}>   
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <StyledButton onClick={() => addToCart()}>Add to Cart</StyledButton>
                </div>
            </ProductCardContent>
        ) : ( 
            <Checkout />
        )}
        <div>
            <CartWidget checkOut={checkOut} setCheckOut={setCheckOut}/>
        </div>
        {/* <Test /> */}
    </ProductCardDiv>
  )
}

export default ProductCard