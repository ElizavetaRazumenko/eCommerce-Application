import { Cart } from '@commercetools/platform-sdk';

import ProductItem from './components/productItem';

import { keysPizza } from '../../../../entities/product';

const DrinksSauceItem = (props: {
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const cart = JSON.parse(localStorage.getItem('Cart')!) as Cart;
  const cartItems = cart.lineItems;
  const getPrice = (value: number) => {
    return value / 100;
  };
  const productItems = cartItems.filter((el) => !keysPizza.includes(el.productKey!));
  return (
    <>
      {productItems.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            image={product.variant.images![0].url}
            name={product.name['en-US']}
            quantity={product.quantity}
            price={getPrice(product.price.value.centAmount)}
            keyRequest={product.productKey!}
            idRequets={product.id}
            setTotalPrice={props.setTotalPrice}
          />
        );
      })}
    </>
  );
};

export default DrinksSauceItem;
