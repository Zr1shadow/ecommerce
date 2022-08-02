import React from 'react'
import styled from 'styled-components'
import HomeCallToActionItems from './HomeCallToActionItems'
import HomeIntroContent from './HomeIntroContent'
import { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Colors } from './StyledComponents'
import jewelery from '../assets/jewelery.jpg'
import menFashion from '../assets/menFashion.jpg'
import womenFashion from '../assets/womenFashion.jpg'
import electronics from '../assets/electronics.jpg'

const HomeIntro = styled.div`
  background: linear-gradient(to bottom, ${Colors.yellowPrimary} 0%, ${Colors.primary} 100%);
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  flex:1;
  h1, h2{
    text-align: center;
  }
`

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  @media (min-width: 640px) {
    /* grid-template-columns: 1fr 1fr; */
    grid-template-rows: 1fr;
    ${HomeIntro} {
      background: linear-gradient(to right, ${Colors.yellowPrimary} 0%, ${Colors.primary} 100%);
    }
  }
`

const HomeCallToAction = styled.div`
  display: grid;
  justify-content: space-between;
  flex:1;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  background-color: ${Colors.primary};
`


const Home = () => {
  const checkRoute = useLocation()
  console.log(checkRoute.pathname)
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