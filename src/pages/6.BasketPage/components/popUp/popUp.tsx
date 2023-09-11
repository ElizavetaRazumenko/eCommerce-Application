import s from './popUp.module.scss';

const PopUp = (props: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clearCart = () => {
    props.setIsOpen(false);
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
