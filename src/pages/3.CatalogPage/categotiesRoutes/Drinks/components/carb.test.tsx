import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import CatalogNavCarbo from './carb';

import { CatalogFoodNamedType } from '../../../../../types/types';

jest.mock('../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavCarbo', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<CatalogNavCarbo {...props} />);
    expect(container).toBeInTheDocument();
  });
});
