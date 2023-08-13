/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react';

import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';
import state from '../../../../../state/state';
import { registerPageType } from '../../../../../types/types';
import AddressField from '../address/addressField';

const Location = (props: registerPageType) => {
  const locationWrapperRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);
  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
  };
  const [billingCountry, setBillingCountry] = useState<string>(
    props.state.registerPage.location.billing.country.value,
  );
  const [billingCity, setBillingCity] = useState<string>(
    props.state.registerPage.location.billing.city.value,
  );
  const [billingStreet, setBillingStreet] = useState<string>(
    props.state.registerPage.location.billing.street.value,
  );
  const [billingPostal, setBillingPostal] = useState<string>(
    props.state.registerPage.location.billing.postal.value,
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
    props.state.registerPage.location.shipping.country.value,
  );
  const [shippingCity, setShippingCity] = useState<string>(
    props.state.registerPage.location.shipping.city.value,
  );
  const [shippingStreet, setShippingStreet] = useState<string>(
    props.state.registerPage.location.shipping.street.value,
  );
  const [shippingPostal, setShippingPostal] = useState<string>(
    props.state.registerPage.location.shipping.postal.value,
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
  const addDefaultAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.checked) {
      setShippingCountry(billingCountry);
      setShippingCity(billingCity);
      setShippingStreet(billingStreet);
      setShippingPostal(billingPostal);
      state.registerPage.location.shipping.country.value = billingCountry;
      state.registerPage.location.shipping.city.value = billingCity;
      state.registerPage.location.shipping.street.value = billingStreet;
      state.registerPage.location.shipping.postal.value = billingPostal;
      props.setState(state);
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
        <AddressField
          values={billing}
          state={props.state}
          setState={props.setState}
          type='billing'
        />
        <label className={s.label_input}>
          Make this address as the default?
          <input type='checkbox' name='address' onChange={(e) => addDefaultAddress(e)} />
        </label>
        <p className={s.address_name}>Shipping address</p>
        <AddressField
          values={shipping}
          state={props.state}
          setState={props.setState}
          type='shipping'
        />
        <div className={s.button_done} onClick={toggleLocation}>
          <p className={s.content}>Done</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
