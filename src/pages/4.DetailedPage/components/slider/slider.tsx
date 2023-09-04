import s from './slider.module.scss';

import { SliderPropsType } from '../../../../types/types';

const Slider = (props: SliderPropsType) => {
  const toRightThird = () => {
    props.setProductImg([props.imagesURL[1], props.imagesURL[2], props.imagesURL[0]]);
  };
  const toLeftThird = () => {
    props.setProductImg([props.imagesURL[2], props.imagesURL[0], props.imagesURL[1]]);
  };

  const slideTwo = () => {
    props.setProductImg([props.imagesURL[1], props.imagesURL[0]]);
  };
  if (props.imagesURL.length === 3) {
    return (
      <div className={s.slider_wrapper}>
        <div className={s.arrow_left} onClick={toLeftThird}></div>
        <div className={s.picture_wrapper}>
          <div className={s.pic} onClick={() => props.setIsOpenPopUp(true)}>
            <img src={props.imagesURL[0] || ''} alt='big_pic' className={s.image} />
          </div>
          <div className={s.pic_small_left} onClick={() => props.setIsOpenPopUp(true)}>
            <img src={props.imagesURL[1] || ''} alt='left_pic' className={s.image} />
          </div>
          <div className={s.pic_small_right} onClick={() => props.setIsOpenPopUp(true)}>
            <img src={props.imagesURL[2] || ''} alt='right_pic' className={s.image} />
          </div>
        </div>
        <div className={s.arrow_right} onClick={toRightThird}></div>
      </div>
    );
  } else if (props.imagesURL.length === 2) {
    return (
      <div className={s.slider_wrapper}>
        <div className={s.arrow_left} onClick={slideTwo}></div>
        <div className={s.picture_wrapper_two_img}>
          <div className={s.pic_two_img_t} onClick={() => props.setIsOpenPopUp(true)}>
            <img src={props.imagesURL[0] || ''} alt='big_pic' className={s.image} />
          </div>
          <div className={s.pic_two_img_b} onClick={() => props.setIsOpenPopUp(true)}>
            <img src={props.imagesURL[1] || ''} alt='left_pic' className={s.image} />
          </div>
        </div>
        <div className={s.arrow_right} onClick={slideTwo}></div>
      </div>
    );
  }
  return (
    <div className={s.slider_wrapper}>
      <div className={s.one_pic} onClick={() => props.setIsOpenPopUp(true)}>
        <img src={props.imagesURL[0] || ''} alt='big_pic' className={s.image} />
      </div>
    </div>
  );
};

export default Slider;
