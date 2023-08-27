/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from './components/slider';
import s from './detailedPage.module.scss';

import { ProductDetailsType } from '../../types/types';

const DetailedPage = (props: { productDetailes: ProductDetailsType }) => {
  const [imageCount, _] = useState<number>(props.productDetailes.productImg.length);
  return (
    <div className={s.page_wrapper}>
      <NavLink to='/catalog' className={s.nav_link}>
        <div className={s.button_back}>
          <div className={s.arrow_back}></div>
          <span>Back to the catalog</span>
        </div>
      </NavLink>
      <div className={s.details_wrapper}>
        <Slider imageCount={imageCount} />
        <div className={s.description_wrapper}>
          <p className={s.name}>{props.productDetailes.productName}</p>
          <p className={s.description}>{props.productDetailes.productDescription}</p>
          <p className={s.description}>{props.productDetailes.productDescription}</p>
          <div className='s.pfc'>
            <p className={s.info_string}>Proteins: 10.4gr</p>
            <p className={s.info_string}>Fats: 12.8gr</p>
            <p className={s.info_string}>Carbohydrates: 21.2gr</p>
          </div>
          <div className={s.call_weight}>
            <p className={s.info_string}>Calories per 100 gr: 241</p>
            <p className={s.info_string}>Weight: 945gr</p>
          </div>
          <p className={s.price}>32.00$</p>
          <NavLink to='/cart' className={s.nav_link}>
            <div className={s.button}>
              <span>Add to backet</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
