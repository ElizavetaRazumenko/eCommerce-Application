import { useState } from 'react';

import React from 'react';

import s from './field.module.scss';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  const [inputType, setInputType] = useState<string>(props.type);
  const changeInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={s.input_wrapper}>
      <input
        type={inputType}
        placeholder={props.plshldr}
        className={
          props.errorMessage === ''
            ? s[props.classname] + ' ' + s.field_input
            : s[props.classname] + ' ' + s.field_input + ' ' + s.invalid
        }
      />
      <div
        className={s.watch}
        onClick={() => {
          changeInputType();
        }}
      ></div>
    </div>
  );
};

export default Field;
