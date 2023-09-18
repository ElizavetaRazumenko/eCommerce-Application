import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import CatalogNavLowCalorie from './lowCalorie';

import { CatalogFoodNamedType } from '../../../../../../types/types';

jest.mock('../../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavLowCalorie', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<CatalogNavLowCalorie {...props} />);
    expect(container).toBeInTheDocument();
  });
});
