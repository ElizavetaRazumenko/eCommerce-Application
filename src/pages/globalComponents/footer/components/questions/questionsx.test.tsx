import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Question from './questions';

describe('Question component', () => {
  test('renders contact information', () => {
    render(<Question />);

    const emailLink = screen.getByRole('link', { name: /pizza_italiano@food.com/i });
    const contactLink = screen.getByRole('link', { name: /\+39 12 562 15 48/i });

    expect(emailLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    expect(emailLink).toHaveAttribute('href', 'mailto:pizza_italiano@food.com');
    expect(contactLink).toHaveAttribute('href', 'tel:+37539125621548');
  });
});
