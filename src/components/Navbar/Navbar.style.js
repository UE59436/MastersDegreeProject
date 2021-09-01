import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: linear-gradient(90deg, #e31329, #bf0d13);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-bottom: 2px solid rgba(255, 255, 255, .2);
    box-shadow: 0px 1px 5px 5px rgba(0,0,0,0.2);
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        box-shadow: none;
    }
`

export const NavbarTitle = styled.h1`
    color: #fff;
    font-size: 3rem;
    padding: 10px 20px;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        padding: 10px 0;
    }
`

export const NavbarMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const NavbarMenuItem = styled.li`
    display: block;
    height: 100%;
    padding: 20px;
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: #A60000;
    }

    @media screen and (max-width: 600px) {
        font-size: 1rem;
        padding: 10px;
    }
`