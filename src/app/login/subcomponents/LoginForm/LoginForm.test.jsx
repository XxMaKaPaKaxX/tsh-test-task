import React from 'react';

import { findByTestId, findByText, fireEvent, getAllByTestId, render } from '../../../../tests/index';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
    test('Displays all information', async () => {
        const { getByRole, getByText, getByLabelText } = render(<LoginForm />);
        expect(getByText('Login')).toBeInTheDocument();
        expect(getByText('Forgot password?')).toBeInTheDocument();
        expect(getByRole('button')).toHaveTextContent('Log in');
        expect(getByLabelText('Username')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
    });

    test('type text in inputs', async () => {
        const { getByPlaceholderText } = render(<LoginForm />);
        const usernameInput = getByPlaceholderText('Enter username');
        const passwordInput = getByPlaceholderText('Enter password');

        fireEvent.change(usernameInput, { target: { value: 'SuperUserName' } });
        expect(usernameInput.value).toBe('SuperUserName');

        fireEvent.change(passwordInput, { target: { value: 'qwerty' } });
        expect(passwordInput.value).toBe('qwerty');
    });
});
