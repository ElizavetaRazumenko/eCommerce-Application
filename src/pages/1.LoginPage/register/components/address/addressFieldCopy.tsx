// import React, { useState } from 'react';

// import s from './addressField.module.scss';

// import imageUrl from '../../../../../assets/png/downArrow.png';
// import state, { addLocationValue, makeValideDefault } from '../../../../../state/state';
// import { LocationValueType } from '../../../../../types/types';
// import LocationInput from '../locationInput/locationInput';

// const AddressField = (props: LocationValueType) => {
//   let defaultAddress = props.default;
//   const countryRef = React.useRef<HTMLDivElement>(null);
//   const addressRef = React.useRef<HTMLDivElement>(null);
//   const postalBillingRef = React.useRef<HTMLInputElement>(null);
//   const postalShippingRef = React.useRef<HTMLInputElement>(null);
//   const addressType = props.type;
//   const [errorMessageCity, setErrorMessageCity] = useState<string>(
//     state.registerPage.location[addressType].city.errorMessage,
//   );
//   const [errorMessageStreet, setErrorMessageStreet] = useState<string>(
//     state.registerPage.location[addressType].street.errorMessage,
//   );
//   const [errorMessagePostal, setErrorMessagePostal] = useState<string>(
//     state.registerPage.location[addressType].postal.errorMessage,
//   );

//   const toggleCountry = () => {
//     countryRef.current?.classList.toggle(s.active);
//     addressRef.current?.classList.toggle(s.hidden);
//   };

//   const changeCountry = (country: string) => {
//     toggleCountry();
//     state.registerPage.location[props.type].country.value = country;
//     props.values.setCountry(country);
//   };

//   const changeAddressValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const target = e.target as HTMLInputElement;
//     if (defaultAddress) {
//       makeValideDefault();
//     }
//     if (target.id && (target.id === 'city' || target.id === 'street' || target.id === 'postal')) {
//       addLocationValue(props.type, target.id, target.value);
//       if (target.id === 'city') {
//         const value = state.registerPage.location[props.type].city.value;
//         props.values.setCity(value);
//         const error = state.registerPage.location[props.type].city.errorMessage;
//         setErrorMessageCity(error);
//       } else if (target.id === 'street') {
//         const value = state.registerPage.location[props.type].street.value;
//         props.values.setStreet(value);
//         const error = state.registerPage.location[props.type].street.errorMessage;
//         setErrorMessageStreet(error);
//       } else {
//         const value = state.registerPage.location[props.type].postal.value;
//         props.values.setPostal(value);
//         const error = state.registerPage.location[props.type].postal.errorMessage;
//         setErrorMessagePostal(error);
//       }
//     }
//   };
//   return (
//     <div className={s.address_wrapper}>
//       <div
//         className={props.default ? s.default_contry : s.country}
//         ref={countryRef}
//         onClick={(e) => {
//           if (!props.default) toggleCountry();
//         }}
//       >
//         <p className={s.content}>{props.values.country}</p>
//         <img src={imageUrl} alt='arrow' className={s.arrow} />
//       </div>
//       <div className={s.country_fields + ' ' + s.hidden} ref={addressRef}>
//         <p className={s.country_name} onClick={() => changeCountry('Italy')}>
//           Italy
//         </p>
//         <p className={s.country_name} onClick={() => changeCountry('Spain')}>
//           Spain
//         </p>
//       </div>
//       <LocationInput
//         id='city'
//         plshldr='City'
//         value={props.values.city}
//         setValue={props.values.setCity}
//         addressType={props.type}
//       />
//       <LocationInput
//         id='street'
//         plshldr='Street'
//         value={props.values.street}
//         setValue={props.values.setStreet}
//         addressType={props.type}
//       />
//       <LocationInput
//         id='postal'
//         plshldr='Postal code'
//         value={props.values.postal}
//         setValue={props.values.setPostal}
//         addressType={props.type}
//       />
//       <input
//         id='city'
//         name='city'
//         className={
//           props.default
//             ? s.default + ' ' + s.input
//             : errorMessageStreet === ''
//             ? s.input
//             : s.input + ' ' + s.invalid
//         }
//         type='text'
//         placeholder='City'
//         value={props.values.city}
//         onChange={changeAddressValue}
//       ></input>
//       <p className={s.error_message}>{errorMessageCity}</p>
//       <input
//         id='street'
//         name='street'
//         className={
//           props.default
//             ? s.default + ' ' + s.input
//             : errorMessageStreet === ''
//             ? s.input
//             : s.input + ' ' + s.invalid
//         }
//         type='text'
//         placeholder='Street'
//         value={props.values.street}
//         onChange={changeAddressValue}
//       ></input>
//       <p className={s.error_message}>{errorMessageStreet}</p>
//       <input
//         id='postal'
//         name='postal'
//         className={
//           props.default
//             ? s.default + ' ' + s.input
//             : errorMessageStreet === ''
//             ? s.input
//             : s.input + ' ' + s.invalid
//         }
//         type='text'
//         placeholder='Postal code'
//         value={props.values.postal}
//         onChange={changeAddressValue}
//         ref={props.type === 'billing' ? postalBillingRef : postalShippingRef}
//       ></input>
//       <p className={s.error_message}>{errorMessagePostal}</p>
//     </div>
//   );
// };

export const a = 1;
