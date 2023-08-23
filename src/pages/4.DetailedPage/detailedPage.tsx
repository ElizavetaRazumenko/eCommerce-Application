import { useState } from 'react';

import s from './detailedPage.module.scss';

import urlPizza from '../../assets/details/1.png';
import urlProducts from '../../assets/details/2.png';
import urlBox from '../../assets/details/box.png';

const DetailedPage = () => {
  const urlArray = [urlPizza, urlProducts, urlBox];
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
  return (
    <div className={s.details_wrapper}>
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
      <div className={s.description_wrapper}></div>
    </div>
  );
};

export default DetailedPage;
