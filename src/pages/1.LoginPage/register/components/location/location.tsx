/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react';

import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';
import state from '../../../../../state/state';
import AddressField from '../address/addressField';

const Location = () => {
  const locationWrapperRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const formShippingRef = React.useRef<HTMLFormElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isDefault, setIsDefault] = useState<boolean>(false);

  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
  };
  const Refs = {
    inputCountryB: React.useRef<HTMLParagraphElement>(null),
    inputCityB: React.useRef<HTMLInputElement>(null),
    errorCityB: React.useRef<HTMLParagraphElement>(null),
    inputStreetB: React.useRef<HTMLInputElement>(null),
    errorStreetB: React.useRef<HTMLParagraphElement>(null),
    inputPostalB: React.useRef<HTMLInputElement>(null),
    errorPostalB: React.useRef<HTMLParagraphElement>(null),
    inputCountryS: React.useRef<HTMLParagraphElement>(null),
    inputCityS: React.useRef<HTMLInputElement>(null),
    errorCityS: React.useRef<HTMLParagraphElement>(null),
    inputStreetS: React.useRef<HTMLInputElement>(null),
    errorStreetS: React.useRef<HTMLParagraphElement>(null),
    inputPostalS: React.useRef<HTMLInputElement>(null),
    errorPostalS: React.useRef<HTMLParagraphElement>(null),
  };

  const changeDefaultAddress = () => {
    setIsDefault(!isDefault);
    setErrorMessage('');
    if (!isDefault) {
      // Refs.inputCountryS.current!.textContent = Refs.inputCountryB.current!.textContent;
      // const country = state.registerPage.location.shipping.find((item) => item.type === 'country');
      // if (country) {
      //   country.value = Refs.inputCountryB.current!.textContent as string;
      // }
      // Refs.errorCityS.current!.textContent = '';
      // Refs.errorStreetS.current!.textContent = '';
      // Refs.errorPostalS.current!.textContent = '';
      // state.registerPage.location.shipping.forEach((item) => (item.errorMessage = ''));
    }
  };

  const checkForm = () => {
    const isValideBilling = state.registerPage.location.billing.every((item) => item.isValid);
    const isValideShipping = state.registerPage.location.shipping.every((item) => item.isValid);
    if (!isValideBilling && !isValideShipping) {
      setErrorMessage('incomplete billing and shipping address');
    } else if (!isValideBilling) {
      setErrorMessage('incomplete billing address');
    } else if (!isValideShipping) {
      setErrorMessage('incomplete shipping address');
    } else {
      setErrorMessage('');
      toggleLocation();
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.location_select} ref={locationRef} onClick={toggleLocation}>
        <p className={s.content}>Select address</p>
        <img src={imageurl} alt='arrow' className={s.arrow} />
      </div>
      <div className={s.location_wrapper + ' ' + s.hidden} ref={locationWrapperRef}>
        <p className={s.address_name}>Billing address</p>
        <form onChange={() => setErrorMessage('')}>
          <AddressField type='billing' default={false} refs={Refs} />
        </form>
        <label className={s.label_input}>
          Make this address as the default?
          <input type='checkbox' name='address' onChange={changeDefaultAddress} ref={checkboxRef} />
        </label>
        <p className={s.address_name}>Shipping address</p>
        <form onChange={() => setErrorMessage('')} ref={formShippingRef}>
          <AddressField type='shipping' default={isDefault} refs={Refs} />
        </form>
        <p className={s.error}>{errorMessage}</p>
        <div className={s.button_done} onClick={checkForm}>
          <p className={s.content}>Done</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
