import styled from "styled-components";

export const ProductDescriptionContainer = styled.section`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
        max-width: 100%;
    }
`

export const ProductDescriptionList = styled.ul`
width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 0 50px;
`

export const ProductDescriptionListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 40px;
`

export const ProductDescriptionListItemTitle = styled.h3`
    font-size: 1.5rem;
    color: #e31329;
    margin: 20px;

    @media screen and (max-width: 600px) {
        margin: 20px 10px;
    }
`

export const ProductDescriptionListItemContent = styled.p`
    font-size: 1rem;
    color: #000;
`