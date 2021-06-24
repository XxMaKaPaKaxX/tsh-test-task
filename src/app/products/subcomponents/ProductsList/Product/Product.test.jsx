import React from 'react';

import { getAllByTestId, render } from '../../../../../tests/index';

import Product from './Product';

describe('Product', () => {
    test('Displays information if promo, active = true', () => {
        const { getAllByTestId, getByText, getByAltText, getByRole } = render(
            <Product
                active={true}
                description='Dignissimos amet autem.'
                image='imgUrl'
                name='Gorgeous Soft Hat'
                promo={true}
                rating={3}
            />
        );
        expect(getByAltText('Gorgeous Soft Hat')).toBeInTheDocument();
        expect(getAllByTestId('active-star').length).toBe(3);

        expect(getByText('Gorgeous Soft Hat')).toBeInTheDocument();
        expect(getByText('Gorgeous Soft Hat').className).toBe('card-title');

        expect(getByText('Dignissimos amet autem.')).toBeInTheDocument();
        expect(getByText('Dignissimos amet autem.').className).toBe('card-text');

        expect(getByText(/Promo/i)).toBeInTheDocument();

        expect(getByRole('button').textContent).toMatch(/Show details/i);
    });

    test('Label is not displayed if promo = false, active = true', () => {
        const { queryByText } = render(
            <Product
                active={true}
                description='Dignissimos amet autem.'
                image='imgUrl'
                name='Gorgeous Soft Hat'
                promo={false}
                rating={3}
            />
        );

        expect(queryByText(/Promo/i)).not.toBeInTheDocument();
    });

    test('Displays information if active = false', () => {
        const { queryByText, getByRole } = render(
            <Product
                active={false}
                description='Dignissimos amet autem.'
                image='imgUrl'
                name='Gorgeous Soft Hat'
                promo={true}
                rating={3}
            />
        );

        expect(queryByText(/Promo/i)).not.toBeInTheDocument();
        expect(getByRole('img').className).toMatch(/card-img-top--inactive/);
        expect(getByRole('button').className).toMatch(/disabled-btn/);
    });
});
