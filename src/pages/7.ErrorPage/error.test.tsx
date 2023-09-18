import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import ErrorPage from './error';

test('renders error message and button', () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>,
  );
  const infoMessage = screen.getByText(/Something went wrong.../i);
  expect(infoMessage).toBeInTheDocument();
  const errorCode = screen.getByText(/404/i);
  expect(errorCode).toBeInTheDocument();
  const button = screen.getByText(/Go to the main page/i);
  expect(button).toBeInTheDocument();
});
