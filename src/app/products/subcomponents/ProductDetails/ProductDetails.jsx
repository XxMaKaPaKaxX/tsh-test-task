import React from 'react';
import './ProductDetails.scss';

const ProductDetails = ({ data }) => {
    const { image, description, name } = data;
    return (
        <div className='product-details'>
            <div className='product-details__container'>
                <img className='product-details__img' src={image} alt={name} />
            </div>
            <h3 className='product-details__title m-3'>{name}</h3>
            <p className='product-details__description m-3'>{description}</p>
        </div>
    );
}

export default ProductDetails;