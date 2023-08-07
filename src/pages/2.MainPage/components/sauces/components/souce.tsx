import s from './souce.module.css';

import { SauceType } from '../../../../../types/types';

const Sauce = (props: SauceType) => {
  return (
    <div className={s.item_sauce}>
      <img src={props.link} className={s.sauce_img} alt='souce' />
      <div className={s.sauce_info}>
        <h4 className={s.sauce_title}>{props.name}</h4>
        <div className={s.sauce_price}>0,60$</div>
        <button className={s.btn_add_sauce}>Add to cart</button>
      </div>
    </div>
  );
};

export default Sauce;
