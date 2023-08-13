import React from 'react';

import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';
import state, { addLocationValue } from '../../../../../state/state';
import { LocationValueType } from '../../../../../types/types';

const AddressField = (props: LocationValueType) => {
  const countryRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const toggleCountry = () => {
    countryRef.current?.classList.toggle(s.active);
    addressRef.current?.classList.toggle(s.hidden);
  };
  const changeCountry = (country: string) => {
    toggleCountry();
    state.registerPage.location[props.type].country.value = country;
    props.setState(state);
    props.values.setCountry(country);
  };
  const changeAddressValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.id && (target.id === 'city' || target.id === 'street' || target.id === 'postal')) {
      addLocationValue(props.type, target.id, target.value);
      props.setState(state);
      if (target.id === 'city') {
        const value = props.state.registerPage.location[props.type].city.value;
        props.values.setCity(value);
        // const error = props.state.registerPage.location[props.type].city.errorMessage;
      } else if (target.id === 'street') {
        const value = props.state.registerPage.location[props.type].street.value;
        props.values.setStreet(value);
      } else {
        const value = props.state.registerPage.location[props.type].postal.value;
        props.values.setPostal(value);
      }
    }
  };
  return (
    <div className={s.address_wrapper}>
      <div className={s.country} ref={countryRef} onClick={toggleCountry}>
        <p className={s.content}>{props.values.country}</p>
        <img src={imageUrl} alt='arrow' className={s.arrow} />
      </div>
      <div className={s.country_fields + ' ' + s.hidden} ref={addressRef}>
        <p className={s.country_name} onClick={() => changeCountry('Italy')}>
          Italy
        </p>
        <p className={s.country_name} onClick={() => changeCountry('Spain')}>
          Spain
        </p>
      </div>
      <input
        id='city'
        className={s.input}
        type='text'
        placeholder='City'
        value={props.values.city}
        onChange={changeAddressValue}
      ></input>
      <input
        id='street'
        className={s.input}
        type='text'
        placeholder='Street'
        value={props.values.street}
        onChange={changeAddressValue}
      ></input>
      <input
        id='postal'
        className={s.input}
        type='text'
        placeholder='Postal code'
        value={props.values.postal}
        onChange={changeAddressValue}
      ></input>
    </div>
  );
};

export default AddressField;
