import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Food from './food';

import { CatalogFoodType } from '../../../../types/types';

jest.mock('../../../../shared', () => ({
  getCategoryID: jest.fn(() => 'someCategoryId'),
  requestToCommerceForRender: jest.fn(() => []),
}));

describe('Food', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodType = {
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
    const { container } = render(<Food {...props} />);
    expect(container).toBeInTheDocument();
  });
});
