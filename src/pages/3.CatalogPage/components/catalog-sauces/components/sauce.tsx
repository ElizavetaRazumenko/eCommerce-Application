// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// import s from './sauce.module.scss';

// import infoProducts from '../../../../../entities/product';
// import { SauceTypeCatalog } from '../../../../../types/types';

// const Sauce = (props: SauceTypeCatalog) => {
//   const key = infoProducts.sauces.find((el) => el.name === props.name)?.key;
//   const mainIngredientsStartIndex = props.description.indexOf('Main ingredients') + 18;

//   const [inCart, setInCart] = useState(false);

//   const toggleInCart = () => {
//     setInCart(!inCart);
//   };

//   const buttonText = inCart ? 'In Cart' : '';

//   const buttonClasses = `${s.btn_add_sauce} ${inCart ? s.in_cart : ''}`;

//   return (
//     <div className={s.item_sauce}>
//       <img src={props.link[0].url} className={s.sauce_img} alt='sauce' />
//       <div className={s.hover_link}>
//         <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
//           details
//         </NavLink>
//       </div>
//       <div className={s.sauce_info}>
//         <h4 className={s.sauce_title}>{props.name}</h4>
//         <h4 className={s.sauce_description}>
//           {props.description.slice(mainIngredientsStartIndex)}
//         </h4>
//         <div className={s.sauce_price}>{props.price}</div>
//         <button className={buttonClasses} onClick={toggleInCart}>
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sauce;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './sauce.module.scss';

import infoProducts from '../../../../../entities/product';

import { createNewCart } from '../../../../../shared/index';

import { SauceTypeCatalog } from '../../../../../types/types';

const Sauce = (props: SauceTypeCatalog) => {
  const key = infoProducts.sauces.find((el) => el.name === props.name)?.key;
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients') + 18;

  const [inCart, setInCart] = useState(false);

  const toggleInCart = async () => {
    try {
      const cartId = await createNewCart(); // Get or create the cart

      // If the cart exists, the cartId will be returned or newly created
      console.log('Cart ID:', cartId);
      setInCart(true);
    } catch (error) {
      console.error('Error getting or creating the cart:', error);
    }
  };

  const buttonText = inCart ? 'In Cart' : '';

  const buttonClasses = `${s.btn_add_sauce} ${inCart ? s.in_cart : ''}`;

  return (
    <div className={s.item_sauce}>
      <img src={props.link[0].url} className={s.sauce_img} alt='sauce' />
      <div className={s.hover_link}>
        <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
          details
        </NavLink>
      </div>
      <div className={s.sauce_info}>
        <h4 className={s.sauce_title}>{props.name}</h4>
        <h4 className={s.sauce_description}>
          {props.description.slice(mainIngredientsStartIndex)}
        </h4>
        <div className={s.sauce_price}>{props.price}</div>
        <button className={buttonClasses} onClick={toggleInCart}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Sauce;
