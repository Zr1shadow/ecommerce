import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #FDC500;
    &.active{
        color:red;
    }
`