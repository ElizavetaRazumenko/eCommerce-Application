import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Drinks from './drinks';

import { CatalogDrinksType } from '../../../../types/types';

jest.mock('../../../../shared', () => ({
  getCategoryID: jest.fn(() => 'someCategoryId'),
  requestToCommerceForRender: jest.fn(() => []),
}));

describe('Drinks', () => {
  it('renders without crashing', () => {
    const props: CatalogDrinksType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<Drinks {...props} />);
    expect(container).toBeInTheDocument();
  });
});
