import s from './field.module.scss';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  return (
    <input
      placeholder={props.plshldr}
      className={s[props.classname] + ' ' + s.field_input + ' ' + s[props.type]}
    />
  );
};

export default Field;
