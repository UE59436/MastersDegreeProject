import React, { useState } from 'react'
import piekarnik1 from "../../assets/Images/piekarnik1.jpg"
import piekarnik2 from "../../assets/Images/piekarnik2.jpg"
import piekarnik3 from "../../assets/Images/piekarnik3.jpg"
import { ProductImageCarouselContainer, ProductImageCarouselMain, ProductImageCarouselMinified, ProductImageCarouselMinifiedContainer } from './ProductImageCarousel.style'

const ProductImageCarousel = () => {
    const [selectedImg, setSelectedImg] = useState(piekarnik1);

    return (
        <ProductImageCarouselContainer>
            <ProductImageCarouselMain src={selectedImg}/>
            <ProductImageCarouselMinifiedContainer>
                <ProductImageCarouselMinified src={piekarnik1} onClick={() => setSelectedImg(piekarnik1)}/>
                <ProductImageCarouselMinified src={piekarnik2} onClick={() => setSelectedImg(piekarnik2)}/>
                <ProductImageCarouselMinified src={piekarnik3} onClick={() => setSelectedImg(piekarnik3)}/>
            </ProductImageCarouselMinifiedContainer>
        </ProductImageCarouselContainer>
    )
}

export default ProductImageCarousel
