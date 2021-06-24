import React from 'react';

import { render } from '../../tests';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByRole, getByText, getByTestId } = render(<Login />);
    expect(getByText('join.tsh.io')).toBeInTheDocument();
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByRole('complementary')).toBeInTheDocument();
    expect(getByTestId('login-form')).toBeInTheDocument();
  });
});
