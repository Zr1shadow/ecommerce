import styled from "styled-components"
import { Colors, StyledNavLink } from "./StyledComponents"
import Rating from "./Rating"

const ProductsGrid = styled.div`
    /* display: grid;
    width:100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: auto; */
    /* gap: 10px; */ 
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px ${Colors.yellowPrimary} solid; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const ProductImg = styled.img`
margin-top: 5px;
  width: 90%;
  height: 200px;
`
const CardPrimary = styled.p`
  font-size: 16px;
  color: ${Colors.primary};
  font-weight: bold;
`

const CartSecondary = styled.p`
  font-size: 16px;
  color: ${Colors.secondary};  
`
const ProductCardContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: ${Colors.yellowPrimary}; */
`

const Products = ({id, title, image, price, category, rating}) => {
  return ( 
        <ProductCard >
            <StyledNavLink to={`/Home/${category}/${id}`}><ProductImg src={image} alt={title}/></StyledNavLink>
            <ProductCardContent>
            <StyledNavLink to={`/Home/${category}/${id}`}><CardPrimary>{title}</CardPrimary></StyledNavLink>
              <Rating {...rating}/>
              <StyledNavLink to={`/Home/${category}/${id}`}><CartSecondary>{category}</CartSecondary></StyledNavLink>
              <StyledNavLink to={`/Home/${category}/${id}`}><CardPrimary>${price}</CardPrimary></StyledNavLink>
            </ProductCardContent>
        </ProductCard>
  )
}

export default Products