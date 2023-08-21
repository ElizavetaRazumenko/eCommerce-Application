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
  const formShippingRef = React.useRef<HTMLFormElement>(null);
  const useDefaultRef = React.useRef<HTMLDivElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [makeOneAddress, setMakeOneAddress] = useState<boolean>(
    localStorage.getItem('makeOneAddress') === 'yes' ? true : false,
  );

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

  const oneAddressBehavior = () => {
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
          ? state.registerPage.location.billing.find((item) => item.type === 'city')!.value
          : field === 'street'
          ? state.registerPage.location.billing.find((item) => item.type === 'street')!.value
          : state.registerPage.location.billing.find((item) => item.type === 'postal')!.value;
      elem.isValid = state.registerPage.location.billing.find(
        (item) => item.type === field,
      )!.isValid;
    });
  };

  const changeOneAddress = () => {
    if (localStorage.getItem('makeOneAddress') !== 'yes') {
      setErrorMessage('');
      stateObj.setCountryS(stateObj.countryB);
      state.registerPage.location.shipping.find((item) => item.type === 'country')!.value =
        stateObj.countryB;
      oneAddressBehavior();
      stateObj.setErrorCityS('');
      stateObj.setErrorStreetS('');
      stateObj.setErrorPostalS('');
      state.registerPage.location.shipping.forEach((item) => (item.errorMessage = ''));
      localStorage.setItem('makeOneAddress', 'yes');
      setMakeOneAddress(true);
    } else {
      localStorage.setItem('makeOneAddress', 'no');
      setMakeOneAddress(false);
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

  const setDefaultBilling = () => {
    if (localStorage.getItem('defaultB') !== 'yes') {
      props.defaultSetting.setdDefaultBilling('yes');
      localStorage.setItem('defaultB', 'yes');
    } else {
      props.defaultSetting.setdDefaultBilling('no');
      localStorage.setItem('defaultB', 'no');
    }
  };

  const setDefaultShipping = () => {
    if (localStorage.getItem('defaultS') !== 'yes') {
      props.defaultSetting.setdDefaultShipping('yes');
      localStorage.setItem('defaultS', 'yes');
    } else {
      props.defaultSetting.setdDefaultShipping('no');
      localStorage.setItem('defaultS', 'no');
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
            if (localStorage.getItem('makeOneAddress') === 'yes') oneAddressBehavior();
          }}
        >
          <AddressField type='billing' isOneAddress={false} states={stateObj} />
        </form>
        <div className={s.label}>
          <span>use as default</span>
          <div
            className={
              props.defaultSetting.defaultBilling === 'yes'
                ? s.checkbox + ' ' + s.checked
                : s.checkbox
            }
            onClick={setDefaultBilling}
          />
        </div>

        <div className={s.label}>
          <span>make shipping address as billing</span>
          <div
            className={makeOneAddress ? s.checkbox + ' ' + s.checked : s.checkbox}
            onClick={changeOneAddress}
            ref={useDefaultRef}
          />
        </div>

        <p className={s.address_name}>Shipping address</p>
        <form onChange={() => setErrorMessage('')} ref={formShippingRef}>
          <AddressField type='shipping' isOneAddress={makeOneAddress} states={stateObj} />
        </form>
        <div className={s.label}>
          <span>use as default</span>
          <div
            className={
              props.defaultSetting.defaultShipping === 'yes'
                ? s.checkbox + ' ' + s.checked
                : s.checkbox
            }
            onClick={setDefaultShipping}
          />
        </div>
        <p className={s.error}>{errorMessage}</p>
        <div className={s.button_done} onClick={checkForm}>
          <p className={s.content}>Done</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
