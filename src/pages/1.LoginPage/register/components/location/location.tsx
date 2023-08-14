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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isDefault, setIsDefault] = useState<boolean>(false);

  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
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
          <AddressField type='billing' default={false} />
        </form>
        <label className={s.label_input}>
          Make this address as the default?
          <input
            type='checkbox'
            name='address'
            onChange={() => setIsDefault(!isDefault)}
            ref={checkboxRef}
          />
        </label>
        <p className={s.address_name}>Shipping address</p>
        <form onChange={() => setErrorMessage('')}>
          <AddressField type='shipping' default={isDefault} />
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
