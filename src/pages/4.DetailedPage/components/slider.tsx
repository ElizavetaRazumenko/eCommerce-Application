import { useState } from 'react';

import s from './slider.module.scss';

const Slider = (props: { imageCount: number; imagesURL: string[] }) => {
  const urlArray = [props.imagesURL[0], props.imagesURL[1] || '', props.imagesURL[2] || ''];
  const [firstLink, setFirstLink] = useState<string>(urlArray[0]);
  const [secondLink, setSecondLink] = useState<string>(urlArray[1]);
  const [thirdLink, setThirdLink] = useState<string>(urlArray[2]);

  const toLeft = () => {
    const indexFirst = urlArray.indexOf(firstLink);
    const indexSecond = urlArray.indexOf(secondLink);
    const indexThird = urlArray.indexOf(thirdLink);

    if (indexFirst === 0) {
      setFirstLink(urlArray[2]);
    } else {
      setFirstLink(urlArray[indexFirst - 1]);
    }

    if (indexSecond === 0) {
      setSecondLink(urlArray[2]);
    } else {
      setSecondLink(urlArray[indexSecond - 1]);
    }

    if (indexThird === 0) {
      setThirdLink(urlArray[2]);
    } else {
      setThirdLink(urlArray[indexThird - 1]);
    }
  };

  const toRight = () => {
    const indexFirst = urlArray.indexOf(firstLink);
    const indexSecond = urlArray.indexOf(secondLink);
    const indexThird = urlArray.indexOf(thirdLink);

    if (indexFirst === 2) {
      setFirstLink(urlArray[0]);
    } else {
      setFirstLink(urlArray[indexFirst + 1]);
    }

    if (indexSecond === 2) {
      setSecondLink(urlArray[0]);
    } else {
      setSecondLink(urlArray[indexSecond + 1]);
    }

    if (indexThird === 2) {
      setThirdLink(urlArray[0]);
    } else {
      setThirdLink(urlArray[indexThird + 1]);
    }
  };
  const toLeftTwo = () => {
    const indexFirst = urlArray.indexOf(firstLink);
    const indexSecond = urlArray.indexOf(secondLink);
    indexFirst === 0 ? setFirstLink(urlArray[1]) : setFirstLink(urlArray[0]);
    indexSecond === 0 ? setSecondLink(urlArray[1]) : setSecondLink(urlArray[0]);
  };
  if (props.imageCount === 3) {
    return (
      <div className={s.slider_wrapper}>
        <div className={s.arrow_left} onClick={toLeft}></div>
        <div className={s.picture_wrapper}>
          <div className={s.pic}>
            <img src={firstLink} alt='big_pic' className={s.image} />
          </div>
          <div className={s.pic_small_left}>
            <img src={secondLink} alt='left_pic' className={s.image} />
          </div>
          <div className={s.pic_small_right}>
            <img src={thirdLink} alt='right_pic' className={s.image} />
          </div>
        </div>
        <div className={s.arrow_right} onClick={toRight}></div>
      </div>
    );
  } else if (props.imageCount === 2) {
    return (
      <div className={s.slider_wrapper}>
        <div className={s.arrow_left} onClick={toLeftTwo}></div>
        <div className={s.picture_wrapper_two_img}>
          <div className={s.pic_two_img_t}>
            <img src={firstLink} alt='big_pic' className={s.image} />
          </div>
          <div className={s.pic_two_img_b}>
            <img src={secondLink} alt='left_pic' className={s.image} />
          </div>
        </div>
        <div className={s.arrow_right} onClick={toLeftTwo}></div>
      </div>
    );
  }
  return (
    <div className={s.slider_wrapper}>
      <div className={s.one_pic}>
        <img src={firstLink} alt='big_pic' className={s.image} />
      </div>
    </div>
  );
};

export default Slider;
