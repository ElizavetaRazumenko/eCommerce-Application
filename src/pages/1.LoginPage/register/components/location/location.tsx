import React from 'react';

import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';
import AddressField from '../address/addressField';

const Location = () => {
  const locationWrapperRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);

  const toggleLocation = () => {
    locationRef.current?.classList.toggle(s.active);
    locationWrapperRef.current?.classList.toggle(s.hidden);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.location_select} ref={locationRef} onClick={toggleLocation}>
        <p className={s.content}>Select address</p>
        <img src={imageurl} alt='arrow' className={s.arrow} />
      </div>
      <div className={s.location_wrapper + ' ' + s.hidden} ref={locationWrapperRef}>
        <p className={s.address_name}>Billing address</p>
        <AddressField />
        <p className={s.address_name}>Shipping address</p>
        <AddressField />
      </div>
    </div>
  );
};

export default Location;
