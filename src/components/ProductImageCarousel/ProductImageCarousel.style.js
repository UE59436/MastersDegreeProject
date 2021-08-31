import styled from "styled-components";

export const ProductImageCarouselContainer = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductImageCarouselMain = styled.img`
    width: 400px;
    height: auto;
    max-width: 600px;
    max-height: 600px;
    display: block;

    @media screen and (max-width: 600px) {
        width: 80%;
        margin: 0 auto;
    }
`

export const ProductImageCarouselMinifiedContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const ProductImageCarouselMinified = styled.img`
    width: 150px;
    height: auto;
    display: inline-block;
    margin: 10px 20px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        width: 80px;
        margin: 10px;
    }

    
    &:hover {
        opacity: .8;
    }
`