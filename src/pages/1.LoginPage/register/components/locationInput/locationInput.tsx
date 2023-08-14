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
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    addLocationValue(props.addressType, props.id, target.value);
    setInputValue(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!.value,
    );
    setErrorMessage(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!
        .errorMessage,
    );
  };

  let inputRef: React.RefObject<HTMLInputElement>;
  let errorRef: React.RefObject<HTMLParagraphElement>;

  if (props.addressType === 'billing') {
    if (props.id === 'city') {
      inputRef = props.refs.inputCityB;
      errorRef = props.refs.errorCityB;
    } else if (props.id === 'street') {
      inputRef = props.refs.inputStreetB;
      errorRef = props.refs.errorStreetB;
    } else {
      inputRef = props.refs.inputPostalB;
      errorRef = props.refs.errorPostalB;
    }
  } else {
    if (props.id === 'city') {
      inputRef = props.refs.inputCityS;
      errorRef = props.refs.errorCityS;
    } else if (props.id === 'street') {
      inputRef = props.refs.inputStreetS;
      errorRef = props.refs.errorStreetS;
    } else {
      inputRef = props.refs.inputPostalS;
      errorRef = props.refs.errorPostalS;
    }
  }
  return (
    <div>
      <input
        type='text'
        className={
          props.default
            ? s.input + ' ' + s.default
            : errorMessage === ''
            ? s.input
            : s.input + ' ' + s.invalid
        }
        placeholder={props.plshldr}
        value={inputValue}
        onChange={changeInputValue}
        ref={inputRef}
      />
      <p className={s.error_message} ref={errorRef}>
        {errorMessage}
      </p>
    </div>
  );
};

export default LocationInput;
