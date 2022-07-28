import React from 'react'
import styled from 'styled-components'
import { StyledNavLink } from './StyledComponents'

const HomeTitle = styled.h1`
  color: #00296B;
  font-size: 4rem;
`

const HomeContent = styled.h2`
  color: white;
`

const StyledButton = styled.button`
  background-color: #fc7802;
  color: white;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`

function HomeIntroContent() {
  return (
    <>
        <HomeTitle>Back to School Deals!</HomeTitle>
        <HomeContent>Start the new school year by saving on the lastest electronics</HomeContent>
        <StyledNavLink to='/Electronics'>
          <StyledButton>Shop Now</StyledButton>
        </StyledNavLink>
    </>
  )
  }
export default HomeIntroContent