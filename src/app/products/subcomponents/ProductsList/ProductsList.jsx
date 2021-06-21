import React from 'react';
import Pagination from '../../../components/Pagination/Pagination';
import Product from './Product/Product';

const ProductsList = ({ changePage, data }) => {

    const { items = [], meta } = data;
    const { currentPage, totalPages } = meta;
    const productsListEl = items.map(item => <Product key={item.id} {...item} /* showProductModal={showProductModal} */ />);
    return (
        <main className='main-products container-xl'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pt-5'>
                {productsListEl}
            </div>
            <Pagination changePage={changePage} currentPage={currentPage} totalPages={totalPages} />
        </main>

    );
}

export default ProductsList;