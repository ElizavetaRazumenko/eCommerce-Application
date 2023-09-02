/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import PopUp from './components/popUp/popUp';
import Slider from './components/slider/slider';
import s from './detailedPage.module.scss';

import { getProduct } from '../../shared';
import { ProductDetailsType } from '../../types/types';

const DetailedPage = (props: { productDetailes: ProductDetailsType }) => {
  const { key, size } = useParams();
  const product = async () => {
    const info = await getProduct('PS-1-1-1');
    console.log(info);
  };
  const [imageCount, _] = useState<number>(props.productDetailes.productImg.length);
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
  localStorage.setItem('ProductDetailes', JSON.stringify(props.productDetailes));
  return (
    <div className={s.page_wrapper}>
      <NavLink to='/catalog' className={s.nav_link} onClick={() => setIsOpenPopUp(false)}>
        <div className={s.button_back}>
          <div className={s.arrow_back}></div>
          <span>Back to the catalog</span>
        </div>
      </NavLink>
      <div className={s.details_wrapper}>
        <PopUp
          isOpenPopUp={isOpenPopUp}
          imageCount={imageCount}
          setIsOpenPopUp={setIsOpenPopUp}
          imgURL={props.productDetailes.productImg}
        />
        <Slider
          imageCount={imageCount}
          imagesURL={props.productDetailes.productImg}
          setIsOpenPopUp={setIsOpenPopUp}
        />
        <div className={s.description_wrapper}>
          <p className={s.name}>{props.productDetailes.productName}</p>
          <p className={s.description}>
            {props.productDetailes.productDescription.slice(
              0,
              props.productDetailes.productDescription.indexOf('Main ingredients') === -1
                ? props.productDetailes.productDescription.length
                : props.productDetailes.productDescription.indexOf('Main ingredients'),
            )}
          </p>
          <p className={s.description}>
            {props.productDetailes.productDescription.indexOf('Main ingredients') === -1
              ? ''
              : props.productDetailes.productDescription.slice(
                  props.productDetailes.productDescription.indexOf('Main ingredients'),
                )}
          </p>
          <div className='s.pfc'>
            <p className={s.info_string}>{`Proteins: ${props.productDetailes.productPFCK[0]}gr`}</p>
            <p className={s.info_string}>{`Fats: ${props.productDetailes.productPFCK[1]}gr`}</p>
            <p
              className={s.info_string}
            >{`Carbohydrates: ${props.productDetailes.productPFCK[2]}gr`}</p>
          </div>
          <div className={s.call_weight}>
            <p
              className={s.info_string}
            >{`Calories per 100 gr: ${props.productDetailes.productPFCK[3]}`}</p>
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
