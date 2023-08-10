import s from './addressInput.module.scss';

const AddressInput = (props: { plshldr: string }) => {
  return <input className={s.input} type='text' placeholder={props.plshldr}></input>;
};

export default AddressInput;
