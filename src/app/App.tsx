import React, { useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import s from './App.module.scss';

import { startProductObject } from '../entities/product';
import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import CatalogPage from '../pages/3.CatalogPage/catalog';
import Drinks from '../pages/3.CatalogPage/categotiesRoutes/Drinks/drinks';
import Food from '../pages/3.CatalogPage/categotiesRoutes/Food/food';
import CatalogNavToPizzas from '../pages/3.CatalogPage/categotiesRoutes/Food/Pizzas/pizzas';
import CatalogNavToSauces from '../pages/3.CatalogPage/categotiesRoutes/Food/Sauces/sauces';
import CatalogPageLayout from '../pages/3.CatalogPage/Layout/catalogLayuot';
import DetailedPage from '../pages/4.DetailedPage/detailedPage';
import ProfilePage from '../pages/5.UserProfile/profile';
import BasketPage from '../pages/6.BasketPage/basket';
import ErrorPage from '../pages/7.ErrorPage/error';
import Layout from '../pages/globalComponents/layout/layout';
import { getProducts } from '../shared';
import { ProductDetailsType, ProductsType } from '../types/types';

const App = () => {
  const [productsData, setProducts] = useState<ProductsType>(startProductObject);
  const savedProductDetailesStringify = localStorage.getItem('ProductDetailes');
  const savedDetailes: ProductDetailsType | null = savedProductDetailesStringify
    ? JSON.parse(savedProductDetailesStringify)
    : null;
  const [productName, setProductName] = useState<string>(
    savedDetailes ? savedDetailes.productName : '',
  );
  const [productDescription, setProductDescription] = useState<string>(
    savedDetailes ? savedDetailes.productDescription : '',
  );
  const [productPrice, setProductPrice] = useState<string>(
    savedDetailes ? savedDetailes.productPrice : '',
  );
  const [productImg, setProductImg] = useState<string[]>(
    savedDetailes ? savedDetailes.productImg : [''],
  );
  const [productType, setProductType] = useState<'pizzas' | 'sauces' | 'drinks'>(
    savedDetailes ? savedDetailes.productType : 'pizzas',
  );
  const [productWeigth, setProductWeigth] = useState<string>(
    savedDetailes ? savedDetailes.productWeigth : '',
  );
  const [productPFCK, setProductPFCK] = useState<number[]>(
    savedDetailes ? savedDetailes.productPFCK : [0, 0, 0, 0],
  );
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
  const cathegory = localStorage.getItem('Cathegory');
  const [currentCathegory, setCurrentCathegory] = useState<string>(cathegory ? cathegory : 'All');

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
                <CatalogPageLayout
                  setProducts={setProducts}
                  currentCathegory={currentCathegory}
                  setCurrentCathegory={setCurrentCathegory}
                />
              }
            >
              <Route
                index
                element={
                  <CatalogPage products={productsData} setProductDetailes={setProductDetailes} />
                }
              />
              <Route
                path='/catalog/food'
                element={<Food products={productsData} setProductDetailes={setProductDetailes} />}
              />
              <Route
                path='/catalog/drinks'
                element={<Drinks products={productsData} setProductDetailes={setProductDetailes} />}
              />
              <Route
                path='/catalog/food/pizzas'
                element={
                  <CatalogNavToPizzas
                    products={productsData}
                    setProductDetailes={setProductDetailes}
                  />
                }
              />
              <Route
                path='/catalog/food/sauses'
                element={
                  <CatalogNavToSauces
                    products={productsData}
                    setProductDetailes={setProductDetailes}
                  />
                }
              />
            </Route>
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
