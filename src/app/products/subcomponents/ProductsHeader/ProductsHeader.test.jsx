import React from 'react';

import { render } from '../../../../tests/index';

import ProductsHeader from './ProductsHeader';

describe('ProductsHeader', () => {
    test('Displays all information', () => {
        const { getByLabelText, getByText, getByPlaceholderText, getByTestId } = render(<ProductsHeader isActiveRequered={true} isPromoRequered={true} />);
        expect(getByText('join.tsh.io')).toBeInTheDocument();
        expect(getByLabelText('Active')).toBeInTheDocument();
        expect(getByLabelText('Promo')).toBeInTheDocument();
        expect(getByPlaceholderText('Search')).toBeInTheDocument();
        expect(getByTestId('user-infobar')).toBeInTheDocument();
    });
});
