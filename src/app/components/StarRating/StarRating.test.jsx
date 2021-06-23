import React from 'react';

import { render } from '../../../tests/index';

import StarRating from './StarRating';

describe('StarRating', () => {

    test('StarRating has necessary amount stars', () => {
        const { getByTestId } = render(<StarRating maxStars={7} productRating={5} />);
        const starRating = getByTestId('star-rating');
        expect(starRating).toBeInTheDocument();
        expect(starRating.children.length).toBe(7);
    });

    test('StarRating has necessary amount stars', () => {
        const { getAllByTestId } = render(<StarRating maxStars={5} productRating={3} />);
        const activeStars = getAllByTestId('active-star');
        expect(activeStars.length).toBe(3);
    });
});