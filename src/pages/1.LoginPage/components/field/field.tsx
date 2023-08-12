import { useState } from 'react';

import React from 'react';

import s from './field.module.scss';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputType, setInputType] = useState<string>(props.type);
  const [inputValue, setInputValue] = useState<string>(props.value);
  const changeInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const changeWatch = () => {
    if (inputRef.current) {
      props.addInputValue(
        props.id,
        inputRef.current!.value,
        props.plshldr.toLowerCase(),
        props.page,
      );
    }
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
        value={inputValue}
        onChange={() => {
          setInputValue(inputRef.current!.value);
        }}
        onBlur={() => {
          changeWatch();
        }}
        ref={inputRef}
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
