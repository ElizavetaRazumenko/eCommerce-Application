import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RegisterPage from './register';

const mockSetUserState = jest.fn();

test('calls setUserState', () => {
  render(
    <MemoryRouter>
      <RegisterPage setUserState={mockSetUserState} />
    </MemoryRouter>,
  );
});
