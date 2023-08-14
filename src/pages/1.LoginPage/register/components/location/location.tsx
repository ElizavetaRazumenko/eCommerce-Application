/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react';

import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';
import state, { isValide, makeValideDefault } from '../../../../../state/state';
import AddressField from '../address/addressField';

const Location = () => {
  const locationWrapperRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
  };

  const checkForm = () => {
    if (checkboxRef.current?.checked) {
      makeValideDefault();
    }
    const isValideBilling = isValide('billing');
    const isValideShipping = isValide('shipping');
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
  const [billingCountry, setBillingCountry] = useState<string>(
    state.registerPage.location.billing.country.value,
  );
  const [billingCity, setBillingCity] = useState<string>(
    state.registerPage.location.billing.city.value,
  );
  const [billingStreet, setBillingStreet] = useState<string>(
    state.registerPage.location.billing.street.value,
  );
  const [billingPostal, setBillingPostal] = useState<string>(
    state.registerPage.location.billing.postal.value,
  );
  const billing = {
    country: billingCountry,
    setCountry: setBillingCountry,
    city: billingCity,
    setCity: setBillingCity,
    street: billingStreet,
    setStreet: setBillingStreet,
    postal: billingPostal,
    setPostal: setBillingPostal,
  };
  const [shippingCountry, setShippingCountry] = useState<string>(
    state.registerPage.location.shipping.country.value,
  );
  const [shippingCity, setShippingCity] = useState<string>(
    state.registerPage.location.shipping.city.value,
  );
  const [shippingStreet, setShippingStreet] = useState<string>(
    state.registerPage.location.shipping.street.value,
  );
  const [shippingPostal, setShippingPostal] = useState<string>(
    state.registerPage.location.shipping.postal.value,
  );
  const shipping = {
    country: shippingCountry,
    setCountry: setShippingCountry,
    city: shippingCity,
    setCity: setShippingCity,
    street: shippingStreet,
    setStreet: setShippingStreet,
    postal: shippingPostal,
    setPostal: setShippingPostal,
  };
  const addDefaultAddress = () => {
    setShippingCountry(billingCountry);
    setShippingCity(billingCity);
    setShippingStreet(billingStreet);
    setShippingPostal(billingPostal);
    state.registerPage.location.shipping.country.value = billingCountry;
    state.registerPage.location.shipping.city.value = billingCity;
    state.registerPage.location.shipping.street.value = billingStreet;
    state.registerPage.location.shipping.postal.value = billingPostal;
  };
  return (
    <div className={s.wrapper}>
      <div className={s.location_select} ref={locationRef} onClick={toggleLocation}>
        <p className={s.content}>Select address</p>
        <img src={imageurl} alt='arrow' className={s.arrow} />
      </div>
      <div className={s.location_wrapper + ' ' + s.hidden} ref={locationWrapperRef}>
        <p className={s.address_name}>Billing address</p>
        <AddressField values={billing} type='billing' default={false} />
        <label className={s.label_input}>
          Make this address as the default?
          <input type='checkbox' name='address' onChange={addDefaultAddress} ref={checkboxRef} />
        </label>
        <p className={s.address_name}>Shipping address</p>
        <AddressField
          values={checkboxRef.current?.checked ? billing : shipping}
          type={'shipping'}
          default={checkboxRef.current?.checked ? true : false}
        />
        <p className={s.error}>{errorMessage}</p>
        <div className={s.button_done} onClick={checkForm}>
          <p className={s.content}>Done</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
