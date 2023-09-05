import { render } from '@testing-library/react';

import CatalogPage from './catalog';

import { CatalogPropsType } from '../../types/types';

jest.mock('../../shared', () => ({
  getCategoryID: jest.fn(() => Promise.resolve('category-id')),
  requestToCommerceForRender: jest.fn(() => Promise.resolve([])),
}));

const mockProps: CatalogPropsType = {
  products: [],
  setProducts: jest.fn(),
};

describe('CatalogPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.removeItem('filter_params');
  });

  it('renders without errors', async () => {
    render(<CatalogPage {...mockProps} />);
  });
});
