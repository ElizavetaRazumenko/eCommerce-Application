import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import BasketPage from './basket';

test('renders welcome message and anonymous session', () => {
  render(<BasketPage userState='Login' />);
  const welcomeMessage = screen.getByText(/Welcome to the Cart Page!/i);
  expect(welcomeMessage).toBeInTheDocument();

  const anonymousSession = screen.getByText(/Anonymous session/i);
  expect(anonymousSession).toBeInTheDocument();
});

test('does not render anonymous session for non-Login user', () => {
  render(<BasketPage userState='userState' />);
  const welcomeMessage = screen.getByText(/Welcome to the Cart Page!/i);
  expect(welcomeMessage).toBeInTheDocument();
  const anonymousSession = screen.getByText(/Anonymous session/i);
  expect(anonymousSession).toHaveClass('hidden');
});
