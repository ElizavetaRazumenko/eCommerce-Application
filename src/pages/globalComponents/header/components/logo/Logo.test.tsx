import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { MemoryRouter } from 'react-router-dom';

import Logo from './Logo';

const isSubtitleText = (content: string, element: Element | null) => {
  if (!element) {
    return false;
  }
  const hasIncludedWord = content.split(' ').every((word) => element.textContent?.includes(word));
  const isParsley = element.classList.contains('parsley');
  return hasIncludedWord && isParsley;
};

describe('Logo component', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    const titleElement = screen.getByText('PIZZA ITALIANO');
    const parsleyLogo = screen.getByAltText('logo parsley');
    const souseLogo = screen.getByAltText('logo souse');
    const subtitleElement = screen.getByText(isSubtitleText);

    expect(titleElement).toBeInTheDocument();
    expect(parsleyLogo).toBeInTheDocument();
    expect(souseLogo).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
