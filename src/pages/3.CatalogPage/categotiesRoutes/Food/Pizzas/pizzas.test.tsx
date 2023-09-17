import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import React from 'react';

import CatalogNavToPizzas from './pizzas';

jest.mock('../../../../../shared', () => ({
  getCategoryID: jest.fn(() => Promise.resolve('categoryId')),
  requestToCommerceForRender: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavToPizzas', () => {
  it('renders without crashing', () => {
    const props = {
      products: [],
      setProducts: jest.fn(),
      setProductDetailes: {
        setProductName: jest.fn(),
        setProductDescription: jest.fn(),
        setProductPrice: jest.fn(),
        setProductImg: jest.fn(),
        setProductType: jest.fn(),
        setProductWeigth: jest.fn(),
        setProductPFCK: jest.fn(),
      },
    };
    const { container } = render(<CatalogNavToPizzas {...props} />);
    expect(container).toBeInTheDocument();
  });
});
