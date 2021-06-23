import React from 'react';

import { render } from '../../../tests/index';

import EmptyCard from './EmptyCard';

describe('EmptyCard', () => {
    test('EmptyCard has essential elements', () => {
        const { getByTestId, getByText } = render(<EmptyCard />);
        expect(getByTestId('empty-card-icon')).toBeInTheDocument();
        expect(getByText('Ooops… It’s empty here')).toBeInTheDocument();
        expect(getByText('There are no products on the list')).toBeInTheDocument();
    });
});