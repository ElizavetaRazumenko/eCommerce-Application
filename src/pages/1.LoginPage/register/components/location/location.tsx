/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useState } from 'react';

import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';
import state from '../../../../../state/state';
import { LocationPropsType } from '../../../../../types/types';
import AddressField from '../address/addressField';

const Location = (props: LocationPropsType) => {
  const locationWrapperRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const formShippingRef = React.useRef<HTMLFormElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOneAddress, setIsOneAddress] = useState<boolean>(false);

  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
  };

  const [countryNameB, setCountryNameB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'country')!.value,
  );
  const [countryNameS, setCountryNameS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'country')!.value,
  );
  const [inputCityValueB, setCityValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'city')!.value,
  );
  const [inputErrorCityValueB, setErrorCityValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'city')!.errorMessage,
  );
  const [inputCityValueS, setCityValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'city')!.value,
  );
  const [inputErrorCityValueS, setErrorCityValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'city')!.errorMessage,
  );
  const [inputStreetValueB, setStreetValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'street')!.value,
  );
  const [inputErrorStreetValueB, setErrorStreetValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'street')!.errorMessage,
  );
  const [inputStreetValueS, setStreetValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'street')!.value,
  );
  const [inputErrorStreetValueS, setErrorStreetValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'street')!.errorMessage,
  );
  const [inputPostalValueB, setPostalValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'postal')!.value,
  );
  const [inputErrorPostalValueB, setErrorPostalValueB] = useState<string>(
    state.registerPage.location.billing.find((item) => item.type === 'postal')!.errorMessage,
  );
  const [inputPostalyValueS, setPostalValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'postal')!.value,
  );
  const [inputErrorPostalValueS, setErrorPostalValueS] = useState<string>(
    state.registerPage.location.shipping.find((item) => item.type === 'postal')!.errorMessage,
  );

  const stateObj = {
    countryB: countryNameB,
    setCountryB: setCountryNameB,
    countryS: countryNameS,
    setCountryS: setCountryNameS,

    inputCityB: inputCityValueB,
    setCityB: setCityValueB,
    errorCityB: inputErrorCityValueB,
    setErrorCityB: setErrorCityValueB,

    inputCityS: inputCityValueS,
    setCityS: setCityValueS,
    errorCityS: inputErrorCityValueS,
    setErrorCityS: setErrorCityValueS,

    inputStreetB: inputStreetValueB,
    setStreetB: setStreetValueB,
    errorStreetB: inputErrorStreetValueB,
    setErrorStreetB: setErrorStreetValueB,

    inputStreetS: inputStreetValueS,
    setStreetS: setStreetValueS,
    errorStreetS: inputErrorStreetValueS,
    setErrorStreetS: setErrorStreetValueS,

    inputPostalB: inputPostalValueB,
    setPostalB: setPostalValueB,
    errorPostalB: inputErrorPostalValueB,
    setErrorPostalB: setErrorPostalValueB,

    inputPostalS: inputPostalyValueS,
    setPostalS: setPostalValueS,
    errorPostalS: inputErrorPostalValueS,
    setErrorPostalS: setErrorPostalValueS,
  };

  const defailtAddressBehavior = () => {
    stateObj.setCityS(
      state.registerPage.location.billing.find((item) => item.type === 'city')!.value,
    );
    stateObj.setStreetS(
      state.registerPage.location.billing.find((item) => item.type === 'street')!.value,
    );
    stateObj.setPostalS(
      state.registerPage.location.billing.find((item) => item.type === 'postal')!.value,
    );
    const fields = ['city', 'street', 'postal'];
    fields.forEach((field) => {
      const elem = state.registerPage.location.shipping.find((item) => item.type === field)!;
      elem.value =
        field === 'city'
          ? stateObj.inputCityB
          : field === 'street'
          ? stateObj.inputStreetB
          : stateObj.inputPostalB;
      elem.isValid = state.registerPage.location.billing.find(
        (item) => item.type === field,
      )!.isValid;
    });
  };

  const changeDefaultAddress = () => {
    setIsOneAddress(checkboxRef.current!.checked);
    setErrorMessage('');
    if (!isOneAddress) {
      stateObj.setCountryS(stateObj.countryB);
      state.registerPage.location.shipping.find((item) => item.type === 'country')!.value =
        stateObj.countryB;
      defailtAddressBehavior();
      stateObj.setErrorCityS('');
      stateObj.setErrorStreetS('');
      stateObj.setErrorPostalS('');
      state.registerPage.location.shipping.forEach((item) => (item.errorMessage = ''));
    }
  };

  const checkForm = () => {
    const isValideBilling = state.registerPage.location.billing.find((item) => !item.isValid)!;
    const isValideShipping = state.registerPage.location.shipping.find((item) => !item.isValid)!;
    if (isValideBilling) {
      if (isValideBilling.value === '') {
        setErrorMessage(`empty field '${isValideBilling.type}' in billing address`);
      } else {
        setErrorMessage(`incorrect field '${isValideBilling.type}' in billing address`);
      }
    } else if (isValideShipping) {
      if (isValideShipping.value === '') {
        setErrorMessage(`empty field '${isValideShipping.type}' in shipping address`);
      } else {
        setErrorMessage(`incomplete field '${isValideShipping.type}' in shipping address`);
      }
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
        <form
          onChange={() => {
            setErrorMessage('');
            if (isOneAddress) defailtAddressBehavior();
          }}
        >
          <AddressField
            type='billing'
            isOneAddress={false}
            states={stateObj}
            toggle={!isOneAddress}
          />
        </form>
        <label className={s.label_input}>
          use as default
          <input type='checkbox' name='default_billing' />
        </label>
        <label className={s.label_input}>
          use for shipping address
          <input
            type='checkbox'
            name='one_adress'
            onChange={changeDefaultAddress}
            ref={checkboxRef}
          />
        </label>
        <p className={s.address_name}>Shipping address</p>
        <form onChange={() => setErrorMessage('')} ref={formShippingRef}>
          <AddressField type='shipping' isOneAddress={isOneAddress} states={stateObj} />
        </form>
        <label className={s.label_input}>
          use as default
          <input type='checkbox' name='default_shipping' />
        </label>
        <p className={s.error}>{errorMessage}</p>
        <div className={s.button_done} onClick={checkForm}>
          <p className={s.content}>Done</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
