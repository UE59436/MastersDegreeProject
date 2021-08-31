import React from 'react'
import { FooterAside, FooterAsideMenu, FooterAsideMenuItem, FooterAsideMenus, FooterContainer, FooterProductList, FooterProductListItem, FooterProductListItemCategory, FooterProductListItemSubcategory, FooterProducts } from './Footer.style'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterProducts>
                <h4>Produkty</h4>
                <FooterProductList>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Kuchnie wolnostojące
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Indukcyjne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Ceramiczne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Gazowo-elektryczne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Gazowe, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Piekarniki
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Parowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Standardowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Kompaktowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Zestaw do zabudowy, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Płyty
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Indukcyjne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Ceramiczne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Elektryczne, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Gazowe, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Okapy
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Kominowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Wyspowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Teleskopowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Meblowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Uniwersalne, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Lodówki
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Wolnostojące, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Do zabudowy, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Wielkogabarytowe, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Zamrażarki stojące, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Zamrażarki do zabudowy, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Zamrażarki skrzyniowe, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Zmywarki
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Wolnostojące, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Do zabudowy, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                    <FooterProductListItem>
                        <FooterProductListItemCategory>
                            Pralki
                        </FooterProductListItemCategory>
                        <FooterProductListItemSubcategory>
                            Ładowane od frontu, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            ładowane od góry, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Pralko-suszarki, 
                        </FooterProductListItemSubcategory>
                        <FooterProductListItemSubcategory>
                            Do zabudowy, 
                        </FooterProductListItemSubcategory>
                    </FooterProductListItem>
                </FooterProductList>
            </FooterProducts>
            
            <FooterAside>
                <FooterAsideMenus>
                    <FooterAsideMenu>
                        <FooterAsideMenuItem>
                            Moje SuperAGD
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Wsparcie
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Promocje
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Strefa partnera
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Polityka Zarządzania
                        </FooterAsideMenuItem>
                    </FooterAsideMenu>
                    <FooterAsideMenu>
                        <FooterAsideMenuItem>
                            O nas
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Firma
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Centrum Serwisowe
                        </FooterAsideMenuItem>
                        <FooterAsideMenuItem>
                            Kontakt
                        </FooterAsideMenuItem>
                    </FooterAsideMenu>
                </FooterAsideMenus>
            </FooterAside>
        </FooterContainer>
    )
}

export default Footer
