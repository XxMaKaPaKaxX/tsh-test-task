import React from 'react';

import { render } from '../../../tests/index';

import Modal from './Modal';

describe('Modal', () => {
    test('Modal have children', () => {
        const { getByTestId, getByText } = render(<Modal>
            <p>first child element</p>
            <p>second child element</p>
        </Modal>);
        expect(getByText('first child element')).toBeInTheDocument();
        expect(getByText('second child element')).toBeInTheDocument();
        expect(getByTestId('closing-button')).toBeInTheDocument();
    });

});