import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import Sauce from './souce';

const mockSauce = {
  name: 'Tomato Sauce',
  link: 'tomato-sauce.jpg',
};

test('renders Sauce component with sauce details', () => {
  render(<Sauce {...mockSauce} />);

  const sauceNameElement = screen.getByText('Tomato Sauce');
  expect(sauceNameElement).toBeTruthy();

  const sauceImageElement = screen.getByAltText('souce');
  expect(sauceImageElement).toBeTruthy();
  expect(sauceImageElement).toHaveAttribute('src', 'tomato-sauce.jpg');

  const saucePriceElement = screen.getByText('0,60$');
  expect(saucePriceElement).toBeTruthy();
});
