import styled from "styled-components";
import { Download } from "@styled-icons/boxicons-regular/Download"

export const DocumentationContainer = styled.section`
    max-width: 80vw;
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    align-items: center;
    justify-content: stretch;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
        max-width: 100vw;
    }
`

export const DownloadItem = styled.div`
    border-radius: 15px;
    padding: 20px;
    margin: 10px; 
    background-color: #ddd;
    text-align: center;
`

export const DownloadIcon = styled(Download)`
    background-color: #e31329;
    padding: 5px;
    border-radius: 5px;
    object-fit: contain;
    color: #fff;
    width: 40px;
    height: 40px;
    margin-right: 15px;
`