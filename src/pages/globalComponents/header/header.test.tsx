import { render, screen } from '@testing-library/react';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import Header from './header';

test('renders header with logo and navigation', () => {
  const userState = 'userState';
  const setUserState = jest.fn();
  render(
    <MemoryRouter>
      <Header userState={userState} setUserState={setUserState} />
    </MemoryRouter>,
  );
});
