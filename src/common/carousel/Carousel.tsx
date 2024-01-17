import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import {ProductImageType} from '../../types/productTypes';

interface CarouselDefaultProps {
    images?: ProductImageType[];
    showStatus: boolean;
    showIndicators: boolean;
    title: string;
}

const CarouselDefault: React.FC<CarouselDefaultProps> = ({ images = [], showStatus, showIndicators, title }) => {
    return (
        <div className="mds-products-left-section">
            {images.length > 0 ? (
                <Carousel showStatus={showStatus} showIndicators={showIndicators}>
                    {images.map((image, index) => (
                        <img key={'image' + index} src={image.src} alt={image.alt} />
                    ))}
                </Carousel>
            ) : null}
            <div className="mds-product-view-thumnail">
                <div className="mds-product-short-details">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default CarouselDefault;
