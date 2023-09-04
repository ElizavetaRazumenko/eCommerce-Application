import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router-dom';

import Nav from './Nav';

describe('Nav component', () => {
  test('renders correctly', () => {
    const mockProps = {
      userState: 'Login',
      setUserState: jest.fn(),
    };

    render(
      <MemoryRouter>
        <Nav {...mockProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Login/Register' })).toBeInTheDocument();
  });
});
