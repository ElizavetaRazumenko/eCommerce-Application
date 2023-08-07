import React from 'react';

import Location from './components/Location';
import Question from './components/Questions';

import Logo from '../../globalComponents/header/components/Logo';

interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Footer: React.FC<FooterProps> = ({ className, style }) => {
  return (
    <footer className='footer' style={style}>
      <Logo />
      <Location />
      <Question />
    </footer>
  );
};
