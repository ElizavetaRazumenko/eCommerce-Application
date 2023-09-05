import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import Location from './location';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('Location component renders without errors', () => {
  render(
    <Location
      defaultSetting={{
        defaultBilling: '',
        setdDefaultBilling: jest.fn(),
        defaultShipping: '',
        setdDefaultShipping: jest.fn(),
      }}
    />,
  );
  const locationSelect = screen.getByText('Select address');
  expect(locationSelect).toBeInTheDocument();
});

test('Toggle location on click', () => {
  render(
    <Location
      defaultSetting={{
        defaultBilling: '',
        setdDefaultBilling: jest.fn(),
        defaultShipping: '',
        setdDefaultShipping: jest.fn(),
      }}
    />,
  );
  const locationSelect = screen.getByText('Select address');
  fireEvent.click(locationSelect);
  const locationWrapper = screen.getByText('Billing address');
  expect(locationWrapper).toBeInTheDocument();
});
