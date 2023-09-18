import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import CatalogPage from './catalog';

const mockProps = {
  products: [],
  setProducts: jest.fn(),
};

test('renders CatalogPage component', async () => {
  render(<CatalogPage {...mockProps} />);

  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();

  const pageTitle = screen.getByText('Sauces');
  expect(pageTitle).toBeInTheDocument();

  expect(mockProps.setProducts).not.toHaveBeenCalled();
});
