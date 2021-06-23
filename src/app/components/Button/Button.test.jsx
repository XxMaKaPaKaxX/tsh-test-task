import React from 'react';

import { render, fireEvent } from '../../../tests/index';

import Button from './Button';

describe('Button', () => {
    test('Button text', () => {
        const { getByText } = render(<Button text='custon button' />);
        expect(getByText('custon button')).toBeInTheDocument();
    });

    test('Button without text', () => {
        const { getByText } = render(<Button />);
        expect(getByText('button')).toBeInTheDocument();
    });

    test('Button class name if disabled', () => {
        const { getByText } = render(<Button text='btn' disabled />);
        const btn = getByText('btn');
        expect(btn.className).toBe('disabled-btn');
    });

    test('Button class name if outline', () => {
        const { getByText } = render(<Button text='btn' outline />);
        const btn = getByText('btn');
        expect(btn.className).toBe('custom-btn custom-btn--outline');

    });

    test('Button class name if outline', () => {
        const { getByText } = render(<Button text='btn' outline />);
        const btn = getByText('btn');
        expect(btn.className).toBe('custom-btn custom-btn--outline');
    });

    test('Button click function action', () => {
        let i = 0;
        const functionOnClick = () => {
            i += 1;
        };
        const { getByText } = render(<Button text='btn' handleOnClick={functionOnClick} />);
        const btn = getByText('btn');
        fireEvent.click(btn);
        expect(i).toBe(1);
        fireEvent.click(btn);
        expect(i).toBe(2);
    });
});