import styled from "styled-components";

export const ParametersSectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    align-items: flex-start;
    justify-content: stretch;
    padding: 20px 0;
    border-bottom: 2px solid #a1a1a1;
`

export const ParametersSectionContent = styled.div`
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 20px auto;
    }
`

export const ParametersTitle = styled.h5`
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
`

export const ParametersTable = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: stretch;
    margin: 20px;
`

export const ParametersTableElement = styled.div`
    padding: 20px;
    border-radius: 15px;
    text-align: left;
    margin: 10px;
    background-color: #ddd;
`