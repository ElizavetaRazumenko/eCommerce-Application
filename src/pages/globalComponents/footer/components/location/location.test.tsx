import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import Location from './location';

describe('Location component', () => {
  test('renders location addresses correctly', () => {
    render(<Location />);

    const address1 = screen.getByText('Rome, st. Via Tuscolana, 225');
    const address2 = screen.getByText('Rome, st. dei Chiclamini, 5');

    expect(address1).toBeInTheDocument();
    expect(address2).toBeInTheDocument();
  });

  test('contains correct links', () => {
    render(<Location />);

    const link1 = screen.getByRole('link', {
      name: 'Rome, st. Via Tuscolana, 225',
    });

    const link2 = screen.getByRole('link', {
      name: 'Rome, st. dei Chiclamini, 5',
    });

    expect(link1).toHaveAttribute(
      'href',
      'https://yandex.by/maps/10445/rome/search/Rome%2C%20st.%20Via%20Tuscolana%2C%20225/?ll=12.533407%2C41.869911&sll=27.555691%2C53.902735&sspn=0.471725%2C0.179023&z=14',
    );

    expect(link2).toHaveAttribute(
      'href',
      'https://yandex.by/maps/10445/rome/house/ZUsYcwFnS0IPQFprfXR5eXVkZA==/?ll=12.567278%2C41.888970&z=17',
    );
  });
});
