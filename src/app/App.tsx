import React from 'react';

import { Init } from '../pages/2.MainPage/index';
import Footer from '../pages/globalComponents/footer/footer';
import Header from '../pages/globalComponents/header/header';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Init />
      <Footer />
    </>
  );
}

export default App;
