import {  useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import FiltersSection from "./FiltersSection"
import { Colors } from "./StyledComponents"
import HomeHeader from "./HomeHeader"
import Products from "./Products"
import Loader from "../Loader"

const HomeContainer = styled.div`
  /* background-color: ${Colors.primary}; */
  /* background-color: #f2f2f2; */
`

const HomeContent = styled.div`
width: 80%;
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-rows: 500px;
gap: 15px;
`

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
        setIsLoading(true)
        const url = "https://fakestoreapi.com/products"
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
        // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
        setProducts(data)
        setIsLoading(false) 
    }
    getProducts()
}, [])

  return (
    <>
    {!isLoading ? (
        <HomeContainer>
          <HomeHeader />
          <HomeContent>         
                {products?.length > 0 ? (
                  products?.map((product, key) => (
                    <Products {...product} key={key}/>
                  ))
                ) : (
                  <div>No movies found.</div>
                )}
          </HomeContent>
        </HomeContainer>
    ) : (
    <Loader />
    )}
  </>
  )
}
export default Home