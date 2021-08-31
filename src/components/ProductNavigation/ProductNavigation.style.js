import styled from "styled-components";

export const ProductNavigationContainer = styled.div`
    margin: 10px 20px 40px;
`

export const ProductNavigationMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    text-align: center;
    background-color: #f4f4f4;
    color: #000;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ProductNavigationProductName = styled.h5`
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 2px solid #e31329;
    margin: 0 40px;

    @media screen and (max-width: 600px) {
        margin: 0;
    }
`

export const ProductNavigationMenuItem = styled.li`
    background: transparent;
    display: inline-block;
    margin: 0 20px;
    width: auto;
`