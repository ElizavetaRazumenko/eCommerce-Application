import { render, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import PizzaParams from './pizzaParams';

const mockImagePath = 'mocked-image-path.png';

describe('PizzaParams Component', () => {
  const mockProps = {
    size: 'L',
    length: '20cm',
    price: '$20',
  };

  it('renders the component with correct props', () => {
    render(<PizzaParams {...mockProps} />);

    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('20cm')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();

    const cartImage = screen.getByAltText('shopping cart');
    expect(cartImage).toBeInTheDocument();
    expect(cartImage).toHaveAttribute('src', mockImagePath);

    const titleElement = screen.getByText('L');
    expect(titleElement).toBeInTheDocument();

    const priceWrapper = screen.getByText('$20');
    expect(priceWrapper).toBeInTheDocument();
  });
});
