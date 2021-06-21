import React from 'react';
import Product from './Product/Product';

const ProductsList = ({ data }) => {
    const { items = [] } = data;
    const productsListEl = items.map(item => <Product key={item.id} {...item} /* showProductModal={showProductModal} */ />);
    return (
        <main className='main-products container-xl'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pt-5'>
                {productsListEl}
            </div>
        </main>

    );
}

export default ProductsList;