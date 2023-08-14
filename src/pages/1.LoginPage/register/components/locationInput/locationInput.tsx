import { useState } from 'react';

import React from 'react';

import s from './locationInput.module.scss';

import state, { addLocationValue } from '../../../../../state/state';
import { InputLocationPropsType } from '../../../../../types/types';

const LocationInput = (props: InputLocationPropsType) => {
  const [inputValue, setInputValue] = useState<string>(
    state.registerPage.location[props.addressType].find((item) => item.type === props.id)!.value,
  );
  const [errorMessage, setErrorMessage] = useState<string>(
    state.registerPage.location[props.addressType].find((item) => item.type === props.id)!
      .errorMessage,
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  const changeInputValue = () => {
    addLocationValue(props.addressType, props.id, inputRef.current!.value);
    setInputValue(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!.value,
    );
    setErrorMessage(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!
        .errorMessage,
    );
  };

  return (
    <>
      <input
        type='text'
        className={errorMessage === '' ? s.input : s.input + ' ' + s.invalid}
        placeholder={props.plshldr}
        value={inputValue}
        onChange={changeInputValue}
        ref={inputRef}
      />
      <p className={s.error_message}>{errorMessage}</p>
    </>
  );
};

export default LocationInput;
