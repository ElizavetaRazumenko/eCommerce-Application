import React from 'react';

import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';
import AddressInput from '../addressInput/addressInput';

const AddressField = () => {
  const countryRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const toggleCountry = () => {
    countryRef.current?.classList.toggle(s.active);
    addressRef.current?.classList.toggle(s.hidden);
  };
  return (
    <div className={s.address_wrapper}>
      <div className={s.country} ref={countryRef} onClick={toggleCountry}>
        <p className={s.content}>Choose the country</p>
        <img src={imageUrl} alt='arrow' className={s.arrow} />
      </div>
      <div className={s.country_fields + ' ' + s.hidden} ref={addressRef}>
        <p className={s.country_name}>Italy</p>
        <p className={s.country_name}>Spain</p>
      </div>
      <AddressInput plshldr='City' />
      <AddressInput plshldr='Street' />
      <AddressInput plshldr='Postal code' />
      <label className={s.label_input}>
        Make this address as the default?
        <input type='checkbox' name='address' />
      </label>
    </div>
  );
};

export default AddressField;
