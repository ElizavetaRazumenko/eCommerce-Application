import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';

import Button from './button';

test('renders button with correct content and link', () => {
  const props = {
    to: '/main',
    content: 'To main page',
  };

  render(
    <BrowserRouter>
      <Button {...props} />
    </BrowserRouter>,
  );
  const button = screen.getByText('To main page');
  expect(button).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { name: 'To main page' });
  expect(linkElement).toHaveAttribute('href', '/main');
});

export default Button;
