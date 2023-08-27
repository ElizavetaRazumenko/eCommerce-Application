import { NavLink } from 'react-router-dom';

import s from './sauce.module.scss';

import { SauceTypeCatalog } from '../../../../../types/types';

const Sauce = (props: SauceTypeCatalog) => {
  return (
    <div className={s.item_sauce}>
      <img src={props.link} className={s.sauce_img} alt='souce' />
      <div className={s.hover_link}>
        <NavLink to='/details' className={s.details_link}>
          details
        </NavLink>
      </div>
      <div className={s.sauce_info}>
        <h4 className={s.sauce_title}>{props.name}</h4>
        <h4 className={s.sauce_description}>{props.description}</h4>
        <div className={s.sauce_price}>{props.price}</div>
        <button className={s.btn_add_sauce}>Add to cart</button>
      </div>
    </div>
  );
};

export default Sauce;
