import React from 'react';

import { render } from '../../../../tests/index';

import ProductDetails from './ProductDetails';

describe('Login', () => {
    test('Displays all information', () => {
        const { getByAltText, getByText } = render(<ProductDetails data={{ name: 'Watch', description: 'How To Protect Your Computer Very Useful Tips', image: 'someurl' }} />);
        expect(getByText('Watch')).toBeInTheDocument();
        expect(getByText('How To Protect Your Computer Very Useful Tips')).toBeInTheDocument();
        expect(getByAltText('Watch')).toBeInTheDocument();
    });
});
