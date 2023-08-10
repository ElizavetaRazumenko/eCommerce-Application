import { useState } from 'react';

import s from './field.module.scss';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  const [inputType, setInputType] = useState<string>(props.type);
  const changeInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  const changeWatch = () => {
    console.log('здарова');
  };
  return (
    <div className={s.input_wrapper}>
      <input
        type={inputType}
        placeholder={props.plshldr}
        className={s[props.classname] + ' ' + s.field_input + ' ' + s[props.page]}
        onBlur={() => changeWatch()}
      />
      <div className={s.watch} onClick={changeInputType}>
        s
      </div>
    </div>
  );
};

export default Field;
