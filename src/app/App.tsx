import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import s from './App.module.css';

import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import Footer from '../pages/globalComponents/footer/footer';
import Header from '../pages/globalComponents/header/header';

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Header />
        <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/' Component={Main} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
