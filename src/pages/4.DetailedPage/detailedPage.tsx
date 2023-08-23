import s from './detailedPage.module.scss';

const DetailedPage = () => {
  return (
    <div className={s.details_wrapper}>
      <div className={s.picture_wrapper}>
        <div className={s.pic}>
          <div className={s.big_img + ' ' + s.pizza}></div>
        </div>
        <div className={s.pic_small_left}>
          <div className={s.small_left_img + ' ' + s.products}></div>
        </div>
        <div className={s.pic_small_right}>
          <div className={s.small_right_img + ' ' + s.box}></div>
        </div>
      </div>
      <div className={s.description_wrapper}></div>
    </div>
  );
};

export default DetailedPage;
