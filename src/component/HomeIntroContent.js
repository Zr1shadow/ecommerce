import React from 'react'
import styled from 'styled-components'
import { StyledNavLink, Colors, StyledButton } from './StyledComponents'

const HomeTitle = styled.h1`
  color: ${Colors.primary};
  font-size: 4rem;
`

const HomeContent = styled.h2`
  color: white;
`



const SpecialWord = styled.span`
  color: white;
`

function HomeIntroContent() {
  return (
    <>
        <HomeTitle>Back to <SpecialWord>School</SpecialWord> <br /> Deals!</HomeTitle>
        <HomeContent>Start the new school year <br />by saving on the lastest <br />electronics</HomeContent>
        <StyledNavLink to='/Home/Electronics'>
          <StyledButton>Shop Now</StyledButton>
        </StyledNavLink>
    </>
  )
  }
export default HomeIntroContent