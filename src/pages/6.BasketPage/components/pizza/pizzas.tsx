import { Cart, DiscountedPrice } from '@commercetools/platform-sdk';

import PizzaItem from './components/pizzaItem';

import { keysPizza } from '../../../../entities/product';

const Pizza = (props: {
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
  setDiscountPrice: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const cart = JSON.parse(localStorage.getItem('Cart')!) as Cart;
  const cartItems = cart.lineItems;

  const setSize = (sku: string) => {
    return `${sku.slice(-1)}-size`;
  };
  const getPrice = (value: number) => {
    return value / 100;
  };
  const defineDiskountPrice = (params: DiscountedPrice | undefined) => {
    if (params) {
      return params!.value.centAmount / 100;
    } else return 0;
  };

  const isDiskountPrice = (params: DiscountedPrice | undefined) => {
    return params ? true : false;
  };
  const pizzaItems = cartItems.filter((el) => keysPizza.includes(el.productKey!));
  return (
    <>
      {pizzaItems.map((pizza) => {
        return (
          <PizzaItem
            key={pizza.id}
            image={pizza.variant.images![0].url}
            name={pizza.name['en-US']}
            size={setSize(pizza.variant.sku!)}
            quantity={pizza.quantity}
            price={getPrice(pizza.price.value.centAmount)}
            discount={
              isDiskountPrice(pizza.price.discounted)
                ? defineDiskountPrice(pizza.price.discounted)
                : 0
            }
            keyRequest={pizza.productKey!}
            idRequets={pizza.id}
            setTotalPrice={props.setTotalPrice}
            setDiscountPrice={props.setDiscountPrice}
          />
        );
      })}
    </>
  );
};

export default Pizza;
