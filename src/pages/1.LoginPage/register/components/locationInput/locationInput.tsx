import React from 'react';

import s from './locationInput.module.scss';

import state, { addLocationValue } from '../../../../../state/state';
import { InputLocationPropsType } from '../../../../../types/types';

const LocationInput = (props: InputLocationPropsType) => {
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    addLocationValue(props.addressType, props.id, target.value);
    props.setStateValue(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!.value,
    );
    props.setErrorValue(
      state.registerPage.location[props.addressType].find((item) => item.type === props.id)!
        .errorMessage,
    );
  };
  return (
    <div>
      <input
        type='text'
        className={
          props.isOneAddress
            ? s.input + ' ' + s.one_address
            : props.errorValue === ''
            ? s.input
            : s.input + ' ' + s.invalid
        }
        placeholder={props.plshldr}
        value={props.stateValue}
        onChange={changeInputValue}
      />
      <p className={s.error_message}>{props.errorValue}</p>
    </div>
  );
};

export default LocationInput;
