import React from 'react'
import styled from 'styled-components'
import { StyledNavLink } from './StyledComponents'

const CallToActionItems = styled.div`
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 15%;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0,63,136,.4);

  &:nth-child(n+2) {
    background-position: center; 
    text-align: center;
  }
  &:nth-child(1) {
    background-position: right;
  }
`

const CallToActionItem = styled.div`
  display: flex;

`

const createValidUrl = (categorie) => {
  let str = categorie
  console.log(str)
  str = str.replace(/\s/g, '');
  console.log(str)
  return str
}

const HomeCallToActionItems = ({categorie, img}) => {
  return (
    <CallToActionItems img={img}>
        <StyledNavLink to={`Home/${createValidUrl(categorie)}`} >
          <h2>{categorie}</h2>
        </StyledNavLink>
    </CallToActionItems>
  )
}

export default HomeCallToActionItems