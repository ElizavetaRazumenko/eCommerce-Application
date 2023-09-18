import { useState } from 'react';

import newAddress from './modalAddNewAddress.module.scss';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { AddressType, HideModalType } from '../../../../../types/types';
import { checkCity, checkStreet, checkCountry, checkPostalCode } from '../../../profileUtils/utils';
import modal from '../modal.module.scss';

const ModalAddNewAddress: React.FC<HideModalType> = ({
  onHideModal,
  customerData,
  setNewAddress,
  setNewAddress2,
}) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
  };
  //                                      BILLING REALIZATION
  const [streetNameB, setStreetNameB] = useState('');
  const [cityB, setCityB] = useState('');
  const [countryB, setCountryB] = useState('');
  const [postalCodeB, setPostalCodeB] = useState('');

  const [errorOfCountryB, setErrorOfCountryB] = useState('');
  const [errorOfCityB, setErrorOfCityB] = useState('');
  const [errorOfStreetB, setErrorOfStreetB] = useState('');
  const [errorOfPostalB, setErrorOfPostalB] = useState('');
  const [errorOfPageB, setErrorOfPageB] = useState('');

  const handAddStreetNameB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfStreetB('');
    setErrorOfPageB('');
    checkStreet(e.target.value, setErrorOfStreetB);
    setStreetNameB(e.target.value);
  };
  const handAddCityB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfCountryB('');
    setErrorOfPageB('');
    checkCity(e.target.value, setErrorOfCityB);
    setCityB(e.target.value);
  };
  const handAddCountryB = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('CountryB', e.target.value);
    setErrorOfCityB('');
    setErrorOfPageB('');
    checkCountry(e.target.value, setErrorOfCountryB);
    setCountryB(e.target.value);
  };
  const handAddPostalCodeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfPostalB('');
    setErrorOfPageB('');
    checkPostalCode(e.target.value, setErrorOfPostalB, localStorage.getItem('CountryB') || '');
    setPostalCodeB(e.target.value);
  };

  //                                      SHIPPING REALIZATION
  const [streetNameS, setStreetNameS] = useState('');
  const [cityS, setCityS] = useState('');
  const [countryS, setCountryS] = useState('');
  const [postalCodeS, setPostalCodeS] = useState('');

  const [errorOfCountryS, setErrorOfCountryS] = useState('');
  const [errorOfCityS, setErrorOfCityS] = useState('');
  const [errorOfStreetS, setErrorOfStreetS] = useState('');
  const [errorOfPostalS, setErrorOfPostalS] = useState('');
  const [errorOfPageS, setErrorOfPageS] = useState('');

  const handAddStreetNameS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfStreetS('');
    setErrorOfPageS('');
    checkStreet(e.target.value, setErrorOfStreetS);
    setStreetNameS(e.target.value);
  };
  const handAddCityS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfCountryS('');
    setErrorOfPageS('');
    checkCity(e.target.value, setErrorOfCityS);
    setCityS(e.target.value);
  };
  const handAddCountryS = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('CountryS', e.target.value);
    setErrorOfCityS('');
    setErrorOfPageS('');
    checkCountry(e.target.value, setErrorOfCountryS);
    setCountryS(e.target.value);
  };
  const handAddPostalCodeS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfPostalS('');
    setErrorOfPageS('');
    checkPostalCode(e.target.value, setErrorOfPostalS, localStorage.getItem('CountryS') || '');
    setPostalCodeS(e.target.value);
  };
  const addBillingAddressId = async (id: string) => {
    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerData.id ? customerData.id : '' })
        .post({
          body: {
            version: customerData.version ? customerData.version + 1 : 0,
            actions: [
              {
                action: 'addBillingAddressId',
                addressId: id,
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));

      return data;
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const addShippingAddressId = async (id: string) => {
    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerData.id ? customerData.id : '' })
        .post({
          body: {
            version: customerData.version ? customerData.version + 1 : 0,
            actions: [
              {
                action: 'addShippingAddressId',
                addressId: id,
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));

      return data;
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const checkSubmit = async (addressType: 'billing' | 'shipping') => {
    const errors =
      addressType === 'billing'
        ? [errorOfCountryB, errorOfCityB, errorOfStreetB, errorOfPostalB]
        : [errorOfCountryS, errorOfCityS, errorOfStreetS, errorOfPostalS];
    if (errors.every((el) => el === '')) {
      try {
        const response = await getApiRoot()
          .customers()
          .withId({ ID: customerData.id ? customerData.id : '' })
          .post({
            body: {
              version: customerData.version ? customerData.version : 0,
              actions: [
                {
                  action: 'addAddress',
                  address: {
                    streetName: addressType === 'billing' ? streetNameB : streetNameS,
                    postalCode: addressType === 'billing' ? postalCodeB : postalCodeS,
                    city: addressType === 'billing' ? cityB : cityS,
                    country: addressType === 'billing' ? countryB : countryS,
                  },
                },
              ],
            },
          })
          .execute();
        const data = response.body;
        const id: string | undefined = data.addresses[data.addresses.length - 1].id;
        if (addressType === 'billing') {
          const actualData: any = await addBillingAddressId(id ? id : '');
          const resultData = { customer: { ...actualData } };
          localStorage.setItem('userInfo', JSON.stringify(resultData));
          if (setNewAddress) {
            const addressList = actualData.addresses as AddressType[];
            const billingId = actualData.billingAddressIds as string[];
            const billingAddress = addressList.filter((el) => billingId.includes(el.id))!;
            setNewAddress(billingAddress);
          }
        } else {
          const actualData: any = await addShippingAddressId(id ? id : '');
          const resultData = { customer: { ...actualData } };
          localStorage.setItem('userInfo', JSON.stringify(resultData));
          if (setNewAddress2) {
            const addressList = actualData.addresses as AddressType[];
            const shippingId = actualData.shippingAddressIds as string[];
            const shippingAddress = addressList.filter((el) => shippingId.includes(el.id))!;
            setNewAddress2(shippingAddress);
          }
        }
        onHideModal();
      } catch (error) {
        console.error('Error updating customer:', error);
      }
    } else {
      addressType === 'billing'
        ? setErrorOfPageB('some fields are invalid')
        : setErrorOfPageS('some fields are invalid');
    }
  };

  return (
    <div className={modal.modalBackground} onClick={handleBackgroundClick}>
      <div className={modal.modalActive}>
        <div className={modal.modalClose} onClick={onHideModal}>
          <img src={closeIcon} alt='close-icon' />
        </div>
        <div className={modal.modalWindow_wrapper}>
          <div className={modal.modalWindow}>
            <div className={newAddress.address_info}>
              <h3 className={newAddress.address_info_title}> Billing</h3>
              <label htmlFor='bilingAddressCity'>City: </label>
              <input
                id='bilingAddressCity'
                type='text'
                onChange={handAddCityB}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <span className={modal.error_message}>{errorOfCityB}</span>
              <label htmlFor='bilingAddressCountry'>Country: </label>
              <input
                id='bilingAddressCountry'
                type='text'
                onChange={handAddCountryB}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <span className={modal.error_message}>{errorOfCountryB}</span>
              <label htmlFor='bilingAddressStreetName'>Street name: </label>
              <input
                id='bilingAddressStreetName'
                type='text'
                onChange={handAddStreetNameB}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <span className={modal.error_message}>{errorOfStreetB}</span>
              <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
              <input
                id='bilingAddressPostalCode'
                type='text'
                onChange={handAddPostalCodeB}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <span className={modal.error_message}>{errorOfPostalB}</span>
            </div>
            <span className={modal.error_message}>{errorOfPageB}</span>
            <button onClick={() => checkSubmit('billing')} className={newAddress.btn_save}>
              Save Billing
            </button>
          </div>
          <div className={modal.modalWindow}>
            <div className={newAddress.address_info}>
              <h3 className={newAddress.address_info_title}> Shipping</h3>
              <label htmlFor='bilingAddressCity'>City: </label>
              <input
                id='bilingAddressCity'
                type='text'
                onChange={handAddCityS}
                className={newAddress.input}
              />
              <span className={modal.error_message}>{errorOfCityS}</span>
              <label htmlFor='bilingAddressCountry'>Country: </label>
              <input
                id='bilingAddressCountry'
                type='text'
                onChange={handAddCountryS}
                className={newAddress.input}
              />
              <span className={modal.error_message}>{errorOfCountryS}</span>
              <label htmlFor='bilingAddressStreetName'>Street name: </label>
              <input
                id='bilingAddressStreetName'
                type='text'
                onChange={handAddStreetNameS}
                className={newAddress.input}
              />
              <span className={modal.error_message}>{errorOfStreetS}</span>
              <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
              <input
                id='bilingAddressPostalCode'
                type='text'
                onChange={handAddPostalCodeS}
                className={newAddress.input}
              />
              <span className={modal.error_message}>{errorOfPostalS}</span>
            </div>
            <span className={modal.error_message}>{errorOfPageS}</span>
            <button onClick={() => checkSubmit('shipping')} className={newAddress.btn_save}>
              Save Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddNewAddress;
