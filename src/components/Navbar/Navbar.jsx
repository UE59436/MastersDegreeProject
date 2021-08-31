import React from 'react'
import { NavbarContainer, NavbarMenu, NavbarMenuItem, NavbarTitle } from './Navbar.style'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarTitle>
                SuperAGD
            </NavbarTitle>

            <NavbarMenu>
                <NavbarMenuItem>
                    Produkty    
                </NavbarMenuItem>
                <NavbarMenuItem>
                    Nowości
                </NavbarMenuItem>
                <NavbarMenuItem>
                    Wsparcie
                </NavbarMenuItem>
                <NavbarMenuItem>
                    Promocje
                </NavbarMenuItem>
            </NavbarMenu>
        </NavbarContainer>
    )
}

export default Navbar
