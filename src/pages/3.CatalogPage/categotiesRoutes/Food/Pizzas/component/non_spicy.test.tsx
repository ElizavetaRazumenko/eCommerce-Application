import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import React from 'react';

import CatalogNavNonSpicy from './non_spicy';

import { CatalogFoodNamedType } from '../../../../../../types/types';

jest.mock('../../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavNonSpicy', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
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
    const { container } = render(<CatalogNavNonSpicy {...props} />);
    expect(container).toBeInTheDocument();
  });
});
