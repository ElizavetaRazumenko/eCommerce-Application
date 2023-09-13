import s from './pizzaParams.module.scss';

import {
  createAnonymousCarts,
  getCurrentAnonimousCart,
  addProductOnCart,
} from '../../../../../shared/cartSession';
import { getProduct } from '../../../../../shared/index';
import { PizzaParamsCatalogType } from '../../../../../types/types';

const PizzaParams = (props: PizzaParamsCatalogType) => {
  const addToCart = async () => {
    try {
      if (!localStorage.getItem('idCarts')) {
        await createAnonymousCarts();
      }
      const cart = await getCurrentAnonimousCart();
      const version = cart!.body.version;
      const product = await getProduct(props.findData.key!);
      let sku = product?.masterVariant.sku as string;
      if (props.findData.size === 'm') sku = sku.slice(0, -2) + '-M';
      if (props.findData.size === 's') sku = sku.slice(0, -2) + '-S';
      const cartWithProducts = await addProductOnCart(version, sku);
      console.log(cartWithProducts?.lineItems);
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };

  return (
    <div className={s.pizza_title}>
      <div className={s.size_wrapper}>
        <span className={s.span_line}>{props.size}</span>
        <span className={s.span_size}>{props.length}</span>
      </div>
      <div className={s.price_wrapper}>
        <div className={props.discount.length > 0 ? s.span_price + ' ' + s.sale : s.hidden}>
          {props.discount}
        </div>
        <div
          className={props.discount.length > 0 ? s.span_price + ' ' + s.non_actual : s.span_price}
        >
          {props.price}
        </div>
        <div className={s.shopping_cart} onClick={addToCart}></div>
      </div>
    </div>
  );
};

export default PizzaParams;
