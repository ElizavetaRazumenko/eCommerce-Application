import { render } from '@testing-library/react';

import CatalogPage from './catalog';

import { CatalogPropsType, SetProductDetailsType } from '../../types/types';

jest.mock('../../shared', () => ({
  getCategoryID: jest.fn(() => Promise.resolve('category-id')),
  requestToCommerceForRender: jest.fn(() => Promise.resolve([])),
}));

// Создайте моки, которые соответствуют ожидаемому типу SetProductDetailsType
const mockSetProductDetails: SetProductDetailsType = {
  setProductName: jest.fn(),
  setProductDescription: jest.fn(),
  setProductPrice: jest.fn(),
  setProductImg: jest.fn(),
  setProductType: jest.fn(),
  setProductWeigth: jest.fn(),
  setProductPFCK: jest.fn(),
};

const mockProps: CatalogPropsType = {
  products: [],
  setProducts: jest.fn(),
  setProductDetailes: mockSetProductDetails,
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
