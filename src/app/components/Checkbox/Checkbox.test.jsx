import React from 'react';

import { render, screen } from '../../../tests/index';

import CheckBox from './Checkbox';

describe('CheckBox', () => {
    test('CheckBox label text', () => {
        const { getByText } = render(<CheckBox id='promoCheckbox' labelName='Promo' />);
        expect(getByText('Promo')).toBeInTheDocument();
    });

    test('CheckBox id', () => {
        render(<CheckBox id='promoCheckbox' labelName='Promo' />);
        const input = screen.getByLabelText('Promo');
        expect(input.id).toBe('promoCheckbox');
    });

    test('CheckBox is default checked false', () => {
        render(<CheckBox id='promoCheckbox' labelName='Promo' />);
        const input = screen.getByLabelText('Promo');
        expect(input.checked).toBeFalsy();
    });

    test('CheckBox whith prop isChecked is checked', () => {
        render(<CheckBox id='promoCheckbox' labelName='Promo' isChecked={true} />);
        const input = screen.getByLabelText('Promo');
        expect(input.checked).toBeTruthy();
    });
});