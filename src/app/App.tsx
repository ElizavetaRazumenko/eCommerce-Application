import React, { useEffect, useState } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import s from './App.module.scss';

import { startProductObject } from '../entities/product';
import LoginPage from '../pages/1.LoginPage/login/login';
import RegisterPage from '../pages/1.LoginPage/register/register';
import Main from '../pages/2.MainPage/main';
import CatalogPage from '../pages/3.CatalogPage/catalog';
import CatalogNavCarbo from '../pages/3.CatalogPage/categotiesRoutes/Drinks/components/carb';
import CatalogNavNonCarbo from '../pages/3.CatalogPage/categotiesRoutes/Drinks/components/nonCarb';
import Drinks from '../pages/3.CatalogPage/categotiesRoutes/Drinks/drinks';
import Food from '../pages/3.CatalogPage/categotiesRoutes/Food/food';
import CatalogNavLowCalorie from '../pages/3.CatalogPage/categotiesRoutes/Food/Pizzas/component/lowCalorie';
import CatalogNavNonSpicy from '../pages/3.CatalogPage/categotiesRoutes/Food/Pizzas/component/non_spicy';
import CatalogNavVegetarian from '../pages/3.CatalogPage/categotiesRoutes/Food/Pizzas/component/vegetarian';
import CatalogNavToPizzas from '../pages/3.CatalogPage/categotiesRoutes/Food/Pizzas/pizzas';
import CatalogNavSauceLowCalorie from '../pages/3.CatalogPage/categotiesRoutes/Food/Sauces/components/sauceLowCalorie';
import CatalogNavToSauces from '../pages/3.CatalogPage/categotiesRoutes/Food/Sauces/sauces';
import CatalogPageLayout from '../pages/3.CatalogPage/Layout/catalogLayuot';
import DetailedPage from '../pages/4.DetailedPage/detailedPage';
import ProfilePage from '../pages/5.UserProfile/profile';
import BasketPage from '../pages/6.BasketPage/basket';
import ErrorPage from '../pages/7.ErrorPage/error';
import Layout from '../pages/globalComponents/layout/layout';
import { getProducts } from '../shared';
import { ProductsType } from '../types/types';

const App = () => {
  const [productsData, setProducts] = useState<ProductsType>(startProductObject);
  const products = async () => {
    const productsCollection = await getProducts();
    console.log('а теперь в App');
    if (productsCollection) {
      setProducts(productsCollection);
    }
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
                element={<CatalogPage products={productsData} setProducts={setProducts} />}
              />
              <Route
                path='/catalog/food'
                element={<Food products={productsData} setProducts={setProducts} />}
              />
              <Route
                path='/catalog/food/pizzas'
                element={
                  <main>
                    <CatalogNavToPizzas products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/food/pizzas/low-calorie'
                element={
                  <main>
                    <CatalogNavLowCalorie products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/food/pizzas/vegetarian'
                element={
                  <main>
                    <CatalogNavVegetarian products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/food/pizzas/non-spicy'
                element={
                  <main>
                    <CatalogNavNonSpicy products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/food/sauses'
                element={
                  <main>
                    <CatalogNavToSauces products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/food/sauses/low-calorie'
                element={
                  <main>
                    <CatalogNavSauceLowCalorie products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/drinks'
                element={
                  <main>
                    <Drinks products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/drinks/non-carbonated'
                element={
                  <main>
                    <CatalogNavNonCarbo products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
              <Route
                path='/catalog/drinks/carbonated'
                element={
                  <main>
                    <CatalogNavCarbo products={productsData} setProducts={setProducts} />
                  </main>
                }
              />
            </Route>
            <Route path='details/:key' element={<DetailedPage />} />
            <Route path='details/:key/:size' element={<DetailedPage />} />
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
