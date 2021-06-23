import React from 'react';

import { render } from '../../../tests/index';

import FormInput from './FormInput';

describe('FormInput', () => {
    test('FormInput label', () => {
        const { getByLabelText } = render(<FormInput labelValue='name' name='name' />);
        expect(getByLabelText('name')).toBeInTheDocument();
    });
    test('FormInput placeholder', () => {
        const { getByPlaceholderText } = render(<FormInput labelValue='name' name='name' />);
        expect(getByPlaceholderText('Enter name')).toBeInTheDocument();
    });
    test('FormInput value with prop value', () => {
        const { getByLabelText } = render(<FormInput labelValue='name' name='name' value='MegaUser' />);
        expect(getByLabelText('name').value).toBe('MegaUser');
    });
});