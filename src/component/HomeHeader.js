import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NavBar = styled.div`
    display: flex;
    max-height: 150px;
    align-items: center;
    justify-content: space-between;
    background-color: #2b2d42;
    color: #EDF2F4;
    width:100%;
`
const NavBarLinks= styled.div`
    flex:1;
    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        a{
        color: #EDF2F4;
        text-decoration: none;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:white;
    
    flex:1;
    &.active{
        font-weight: bold;
    }
`

// function styleByActiveStatus(isActive) {
//     return isActive
//         ? { fontWeight: "bold", textDecoration: "none" }
//         : { fontWeight: "normal", textDecoration: "none" };
// }
const HomeHeader = ({setMovieName}) => {
  return (
    <>
        <NavBar>
            
            <NavBarLinks>
                <ul>
                    <li><StyledNavLink to='/test' >Jewelery</StyledNavLink></li>
                    <li><StyledNavLink to='/' >Men Clothing</StyledNavLink></li>
                    <li><a href="#">Women Clothing</a></li>
                    <li><a href="#">Electronics</a></li>
                    {/* <li><MovieForm setMovieName={setMovieName}/></li> */}
                </ul> 
            </NavBarLinks>
                
            
        </NavBar>

        <Outlet />
    </>
  )
}

export default HomeHeader