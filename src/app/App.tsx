import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import s from './App.module.scss';

import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import CatalogPage from '../pages/3.CatalogPage/catalog';
import ProfilePage from '../pages/5.UserProfile/profile';
import BasketPage from '../pages/6.BasketPage/basket';
import ErrorPage from '../pages/7.ErrorPage/error';
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
          <Route path='/catalog' Component={CatalogPage} />
          <Route path='/profile' Component={ProfilePage} />
          <Route path='/cart' Component={BasketPage} />
          <Route path='*' Component={ErrorPage} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
