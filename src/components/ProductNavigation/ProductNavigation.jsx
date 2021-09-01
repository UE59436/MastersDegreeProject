import React from 'react'
import { ProductNavigationContainer, ProductNavigationMenu, ProductNavigationMenuItem, ProductNavigationProductName } from './ProductNavigation.style'

const ProductNavigation = () => {
    return (
        <ProductNavigationContainer>
            <ProductNavigationMenu>
                <ProductNavigationProductName>
                    Piekarnik a12-b234-gdi11
                </ProductNavigationProductName>
                <ProductNavigationMenuItem
                    href="#description"
                >
                    Opis produktu
                </ProductNavigationMenuItem>
                <ProductNavigationMenuItem
                    href="#parameters"
                >
                    Specyfikacja
                </ProductNavigationMenuItem>
                <ProductNavigationMenuItem
                    href="#documentation"
                >
                    Pobierz dokumenty
                </ProductNavigationMenuItem>
            </ProductNavigationMenu>
        </ProductNavigationContainer>
    )
}

export default ProductNavigation