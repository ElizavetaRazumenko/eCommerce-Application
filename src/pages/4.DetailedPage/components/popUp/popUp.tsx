import { useState } from 'react';

import s from './popUp.module.scss';

import imgUrl from '../../../../assets/pizzas/broccoli.png';
import { PopUpPropsType } from '../../../../types/types';

const PopUp = (props: PopUpPropsType) => {
  const [imageURL, setImageURL] = useState<string>(props.imgURL[0] || '');
  const toLeft = () => {
    if (props.imgURL.indexOf(imageURL) === 0) {
      setImageURL(props.imgURL[props.imgURL.length - 1]);
    } else {
      setImageURL(props.imgURL[props.imgURL.indexOf(imageURL) - 1]);
    }
  };

  const toRight = () => {
    if (props.imgURL.indexOf(imageURL) === props.imgURL.length - 1) {
      setImageURL(props.imgURL[0]);
    } else {
      setImageURL(props.imgURL[props.imgURL.indexOf(imageURL) + 1]);
    }
  };
  return (
    <div className={props.isOpenPopUp ? s.wrapper : s.hidden}>
      <div className={s.cross} onClick={() => props.setIsOpenPopUp(false)}></div>
      <div
        className={props.imageCount === 1 ? s.hidden : s.arror_left}
        onClick={() => toLeft()}
      ></div>
      <div className={s.pop_up}>
        <img src={imageURL} alt='product' className={s.image} />
      </div>
      <div
        className={props.imageCount === 1 ? s.hidden : s.arror_right}
        onClick={() => toRight()}
      ></div>
    </div>
  );
};

export default PopUp;
