import React from 'react';

import Location from './components/location/location';
import Question from './components/questions/questions';

import s from './footer.module.css';

import { IFooterProps } from '../../../types/types';
import Logo from '../header/components/logo/Logo';

const Footer: React.FC<IFooterProps> = ({ style }) => {
  return (
    <footer className={s.footer} style={style}>
      <Logo />
      <Location />
      <Question />
    </footer>
  );
};

export default Footer;
