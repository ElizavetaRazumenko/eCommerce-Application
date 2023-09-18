import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import AboutUsPage from './aboutUs';

test('renders AboutUsPage component correctly', () => {
  render(<AboutUsPage />);

  const headerElement = screen.getByText('Welcome everyone to the About us page!');
  expect(headerElement).toBeInTheDocument();
});
