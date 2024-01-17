import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Rating from '../../common/rating/Rating';
import Stepper from '../../common/stepper/Stepper';
import {ProductType} from '../../types/productTypes';

interface ContentProps {
    product: ProductType;
    increaseCartQtyEvent: () => void;
    decreaseCartQtyEvent: () => void;
    inCartQty: number;
}

const Content: React.FC<ContentProps> = ({ product, increaseCartQtyEvent, decreaseCartQtyEvent, inCartQty }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const showData = (label: string, data: string | number) => {
        return (
            <div className="mds-model">
                <span className="mds-model-title">{label}:</span> {data}
            </div>
        );
    };

    const calculatePrice = (quantity: number, price: number) => {
        return (quantity * price).toFixed(2);
    };

    const onSizeSelection = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="mds-products-right-section">
            <div className="mds-product-details-description">
                {showData('Brand', product.name)}
                {showData('Model', product.model)}
                {showData('Availability', product.availability)}

                <h1 className="mds-product-name">{product.desc}</h1>
                <Rating rating={product.rating} maxRating={product.maxRating} />

                <div className="mds-description-list">
                    <ul className="mds-description-list-unstyled">
                        {product.featureList?.length ? product.featureList.map((feature) => <li key={feature}>{feature}</li>) : null}
                    </ul>
                </div>

                <div className="mds-divider"></div>

                <div className="mds-size-container">
                    {product.sizes?.length ? (
                        product.sizes.map((size, index) => (
                            <div key={size + index} onClick={() => onSizeSelection(index)} className={activeIndex === index ? 'mds-size-single mds-size-active' : 'mds-size-single'}>
                                {size}
                            </div>
                        ))
                    ) : null}
                </div>

                <div className="mds-divider"></div>

                <div className="mds-tex-title">USD(incl. of all taxes)</div>

                {product.price.actualPrice > product.price.discountedPrice ? (
                    <div className="mds-price-wrapper">
                        <span className="mds-current-price">${inCartQty ? calculatePrice(inCartQty, product.price.discountedPrice) : product.price.discountedPrice}</span>
                        <span className="mds-current-price mds-price-cutoff">
                            <del>${inCartQty ? calculatePrice(inCartQty, product.price.actualPrice) : product.price.actualPrice}</del>
                        </span>
                    </div>
                ) : (
                    <span className="mds-current-price">${inCartQty ? calculatePrice(inCartQty, product.price.discountedPrice) : product.price.discountedPrice}</span>
                )}

                <div className="mds-product-details-footer">
                    <Stepper qty={inCartQty} decrementQty={() => decreaseCartQtyEvent()} incrementQty={() => increaseCartQtyEvent()} />

                    <button className="mdc-button mdc-button--raised">
                        <span className="mdc-button__label">Buy Now</span>
                    </button>
                    <button className="mdc-button mdc-button--outlined">
                        <span className="mdc-button__label">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
