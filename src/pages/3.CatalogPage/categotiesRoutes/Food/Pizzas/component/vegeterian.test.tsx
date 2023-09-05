import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import CatalogNavVegetarian from './vegetarian';

import { CatalogFoodNamedType } from '../../../../../../types/types';

jest.mock('../../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavVegetarian', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<CatalogNavVegetarian {...props} />);
    expect(container).toBeInTheDocument();
  });
});
