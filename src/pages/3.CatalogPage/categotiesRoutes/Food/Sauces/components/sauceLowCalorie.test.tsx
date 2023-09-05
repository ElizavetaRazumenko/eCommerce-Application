import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import CatalogNavSauceLowCalorie from './sauceLowCalorie';

import { CatalogFoodNamedType } from '../../../../../../types/types';

jest.mock('../../../../../../shared', () => ({
  requestToCommerce: jest.fn(() => Promise.resolve([])),
}));

describe('CatalogNavSauceLowCalorie', () => {
  it('renders without crashing', () => {
    const props: CatalogFoodNamedType = {
      products: [],
      setProducts: jest.fn(),
    };
    const { container } = render(<CatalogNavSauceLowCalorie {...props} />);
    expect(container).toBeInTheDocument();
  });
});
