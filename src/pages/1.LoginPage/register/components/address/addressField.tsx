import React, { useState } from 'react';

import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';
import state from '../../../../../state/state';
import { LocationValueType } from '../../../../../types/types';
import LocationInput from '../locationInput/locationInput';

const AddressField = (props: LocationValueType) => {
  let countryNameRef: React.RefObject<HTMLParagraphElement>;
  if (props.type === 'billing') {
    countryNameRef = props.refs.inputCountryB;
  } else {
    countryNameRef = props.refs.inputCountryS;
  }
  const countryRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const [countryName, setCountryName] = useState<string>(
    state.registerPage.location[props.type].find((item) => item.type === 'country')!.value,
  );

  const toggleCountry = () => {
    countryRef.current?.classList.toggle(s.active);
    addressRef.current?.classList.toggle(s.hidden);
  };

  const changeCountry = (country: string) => {
    toggleCountry();
    state.registerPage.location[props.type].find((item) => item.type === 'country')!.value =
      country;
    setCountryName(country);
  };
  return (
    <div className={s.address_wrapper}>
      <div
        className={props.default ? s.default : s.country}
        ref={countryRef}
        onClick={(e) => {
          if (!props.default) toggleCountry();
        }}
      >
        <p className={s.content} ref={countryNameRef}>
          {countryName}
        </p>
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
      <LocationInput
        id='city'
        plshldr='City'
        addressType={props.type}
        default={props.default}
        refs={props.refs}
      />
      <LocationInput
        id='street'
        plshldr='Street'
        addressType={props.type}
        default={props.default}
        refs={props.refs}
      />
      <LocationInput
        id='postal'
        plshldr='Postal code'
        addressType={props.type}
        default={props.default}
        refs={props.refs}
      />
    </div>
  );
};

export default AddressField;
