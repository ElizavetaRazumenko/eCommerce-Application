import React, { useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import s from './App.module.scss';

import { startProductObject } from '../entities/product';
import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import CatalogPage from '../pages/3.CatalogPage/catalog';
import DetailedPage from '../pages/4.DetailedPage/detailedPage';
import ProfilePage from '../pages/5.UserProfile/profile';
import BasketPage from '../pages/6.BasketPage/basket';
import ErrorPage from '../pages/7.ErrorPage/error';
import Layout from '../pages/globalComponents/layout/layout';
import { getProducts } from '../shared';
import { ProductsType } from '../types/types';

const App = () => {
  const [productsData, setProducts] = useState<ProductsType>(startProductObject);
  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [productImg, setProductImg] = useState<string[]>(['']);
  const [productType, setProductType] = useState<'pizzas' | 'sauces' | 'drinks'>('pizzas');
  const [productWeigth, setProductWeigth] = useState<string>('');
  const [productPFCK, setProductPFCK] = useState<number[]>([0, 0, 0, 0]);
  const setProductDetailes = {
    setProductName,
    setProductDescription,
    setProductPrice,
    setProductImg,
    setProductType,
    setProductWeigth,
    setProductPFCK,
  };
  const productDetailes = {
    productName,
    productDescription,
    productPrice,
    productImg,
    productType,
    productWeigth,
    productPFCK,
  };
  const products = async () => {
    await getProducts().then((data) => setProducts(data));
  };
  useEffect(() => {
    products();
  }, []);
  const [userState, setUserState] = useState<string>(
    localStorage.getItem('userState') === 'Logout' ? 'Logout' : 'Login',
  );
  const loginRedirection = () => {
    return userState === 'Logout' ? <Navigate to='/' /> : <LoginPage setUserState={setUserState} />;
  };
  const registratironRedirection = () => {
    return userState === 'Logout' ? (
      <Navigate to='/' />
    ) : (
      <RegisterPage setUserState={setUserState} />
    );
  };

  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Layout userState={userState} setUserState={setUserState} />}>
            <Route path='/login' element={loginRedirection()} />
            <Route path='/registration' element={registratironRedirection()} />
            <Route index element={<Main />} />
            <Route
              path='/catalog'
              element={
                <CatalogPage
                  products={productsData}
                  setProducts={setProducts}
                  setProductDetailes={setProductDetailes}
                />
              }
            />
            <Route path='/details' element={<DetailedPage productDetailes={productDetailes} />} />
            <Route path='/profile' element={<ProfilePage userState={userState} />} />
            <Route path='/cart' element={<BasketPage userState={userState} />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
