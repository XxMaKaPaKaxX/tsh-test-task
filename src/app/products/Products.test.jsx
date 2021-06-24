import React from 'react';

import { fireEvent, render, screen } from '../../tests';
import { act } from "react-dom/test-utils";

import { Products } from './Products';

import { productsData, productDataSimple, productsDataZero } from '../../tests/dataForTesting.js';

describe('Products', () => {
  test('Displays header', () => {
    const { getByText, getByTestId, getByRole } = render(<Products />);
    expect(getByTestId('products-header')).toBeInTheDocument();
  });

  test('Displays EmptyCard component if get 0 products (dataZero)', async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(productsDataZero)
      })
    );

    await act(async () => {
      render(<Products />);
    });
    expect(screen.getByTestId('empty-card')).toBeInTheDocument()
  });


  test('Displays ProductsList if there some products (dataZero)', async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(productsData)
      })
    );

    await act(async () => {
      render(<Products />);
    });
    expect(screen.getByTestId('productsList')).toBeInTheDocument()
  });


  test('Activate Modal', async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(productDataSimple)
      })
    );
    await act(async () => {
      render(<Products />);
    });
    expect(screen.getByTestId('productsList')).toBeInTheDocument();
    const productBtn = screen.getByText('Show details');
    expect(productBtn).toBeInTheDocument();
    fireEvent.click(productBtn);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument()
    const modalClosinBtn = screen.getByTestId('closing-button');
    fireEvent.click(modalClosinBtn);
    expect(modal).not.toBeInTheDocument;
  });
});
