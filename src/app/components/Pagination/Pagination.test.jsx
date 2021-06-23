import React from 'react';

import { render, screen } from '../../../tests/index';

import Pagination from './Pagination';

describe('Pagination', () => {
    test('Pagination have first and last navigation', () => {
        const { getByText } = render(<Pagination currentPage={1} totalPages={60} />);
        expect(getByText('First')).toBeInTheDocument();
        expect(getByText('Last')).toBeInTheDocument();
    });

    test('Pagination elements if totalPages > 6 curent page 1', () => {
        const { getByTestId } = render(<Pagination currentPage={1} totalPages={60} />);
        const pagination = getByTestId('pagination');
        expect(pagination).toBeInTheDocument();
        const childrenElements = [...pagination.children];
        expect(childrenElements.length).toBe(9);  // First + 3 el + ... + 3el + Last
        expect(childrenElements[0].textContent).toBe('First');
        expect(childrenElements[1].textContent).toBe('1');
        expect(childrenElements[1].className).toMatch(/pagination__item--current-page/);
        expect(childrenElements[2].textContent).toBe('2');
        expect(childrenElements[4].textContent).toBe('...');
        expect(childrenElements[7].textContent).toBe('60');
        expect(childrenElements[8].textContent).toBe('Last');
    });

    test('Pagination elements if totalPages > 6 curent page 2', () => {
        const { getByTestId } = render(<Pagination currentPage={2} totalPages={60} />);
        const pagination = getByTestId('pagination');
        const childrenElements = [...pagination.children];
        expect(childrenElements[1].textContent).toBe('1');
        expect(childrenElements[2].textContent).toBe('2');
        expect(childrenElements[2].className).toMatch(/pagination__item--current-page/);
        expect(childrenElements[4].textContent).toBe('...');
        expect(childrenElements[7].textContent).toBe('60');
    });

    test('Pagination elements if totalPages > 6 curent page 3', () => {
        const { getByTestId } = render(<Pagination currentPage={3} totalPages={60} />);
        const pagination = getByTestId('pagination');
        const childrenElements = [...pagination.children];
        expect(childrenElements[1].textContent).toBe('2');
        expect(childrenElements[2].textContent).toBe('3');
        expect(childrenElements[2].className).toMatch(/pagination__item--current-page/);
        expect(childrenElements[3].textContent).toBe('4');
        expect(childrenElements[4].textContent).toBe('...');
        expect(childrenElements[7].textContent).toBe('60');
    });


    test('Pagination elements if totalPages <= 6 curent page 3', () => {
        const { getByTestId } = render(<Pagination currentPage={3} totalPages={5} />);
        const pagination = getByTestId('pagination');
        const childrenElements = [...pagination.children];
        expect(childrenElements.length).toBe(7); // First + 5 el + Last
        expect(childrenElements[0].textContent).toBe('First');
        expect(childrenElements[1].textContent).toBe('1');
        expect(childrenElements[2].textContent).toBe('2');
        expect(childrenElements[3].textContent).toBe('3');
        expect(childrenElements[3].className).toMatch(/pagination__item--current-page/);
        expect(childrenElements[4].textContent).toBe('4');
        expect(childrenElements[5].textContent).toBe('5');
        expect(childrenElements[6].textContent).toBe('Last');
    });
});