import { render, screen } from '@testing-library/react';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import Toggler from './toggler';

test('renders Toggler with active link', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <Toggler />
    </MemoryRouter>,
  );

  const loginNavLink = screen.getByText('Login');
  const registerNavLink = screen.getByText('Register');

  expect(loginNavLink.classList.contains('active_link')).toBe(true);
  expect(registerNavLink.classList.contains('active_link')).toBe(false);
});

test('renders Toggler with active link for Register', () => {
  render(
    <MemoryRouter initialEntries={['/registration']}>
      <Toggler />
    </MemoryRouter>,
  );

  const loginNavLink = screen.getByText('Login');
  const registerNavLink = screen.getByText('Register');

  expect(loginNavLink.classList.contains('active_link')).toBe(false);
  expect(registerNavLink.classList.contains('active_link')).toBe(true);
});
