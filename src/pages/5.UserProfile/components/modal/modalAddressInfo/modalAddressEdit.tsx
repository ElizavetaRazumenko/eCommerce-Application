import { useState } from 'react';

import address from './modalAddressEdit.module.scss';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { AddressType, HideModalType } from '../../../../../types/types';
import { checkCity, checkStreet, checkCountry, checkPostalCode } from '../../../profileUtils/utils';
import modal from '../modal.module.scss';

const ModalAddressEdit: React.FC<HideModalType> = ({
  onHideModal,
  customerData,
  setNewAddress,
  setNewAddress2,
}) => {
  const [customerBillingAddressCity, setCustomerBillingAddressCity] = useState(
    customerData.addresses[0].city,
  );
  const [customerBillingAddressCountry, setCustomerBillingAddressCountry] = useState(
    customerData.addresses[0].country,
  );
  const [customerBillingAddressStreetName, setCustomerBillingAddressStreetName] = useState(
    customerData.addresses[0].streetName,
  );
  const [customerBillingAddressPostalCode, setCustomerBillingAddressPostalCode] = useState(
    customerData.addresses[0].postalCode,
  );

  const [errorOfCountry, setErrorOfCountry] = useState('');
  const [errorOfCity, setErrorOfCity] = useState('');
  const [errorOfStreet, setErrorOfStreet] = useState('');
  const [errorOfPostal, setErrorOfPostal] = useState('');
  const [errorOfPage, setErrorOfPage] = useState('');
  let countryValue = '';
  const customerBillingAddressId: string = customerData.addresses[0].id;

  const handChangeBillingAddressCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfCity('');
    setErrorOfPage('');
    checkCity(e.target.value, setErrorOfCity);
    setCustomerBillingAddressCity(e.target.value);
  };
  const handChangeBillingAddressCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfCountry('');
    setErrorOfPage('');
    checkCountry(e.target.value, setErrorOfCountry);
    setCustomerBillingAddressCountry(e.target.value);
    countryValue = e.target.value;
  };
  const handChangeBillingAddressStreetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfStreet('');
    setErrorOfPage('');
    checkStreet(e.target.value, setErrorOfStreet);
    setCustomerBillingAddressStreetName(e.target.value);
  };
  const handChangeBillingAddressPostalCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOfPostal('');
    setErrorOfPage('');
    checkPostalCode(e.target.value, setErrorOfPostal, countryValue);
    setCustomerBillingAddressPostalCode(e.target.value);
  };
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
  };

  const checkSubmit = async () => {
    const errors = [errorOfCountry, errorOfCity, errorOfStreet, errorOfPostal];
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
                  action: 'changeAddress',
                  addressId: customerBillingAddressId ? customerBillingAddressId : '',
                  address: {
                    streetName: customerBillingAddressStreetName,
                    postalCode: customerBillingAddressPostalCode,
                    city: customerBillingAddressCity,
                    country: customerBillingAddressCountry,
                  },
                },
              ],
            },
          })
          .execute();
        const data = response.body;
        const resultData = { customer: { ...data } };
        localStorage.setItem('userInfo', JSON.stringify(resultData));
        if (setNewAddress && setNewAddress2) {
          const updateAddressesList = resultData.customer.addresses as AddressType[];
          const shippId = resultData.customer.shippingAddressIds;
          const billId = resultData.customer.billingAddressIds;
          const updateShippingList = updateAddressesList.filter((el) => shippId?.includes(el.id));
          const updateBillingList = updateAddressesList.filter((el) => billId?.includes(el.id));
          setNewAddress(updateBillingList);
          setNewAddress2(updateShippingList);
        }
        onHideModal();
      } catch (error) {
        console.error('Error updating customer:', error);
      }
    } else {
      setErrorOfPage('some fields are invalid');
    }
  };

  return (
    <div className={modal.modalBackground} onClick={handleBackgroundClick}>
      <div className={modal.modalActive}>
        <div className={modal.modalClose} onClick={onHideModal}>
          <img src={closeIcon} alt='close-icon' />
        </div>
        <div className={modal.modalWindow}>
          <div className={address.address_info}>
            <h3 className={address.address_info_title}> Address Information</h3>
            <label htmlFor='bilingAddressCity'>City: </label>
            <input
              id='bilingAddressCity'
              type='text'
              value={customerBillingAddressCity}
              onChange={handChangeBillingAddressCity}
            />
            <span className={modal.error_message}>{errorOfCity}</span>
            <label htmlFor='bilingAddressCountry'>Country: </label>
            <input
              id='bilingAddressCountry'
              type='text'
              value={customerBillingAddressCountry}
              onChange={handChangeBillingAddressCountry}
            />
            <span className={modal.error_message}>{errorOfCountry}</span>
            <label htmlFor='bilingAddressStreetName'>Street name: </label>
            <input
              id='bilingAddressStreetName'
              type='text'
              value={customerBillingAddressStreetName}
              onChange={handChangeBillingAddressStreetName}
            />
            <span className={modal.error_message}>{errorOfStreet}</span>
            <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
            <input
              id='bilingAddressPostalCode'
              type='text'
              value={customerBillingAddressPostalCode}
              onChange={handChangeBillingAddressPostalCode}
            />
            <span className={modal.error_message}>{errorOfPostal}</span>
          </div>
          <span className={modal.error_message}>{errorOfPage}</span>
          <button onClick={checkSubmit} className={address.btn_submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddressEdit;
