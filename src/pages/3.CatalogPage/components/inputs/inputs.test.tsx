// import { render, screen, fireEvent } from '@testing-library/react';

// import React from 'react';

// import Inputs from './inputs';

// import '@testing-library/jest-dom/extend-expect';

// jest.mock('../../../../shared/index', () => ({
//   requestToCommerce: jest.fn(),
// }));

// const mockSetProducts = jest.fn();

// const sampleProps = {
//   setProducts: mockSetProducts,
// };

// test('renders Inputs component', () => {
//   render(<Inputs {...sampleProps} />);

//   // Проверяем, что компонент отрисовывается с начальным состоянием
//   expect(screen.getByText('Sort by')).toBeInTheDocument();
//   expect(screen.getByText('Filter by')).toBeInTheDocument();
//   expect(screen.getByPlaceholderText('Find')).toBeInTheDocument();
// });

// test('clicking on sort', async () => {
//   render(<Inputs {...sampleProps} />);

//   const lowToHighPriceOption = screen.getByText('From low to high price');

//   fireEvent.click(lowToHighPriceOption);
//   expect(mockSetProducts).toHaveBeenCalled();
//   expect(screen.getByText('From low to high price')).toHaveClass('selected');
//   expect(screen.getByText('Sort by')).not.toHaveClass('open');

// });

// test('typing in the input', async () => {
//   render(<Inputs {...sampleProps} />);

//   const inputField = screen.getByPlaceholderText('Find');

//   fireEvent.change(inputField, { target: { value: 'search query' } });
//   expect(mockSetProducts).toHaveBeenCalled();
//   expect(screen.getByPlaceholderText('Find')).toHaveValue('search query');

// });

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import Inputs from './inputs';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../../shared/index', () => ({
  requestToCommerce: jest.fn(),
}));

const mockSetProducts = jest.fn();

const sampleProps = {
  setProducts: mockSetProducts,
};

test('clicking on sort', () => {
  render(<Inputs {...sampleProps} />);

  const lowToHighPriceOption = screen.getByText('From low to high price');

  fireEvent.click(lowToHighPriceOption);

  expect(mockSetProducts).toHaveBeenCalled();
  expect(screen.getByText('From low to high price')).toHaveClass('selected');
  expect(screen.getByText('Sort by')).not.toHaveClass('open');
});

test('typing in the input', () => {
  render(<Inputs {...sampleProps} />);

  const inputField = screen.getByPlaceholderText('Find');

  fireEvent.change(inputField, { target: { value: 'search query' } });

  expect(mockSetProducts).toHaveBeenCalled();
  expect(screen.getByPlaceholderText('Find')).toHaveValue('search query');
});
