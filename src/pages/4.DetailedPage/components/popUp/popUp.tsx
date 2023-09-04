import s from './popUp.module.scss';

import { PopUpPropsType } from '../../../../types/types';

const PopUp = (props: PopUpPropsType) => {
  const toLeft = () => {
    props.imgURL.length === 3
      ? props.setProductImg([props.imgURL[2], props.imgURL[0], props.imgURL[1]])
      : props.imgURL.length === 2
      ? props.setProductImg([props.imgURL[1], props.imgURL[0]])
      : props.setProductImg(props.imgURL);
  };

  const toRight = () => {
    props.imgURL.length === 3
      ? props.setProductImg([props.imgURL[1], props.imgURL[2], props.imgURL[0]])
      : props.imgURL.length === 2
      ? props.setProductImg([props.imgURL[1], props.imgURL[0]])
      : props.setProductImg(props.imgURL);
  };
  return (
    <div className={props.isOpenPopUp ? s.wrapper : s.hidden}>
      <div className={s.cross} onClick={() => props.setIsOpenPopUp(false)}></div>
      <div
        className={props.imgURL.length === 1 ? s.hidden : s.arror_left}
        onClick={() => toLeft()}
      ></div>
      <div className={s.pop_up}>
        <img src={props.imgURL[0]} alt='product' className={s.image} />
      </div>
      <div
        className={props.imgURL.length === 1 ? s.hidden : s.arror_right}
        onClick={() => toRight()}
      ></div>
    </div>
  );
};

export default PopUp;
