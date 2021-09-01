import styled from "styled-components";

export const CanvasContainer = styled.div`
    background: #ddd;
    border-radius: 15px;
    box-shadow: -4px 10px 25px 4px rgba(0,0,0,0.4);
    display: block;
    width: 60%;
    height: 60vh;
    margin: 0 auto;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }

    @media screen and (max-width: 600px) {
        height: 40vh;
        width: 80%;
    }
`

export const Loading = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const LoadingBarContainer = styled.div`
    width: 100px;
    height: 32px;
    background: #ccc;
    border-radius: 5px;
    `

export const LoadingBar = styled.div`
    height: 32px;
    border-radius: 5px;
    background: #e31329;
`