import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #f4f4f4;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
    }

    ul, ol {
        list-style: none;
    }

    h4 {
        font-weight: 400;
        font-size: 18px;
        color: #fff;
        margin-top: 60px;
        margin-bottom: 25px;

        @media screen and (max-width: 600px) {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }
`