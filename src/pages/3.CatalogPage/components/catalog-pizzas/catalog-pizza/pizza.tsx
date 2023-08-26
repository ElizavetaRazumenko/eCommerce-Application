import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './pizza.module.scss';

import { PizzaType } from '../../../../../types/types';

import PizzaParams from '../catalog-pizzaParams/pizzaParams';

const Pizza = (props: PizzaType) => {
  const arrayPizzaParams = [
    {
      size: 'L',
      length: '45cm',
      price: props.cost[0],
    },
    {
      size: 'M',
      length: '30cm',
      price: props.cost[1],
    },
    {
      size: 'S',
      length: '25cm',
      price: props.cost[2],
    },
  ];

  const pizzaSizes = ['large', 'middle', 'small'];

  return (
    <div className={s.pizza_item_catalog}>
      <div className={s.pizza_content}>
        <img src={props.link} className={s.pizza_img} alt='pizza' />
        <h3 className={s.pizza_name}>{props.name}</h3>
        <div className={s.pizza_ingredients}>{props.mainIngredients}</div>
        <div className={s.size_links}>
          {pizzaSizes.map((size, index) => (
            <NavLink to='/detailed' className={s.size_link} key={index}>
              {pizzaSizes[index]}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={s.pizza_params}>
        {arrayPizzaParams.map((pizza, index) => (
          <PizzaParams size={pizza.size} length={pizza.length} price={pizza.price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Pizza;

// import React, { useState } from 'react';

// import { NavLink } from 'react-router-dom';

// import s from './pizza.module.scss';

// import { PizzaType } from '../../../../../types/types';
// import PizzaParams from '../catalog-pizzaParams/pizzaParams';

// const Pizza = (props: PizzaType & { index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   let hoverTimeout: NodeJS.Timeout;

//   const pizzaIndex = props.index;

//   const arrayPizzaParams = [
//     {
//       size: 'L',
//       length: '45cm',
//       price: props.cost[0],
//     },
//     {
//       size: 'M',
//       length: '30cm',
//       price: props.cost[1],
//     },
//     {
//       size: 'S',
//       length: '25cm',
//       price: props.cost[2],
//     },
//   ];

//   const pizzaSizes = ['large', 'middle', 'small'];

//   return (
//     <div className={s.pizza_item_catalog}>
//       <div
//         className={`${s.hoverable} ${isHovered ? s.hovered : ''}`}
//         onMouseEnter={() => {
//           setIsHovered(true);
//           clearTimeout(hoverTimeout);
//         }}
//         onMouseLeave={() => {
//           hoverTimeout = setTimeout(() => setIsHovered(false), 200);
//         }}
//       >
//         <div className={s.image_wrapper}>
//           <img src={props.link} className={s.pizza_img} alt='pizza' />
//           <div className={s.overlay}></div>
//         </div>
//         <h3 className={s.pizza_name}>{props.name}</h3>
//         <div className={`${s.pizza_ingredients} ${isHovered ? s.visible : ''}`}>
//           {props.mainIngredients}
//         </div>
//       </div>
//       <div className={s.pizza_params}>
//         {props.cost.map((price, index) => (
//           <PizzaParams
//             size={arrayPizzaParams[index].size}
//             length={arrayPizzaParams[index].length}
//             price={price}
//             key={index}
//           />
//         ))}
//       </div>
//       {isHovered && (
// <div className={s.size_links}>
//   {pizzaSizes.map((size, index) => (
//     <NavLink to='/detailed' className={s.size_link} key={index}>
//       {size}
//     </NavLink>
//   ))}
// </div>
//       )}
//     </div>
//   );
// };

// export default Pizza;
