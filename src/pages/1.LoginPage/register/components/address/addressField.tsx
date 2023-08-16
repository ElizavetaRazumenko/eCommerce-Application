import React from 'react';

import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';
import state from '../../../../../state/state';
import { LocationValueType } from '../../../../../types/types';
import LocationInput from '../locationInput/locationInput';

const AddressField = (props: LocationValueType) => {
  const countryRef = React.useRef<HTMLDivElement>(null);
  const addressRef = React.useRef<HTMLDivElement>(null);
  const toggleCountry = () => {
    countryRef.current?.classList.toggle(s.active);
    addressRef.current?.classList.toggle(s.hidden);
  };

  const changeCountry = (country: string) => {
    toggleCountry();
    state.registerPage.location[props.type].find((item) => item.type === 'country')!.value =
      country;
    props.type === 'billing'
      ? props.states.setCountryB(country)
      : props.states.setCountryS(country);
    if (!props.toggle && props.type === 'billing') {
      state.registerPage.location.shipping.find((item) => item.type === 'country')!.value = country;
      props.states.setCountryS(country);
    }
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
        <p className={s.content}>
          {props.type === 'billing' ? props.states.countryB : props.states.countryS}
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
        stateValue={props.type === 'billing' ? props.states.inputCityB : props.states.inputCityS}
        setStateValue={props.type === 'billing' ? props.states.setCityB : props.states.setCityS}
        errorValue={props.type === 'billing' ? props.states.errorCityB : props.states.errorCityS}
        setErrorValue={
          props.type === 'billing' ? props.states.setErrorCityB : props.states.setErrorCityS
        }
      />
      <LocationInput
        id='street'
        plshldr='Street'
        addressType={props.type}
        default={props.default}
        stateValue={
          props.type === 'billing' ? props.states.inputStreetB : props.states.inputStreetS
        }
        setStateValue={props.type === 'billing' ? props.states.setStreetB : props.states.setStreetS}
        errorValue={
          props.type === 'billing' ? props.states.errorStreetB : props.states.errorStreetS
        }
        setErrorValue={
          props.type === 'billing' ? props.states.setErrorStreetB : props.states.setErrorStreetS
        }
      />
      <LocationInput
        id='postal'
        plshldr='Postal code'
        addressType={props.type}
        default={props.default}
        stateValue={
          props.type === 'billing' ? props.states.inputPostalB : props.states.inputPostalS
        }
        setStateValue={props.type === 'billing' ? props.states.setPostalB : props.states.setPostalS}
        errorValue={
          props.type === 'billing' ? props.states.errorPostalB : props.states.errorPostalS
        }
        setErrorValue={
          props.type === 'billing' ? props.states.setErrorPostalB : props.states.setErrorPostalS
        }
      />
    </div>
  );
};

export default AddressField;
