import React from 'react'
import styled from 'styled-components'
import HomeCallToActionItems from './HomeCallToActionItems'
import HomeIntroContent from './HomeIntroContent'
import { useState, useEffect } from 'react';
import jewelery from '../assets/jewelery.jpg'
import menFashion from '../assets/menFashion.jpg'
import womenFashion from '../assets/womenFashion.jpg'
import electronics from '../assets/electronics.jpg'

const HomeIntro = styled.div`
  background: linear-gradient(to bottom, #FDC500 0%, #00296B 100%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    ${HomeIntro} {
      background: linear-gradient(to right, #FDC500 0%, #00296B 100%);
    }
  }
`

const HomeCallToAction = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 10px;
  gap: 10px;
  background-color: #00296B;
`


const Home = () => {
  const categories = [
    {
      cat: "Electronics",
      img: electronics
    },
    {
      cat: "Jewelery",
      img: jewelery
    },
    {
      cat: "Men's Clothing",
      img: menFashion
    },
    {
      cat: "Women's Clothing",
      img: womenFashion
    }
  ]
//   useEffect(() => {
//     async function getMoviesByName() {
        
//         const url = "https://fakestoreapi.com/products/category/men's clothing"
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
//         // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
       
//         console.log(data)
        
//     }
//     getMoviesByName()
// }, [])

  return (
    <HomeGrid>
      <HomeIntro>
        <HomeIntroContent />
      </HomeIntro>
      <HomeCallToAction>

        {categories?.length > 0 ? (
          categories?.map((categorie, key) => (
            <HomeCallToActionItems key={key} categorie={categorie.cat}  img={categorie.img}/>
          ))
        ) : (
          <div> No Categories Found </div>
        )}
      </HomeCallToAction>
    </HomeGrid>
  )
}

export default Home