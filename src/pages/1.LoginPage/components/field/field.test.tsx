import { render, screen } from '@testing-library/react';

import React from 'react';

import Field from './field';

import '@testing-library/jest-dom/extend-expect';

describe('Field component', () => {
  it('should render with correct input type and value', () => {
    const props = {
      id: 1,
      plshldr: 'Password',
      classname: 'input',
      page: 'login',
      type: 'password',
      value: 'test345',
      errorMessage: '',
      name: 'password',
      isValid: true,
    };

    render(<Field {...props} />);

    const inputElement = screen.getByPlaceholderText('Password');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute('type')).toBe('password');

    const valueElement = screen.getByDisplayValue('test345');
    expect(valueElement).toBeInTheDocument();
  });
});
