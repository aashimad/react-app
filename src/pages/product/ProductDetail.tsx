import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import CustomTab from '../../common/tab/CustomTab';
import Content from './Content';
import Carousel from '../../common/carousel/Carousel';
import {ProductType} from '../../types/productTypes';

import { useAppSelector } from './../../store/configureStore';
import { getProductDetailsSliceReq, increaseCartQty, decreaseCartQty } from './../../store/feature/productSlice';
import type { AppState } from './../../store/configureStore';
import './Product.css';


const ProductDetail: React.FC = () => {
    const dispatch = useDispatch();
    const productData = useAppSelector((state: AppState) => state.appProduct);
    const subscriptionData = useAppSelector((state: AppState) => state.appProduct.product);
    const inCartQty = useAppSelector((state: AppState) => state.appProduct.inCartQty);

    useEffect(() => {
        if(productData.status !== 'success') {
            dispatch<any>(getProductDetailsSliceReq({}));
        }
    }, [productData]);

    const increaseCartQtyEvent = () => {
        dispatch(
            increaseCartQty({
                inCartQty,
            }),
        );
    };

    const decreaseCartQtyEvent = () => {
        dispatch(
            decreaseCartQty({
                inCartQty,
            }),
        );
    };

    return (
        <>
            {subscriptionData && subscriptionData.length ? (
                subscriptionData.map((product: ProductType, index: number) => (
                    <div key={`detail-${index}`} className="mds-container">
                        <div key={`wrapper-${index}`} className="mds-products-details-wrapper">
                            <Carousel
                                key={`carousel-${index}`}
                                images={product.images}
                                showStatus={false}
                                title={'*LG C2 42 (106cm) 4K Smart OLED evo TV'}
                                showIndicators={false}
                            />
                            <Content key={`content-${index}`} 
                                product={product} 
                                inCartQty={inCartQty}
                                increaseCartQtyEvent={increaseCartQtyEvent} 
                                decreaseCartQtyEvent={decreaseCartQtyEvent}/>
                        </div>
                        <CustomTab key={`customTab-${index}`} data={product.tabData} defaultValue={'0'} />
                    </div>
                ))
            ) : (
                <p className="text-center">No Product Found</p>
            )}
        </>
    );
};

export default ProductDetail;
