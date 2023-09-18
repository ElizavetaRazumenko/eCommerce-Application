import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SectionWelcome from './welcome';

describe('SectionWelcome Component', () => {
  it('renders the component with correct content', () => {
    render(
      <BrowserRouter>
        <SectionWelcome />
      </BrowserRouter>,
    );
    const titleElement = screen.getByText('Welcome to the Italian pizzeria!');
    expect(titleElement).toBeInTheDocument();
    const contentElement = screen.getByText(
      'We have been preparing the best pizza for you for many years. Our chefs use the finest ingredients and the freshest vegetables for cooking. But the most important ingredient is that we make pizza with love!',
    );
    expect(contentElement).toBeInTheDocument();
  });
});
