import React from 'react';

import s from './App.module.css';

import Main from '../pages/2.MainPage/main';
import Footer from '../pages/globalComponents/footer/footer';
import Header from '../pages/globalComponents/header/header';

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
