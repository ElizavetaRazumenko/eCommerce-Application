import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CatalogNavigation from './navigation';

import { CatalogNavPropsType } from '../../../../types/types';

const mockCatalogNavProps: CatalogNavPropsType = {
  currentCathegory: 'All',
  setCurrentCathegory: () => {},
  setProducts: () => {},
};

test('renders catalog navigation links correctly', () => {
  render(
    <MemoryRouter initialEntries={['/catalog/food/pizzas']}>
      <CatalogNavigation {...mockCatalogNavProps} />
    </MemoryRouter>,
  );

  const pizzaLinks = screen.getAllByRole('link', { name: /pizzas/i });
  expect(pizzaLinks.length).toBe(2);
  expect(pizzaLinks[0]).toBeInTheDocument();
  expect(pizzaLinks[1]).toBeInTheDocument();
});
