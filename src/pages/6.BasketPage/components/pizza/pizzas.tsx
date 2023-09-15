import { Cart, DiscountedPrice, LineItem } from '@commercetools/platform-sdk';
import { useState } from 'react';

import PizzaItem from './components/pizzaItem';

import { keysPizza } from '../../../../entities/product';

const Pizza = () => {
  const cart = JSON.parse(localStorage.getItem('Cart')!) as Cart;
  const cartItems = cart.lineItems;

  const setSize = (sku: string) => {
    return `${sku.slice(-1)}-size`;
  };
  const getPrice = (value: number) => {
    return `${(value / 100).toFixed(2)}$`;
  };
  const defineDiskountPrice = (params: DiscountedPrice | undefined) => {
    if (params) {
      return `${(params!.value.centAmount / 100).toFixed(2)}$`;
    } else return '';
  };

  const isDiskountPrice = (params: DiscountedPrice | undefined) => {
    return params ? true : false;
  };
  const pizzaItems = cartItems.filter((el) => keysPizza.includes(el.productKey!));
  return (
    <>
      {pizzaItems.map((pizza) => {
        return (
          <div>
            <PizzaItem
              image={pizza.variant.images![0].url}
              name={pizza.name['en-US']}
              size={setSize(pizza.variant.sku!)}
              quantity={1}
              price={getPrice(pizza.price.value.centAmount)}
              discount={
                isDiskountPrice(pizza.price.discounted)
                  ? defineDiskountPrice(pizza.price.discounted)
                  : ''
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default Pizza;
