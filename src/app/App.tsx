import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import s from './App.module.scss';

import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import CatalogPage from '../pages/3.CatalogPage/catalog';
import DetailedPage from '../pages/4.DetailedPage/detailedPage';
import ProfilePage from '../pages/5.UserProfile/profile';
import BasketPage from '../pages/6.BasketPage/basket';
import ErrorPage from '../pages/7.ErrorPage/error';
import Layout from '../pages/globalComponents/layout/layout';
import initialState from '../state/state';

const App = () => {
  const [state, setState] = React.useState(initialState);
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/login' element={<LoginPage state={state} setState={setState} />} />
            <Route path='/register' element={<RegisterPage state={state} setState={setState} />} />
            <Route index element={<Main />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/details' element={<DetailedPage />} />
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
