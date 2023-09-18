import { screen, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Inputs from './inputs';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../../shared/index', () => ({
  requestToCommerce: jest.fn(),
}));

describe('Inputs Component Tests', () => {
  const mockSetProducts = jest.fn();

  const sampleProps = {
    setProducts: mockSetProducts,
  };

  test('clicking on sort', () => {
    render(<Inputs {...sampleProps} />);
    const lowToHighPriceOption = screen.getByText('From low to high price');

    fireEvent.click(lowToHighPriceOption);

    expect(screen.getByText('Sort by')).not.toHaveClass('open');
  });

  test('typing in the input', () => {
    render(<Inputs {...sampleProps} />);

    const inputField = screen.getByPlaceholderText('Find');

    fireEvent.change(inputField, { target: { value: 'search query' } });
  });
});
//
