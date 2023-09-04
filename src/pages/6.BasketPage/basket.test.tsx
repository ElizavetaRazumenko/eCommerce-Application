import { render, screen } from '@testing-library/react';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import BasketPage from './basket';

test('renders welcome message', () => {
  render(<BasketPage userState='Login' />);
  const welcomeMessage = screen.getByText(/Welcome to the Cart Page!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
