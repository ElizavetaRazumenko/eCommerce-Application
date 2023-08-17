import { useState } from 'react';

import React from 'react';

import s from './field.module.scss';

import state, { addInputValue } from '../../../../state/state';

import { InputLoginType } from '../../../../types/types';

const Field = (props: InputLoginType) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputType, setInputType] = useState<string>(props.type);
  const [inputValue, setInputValue] = useState<string>(props.value);
  const [errorMessage, setErrorMessage] = useState<string>(props.errorMessage);
  const changeInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  const changeValue = () => {
    addInputValue(
      inputRef.current!.id,
      inputRef.current!.value,
      inputRef.current!.placeholder.toLowerCase(),
      props.page,
    );
    if (props.page === 'login') {
      const field = state.loginPage.fieldData.find((field) => field.id === +inputRef.current!.id);
      if (field) {
        setInputValue(field.value);
        setErrorMessage(field.errorMessage);
      }
    } else {
      const field = state.registerPage.fieldData.find(
        (field) => field.id === +inputRef.current!.id,
      );
      if (field) {
        setInputValue(field.value);
        setErrorMessage(field.errorMessage);
      }
    }
  };
  return (
    <div>
      <div className={s.input_wrapper}>
        <input
          id={`${props.id}`}
          name={`${props.id} ${props.page}`}
          type={inputType}
          placeholder={props.plshldr}
          className={
            errorMessage === ''
              ? s[props.classname] + ' ' + s.field_input
              : s[props.classname] + ' ' + s.field_input + ' ' + s.invalid
          }
          value={inputValue}
          onChange={changeValue}
          onPaste={changeValue}
          ref={inputRef}
        />
        <div
          className={s.watch}
          onClick={() => {
            changeInputType();
          }}
        ></div>
      </div>
      <p className={s.control}>{errorMessage}</p>
    </div>
  );
};

export default Field;
