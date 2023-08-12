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
import Layout from '../pages/globalComponents/layout/layout';
import { stateTypeApp } from '../types/types';

const App = (props: stateTypeApp) => {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path='/login'
              element={
                <LoginPage
                  stateLoginPage={props.state.loginPage}
                  addInputValue={props.addInputValue}
                />
              }
            />
            <Route
              path='/register'
              element={
                <RegisterPage
                  stateRegisterPage={props.state.registerPage}
                  addInputValue={props.addInputValue}
                />
              }
            />
            <Route index element={<Main stateMain={props.state.mainPage} />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart' element={<BasketPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
