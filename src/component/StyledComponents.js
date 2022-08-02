import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const Colors = {
    primary: '#00296B',
    secondary: '#00509D',
    yellowPrimary: '#FFD500',
    yellowLink: '#FDC500',
    button: '#FC7802'
}

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${Colors.yellowLink};
    &.active{
        color:red;
    }
`

export const StyledButton = styled.button`
background-color: ${Colors.button};
color: white;
font-size: 18px;
padding: 10px;
border: none;
border-radius: 5%;
cursor: pointer;
`