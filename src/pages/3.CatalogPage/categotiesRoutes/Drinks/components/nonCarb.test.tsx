import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import CatalogNavNonCarbo from './nonCarb';

import { CatalogFoodNamedType } from '../../../../../types/types';

jest.mock('../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavNonCarbo', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<CatalogNavNonCarbo {...props} />);
    expect(container).toBeInTheDocument();
  });
});
