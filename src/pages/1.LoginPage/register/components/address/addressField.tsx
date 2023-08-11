import React, { useState } from 'react';

import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';
import AddressInput from '../addressInput/addressInput';

const AddressField = () => {
  const [countryValue, setCountryValue] = useState('Choose the country');
  const countryRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const toggleCountry = () => {
    countryRef.current?.classList.toggle(s.active);
    addressRef.current?.classList.toggle(s.hidden);
  };
  const changeCountry = (country: string) => {
    toggleCountry();
    setCountryValue(country);
  };
  return (
    <div className={s.address_wrapper}>
      <div className={s.country} ref={countryRef} onClick={toggleCountry}>
        <p className={s.content}>{countryValue}</p>
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
      <AddressInput plshldr='City' />
      <AddressInput plshldr='Street' />
      <AddressInput plshldr='Postal code' />
    </div>
  );
};

export default AddressField;
