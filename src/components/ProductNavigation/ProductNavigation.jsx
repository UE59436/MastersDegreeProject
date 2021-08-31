import React from 'react'
import { ProductNavigationContainer, ProductNavigationMenu, ProductNavigationMenuItem, ProductNavigationProductName } from './ProductNavigation.style'

const ProductNavigation = () => {
    return (
        <ProductNavigationContainer>
            <ProductNavigationMenu>
                <ProductNavigationProductName>
                    Piekarnik a12-b234-gdi11
                </ProductNavigationProductName>
                <ProductNavigationMenuItem>
                    Opis produktu
                </ProductNavigationMenuItem>
                <ProductNavigationMenuItem>
                    Specyfikacja
                </ProductNavigationMenuItem>
                <ProductNavigationMenuItem>
                    Pobierz dokumenty
                </ProductNavigationMenuItem>
            </ProductNavigationMenu>
        </ProductNavigationContainer>
    )
}

export default ProductNavigation
