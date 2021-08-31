import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #fff;
    width: 100%;
    font-family: "Lato", sans-serif;
    position: relative;
    border-top: 2px solid #e31329;
    z-index: 1100;

    @media screen and (min-width: 1200px) {
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        flex-direction: row;
    }

    @media screen and (max-width: 600px) {
        border: none;
    }
`

export const FooterProducts = styled.div`
    width: 66%;
    border-top-right-radius: 14px;
    padding: 40px 2.5vw;
    color: #fff;
    background: linear-gradient(90deg, #e31329, #bf0d13);

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 10px 2.5vw;
    }
`

export const FooterProductList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const FooterProductListItem = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: stretch;
    margin: 5px;
`

export const FooterProductListItemCategory = styled.h5`
    display: block;
    margin-right: 10px;
`

export const FooterProductListItemSubcategory = styled.span`
    color: hsla(0,0%,100%,.7);
    font-size: 13px;
    margin-right: 2px;
`

export const FooterAside = styled.aside`
    width: 33%;

    @media screen and (max-width: 1660px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const FooterAsideMenus = styled.div`
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;

    @media screen and (max-width: 1660px) {
        padding-top: 40px;
        margin-right: 0;
    }
`

export const FooterAsideMenu = styled.ul`
    -webkit-box-flex: 1;
    padding: 0 5vw;
    margin-bottom: 2em;
    margin-top: 60px;

    @media screen and (max-width: 1660px) {
        margin-top: 0;
    }
`

export const FooterAsideMenuItem = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
`
