import { Cart } from '@commercetools/platform-sdk';

import ProductItem from './components/productItem';

import { keysPizza } from '../../../../entities/product';

const DrinksSauceItem = () => {
  const cart = JSON.parse(localStorage.getItem('Cart')!) as Cart;
  const cartItems = cart.lineItems;
  const getPrice = (value: number) => {
    return `${(value / 100).toFixed(2)}$`;
  };

  const productItems = cartItems.filter((el) => !keysPizza.includes(el.productKey!));
  return (
    <>
      {productItems.map((product) => {
        return (
          <div>
            <ProductItem
              image={product.variant.images![0].url}
              name={product.name['en-US']}
              quantity={1}
              price={getPrice(product.price.value.centAmount)}
            />
          </div>
        );
      })}
    </>
  );
};

export default DrinksSauceItem;
