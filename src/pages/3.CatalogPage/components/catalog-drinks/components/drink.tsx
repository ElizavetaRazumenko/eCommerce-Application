import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import infoProducts from '../../../../../entities/product';
import { DrinkTypeCatalog, ProductItemType } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const setPriceAndWeigth = (price: string, weigth: string) => {
    props.setProductDetailes.setProductPrice(price);
    props.setProductDetailes.setProductWeigth(weigth);
  };

  const setDetailes = () => {
    console.log(props.name);
    props.setProductDetailes.setProductName(props.name);
    props.setProductDetailes.setProductDescription(props.description);
    setPriceAndWeigth(props.price, '40gr');
    props.setProductDetailes.setProductImg(props.link.map((img) => img.url));
    props.setProductDetailes.setProductType('drinks');
    const productItem = infoProducts['drinks'].find(
      (el) => el.name === props.name,
    ) as ProductItemType;
    props.setProductDetailes.setProductPFCK(productItem.PFCK);
  };
  return (
    <div className={s.item_drink}>
      <img src={props.link[0].url} className={s.drink_img} alt='drink' />
      <div className={s.hover_link}>
        <NavLink to='/details' className={s.details_link} onClick={() => setDetailes()}>
          details
        </NavLink>
      </div>
      <p className={s.name}>{props.name}</p>
      <p className={s.description}>{props.description}</p>
      <button className={s.btn_add_drink}>Add to cart</button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;
