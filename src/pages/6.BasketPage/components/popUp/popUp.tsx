import { useNavigate } from 'react-router';

import s from './popUp.module.scss';

import { requestForClearCart } from '../../../../shared/cartSession';

const PopUp = (props: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const clearCart = async () => {
    await requestForClearCart();
    props.setIsOpen(false);
    navigate('/catalog');
  };
  const closePopUp = () => {
    props.setIsOpen(false);
  };
  return (
    <div className={props.isOpen ? s.modal : s.hidden} onClick={closePopUp}>
      <div className={s.wrapper}>
        <p className={s.text_warning}>Are you sure you want to empty the cart?</p>
        <div className={s.buttons_wraper}>
          <button className={`${s.button} ${s.button_yes}`} onClick={clearCart}>
            Yes
          </button>
          <button className={`${s.button} ${s.button_no}`} onClick={closePopUp}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
