import React from 'react';

import { render } from '../../../../tests/index';
import { productsData } from '../../../../tests/dataForTesting';

import ProductsList from './ProductsList';



describe('ProductsList', () => {
    test('Displays products and pagination', () => {
        const { getByTestId } = render(<ProductsList data={productsData} />);
        expect(getByTestId('productsList')).toBeInTheDocument();
        expect(getByTestId('pagination')).toBeInTheDocument();
    });

    test('Displays amount product per page - set limit per page = 8, meta totalItems = 500', () => {
        const { getByTestId } = render(<ProductsList data={productsData} />);
        expect(getByTestId('productsList').children.length).toBe(8);
    });
});
