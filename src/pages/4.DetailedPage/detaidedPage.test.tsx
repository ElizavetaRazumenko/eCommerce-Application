import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import DetailedPage from './detailedPage';

test('renders title of Detailed Page', () => {
  render(<DetailedPage />);
  const welcomeMessage = screen.getByText(/ Detailed Page!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
