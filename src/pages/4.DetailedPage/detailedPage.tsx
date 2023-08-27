/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from './components/slider';
import s from './detailedPage.module.scss';

import infoProducts from '../../entities/product';
import { ProductDetailsType, ProductItemType } from '../../types/types';

const DetailedPage = (props: { productDetailes: ProductDetailsType }) => {
  const [imageCount, _] = useState<number>(props.productDetailes.productImg.length);
  console.log(props.productDetailes.productName);
  console.log(infoProducts[props.productDetailes.productType]);
  const productItem = infoProducts[props.productDetailes.productType].find(
    (el) => el.name === props.productDetailes.productName,
  ) as ProductItemType;
  console.log(JSON.stringify(productItem));
  return (
    <div className={s.page_wrapper}>
      <NavLink to='/catalog' className={s.nav_link}>
        <div className={s.button_back}>
          <div className={s.arrow_back}></div>
          <span>Back to the catalog</span>
        </div>
      </NavLink>
      <div className={s.details_wrapper}>
        <Slider imageCount={imageCount} imagesURL={props.productDetailes.productImg} />
        <div className={s.description_wrapper}>
          <p className={s.name}>{props.productDetailes.productName}</p>
          <p className={s.description}>
            {props.productDetailes.productDescription.slice(
              0,
              props.productDetailes.productDescription.indexOf('Main ingredients'),
            )}
          </p>
          <p className={s.description}>
            {props.productDetailes.productDescription.slice(
              props.productDetailes.productDescription.indexOf('Main ingredients'),
            )}
          </p>
          <div className='s.pfc'>
            <p className={s.info_string}>{`Proteins: ${'productItem.PFC[0]'}gr`}</p>
            <p className={s.info_string}>{`Fats: ${'productItem.PFC[1]'}gr`}</p>
            <p className={s.info_string}>{`Carbohydrates: ${'productItem.PFC[2]'}gr`}</p>
          </div>
          <div className={s.call_weight}>
            <p className={s.info_string}>{`Calories per 100 gr: ${'productItem.calories'}`}</p>
            <p className={s.info_string}>{`Weight: ${props.productDetailes.productWeigth}`}</p>
          </div>
          <p className={s.price}>{props.productDetailes.productPrice}</p>
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
