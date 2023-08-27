import { NavLink } from 'react-router-dom';

import s from './sauce.module.scss';

import infoProducts from '../../../../../entities/product';
import { ProductItemType, SauceTypeCatalog } from '../../../../../types/types';

const Sauce = (props: SauceTypeCatalog) => {
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients') + 18;
  const setPriceAndWeigth = (price: string, weigth: string) => {
    props.setProductDetailes.setProductPrice(price);
    props.setProductDetailes.setProductWeigth(weigth);
  };

  const setDetailes = () => {
    props.setProductDetailes.setProductName(props.name);
    props.setProductDetailes.setProductDescription(props.description);
    setPriceAndWeigth(props.price, '40gr');
    props.setProductDetailes.setProductImg(props.link.map((img) => img.url));
    props.setProductDetailes.setProductType('sauces');
    const productItem = infoProducts['sauces'].find(
      (el) => el.name === props.name,
    ) as ProductItemType;
    props.setProductDetailes.setProductPFCK(productItem.PFCK);
  };
  return (
    <div className={s.item_sauce}>
      <img src={props.link[0].url} className={s.sauce_img} alt='souce' />
      <div className={s.hover_link} onClick={() => setDetailes()}>
        <NavLink to='/details' className={s.details_link}>
          details
        </NavLink>
      </div>
      <div className={s.sauce_info}>
        <h4 className={s.sauce_title}>{props.name}</h4>
        <h4 className={s.sauce_description}>
          {props.description.slice(mainIngredientsStartIndex)}
        </h4>
        <div className={s.sauce_price}>{props.price}</div>
        <button className={s.btn_add_sauce}>Add to cart</button>
      </div>
    </div>
  );
};

export default Sauce;
