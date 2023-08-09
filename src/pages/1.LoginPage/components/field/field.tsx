import s from './field.module.scss';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  return (
    <input
      type={props.type}
      placeholder={props.plshldr}
      className={s[props.classname] + ' ' + s.field_input + ' ' + s[props.page]}
    />
  );
};

export default Field;
