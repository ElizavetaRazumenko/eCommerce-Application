import { useState } from 'react';

import newAddress from './modalAddNewAddress.module.scss';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { AddressType, HideModalType } from '../../../../../types/types';
import modal from '../modal.module.scss';

const ModalAddNewAddress: React.FC<HideModalType> = ({
  onHideModal,
  customerData,
  setNewAddress,
  setNewAddress2,
}) => {
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handAddStreetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreetName(e.target.value);
  };
  const handAddCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handAddCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const handAddPostalCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
  };
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
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

  const checkSubmit = async (addressType: string) => {
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
                  streetName: streetName,
                  postalCode: postalCode,
                  city: city,
                  country: country,
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
                onChange={handAddCity}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <label htmlFor='bilingAddressCountry'>Country: </label>
              <input
                id='bilingAddressCountry'
                type='text'
                onChange={handAddCountry}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <label htmlFor='bilingAddressStreetName'>Street name: </label>
              <input
                id='bilingAddressStreetName'
                type='text'
                onChange={handAddStreetName}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
              <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
              <input
                id='bilingAddressPostalCode'
                type='text'
                onChange={handAddPostalCode}
                className={newAddress.input + ' ' + newAddress.input_left}
              />
            </div>
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
                onChange={handAddCity}
                className={newAddress.input}
              />
              <label htmlFor='bilingAddressCountry'>Country: </label>
              <input
                id='bilingAddressCountry'
                type='text'
                onChange={handAddCountry}
                className={newAddress.input}
              />
              <label htmlFor='bilingAddressStreetName'>Street name: </label>
              <input
                id='bilingAddressStreetName'
                type='text'
                onChange={handAddStreetName}
                className={newAddress.input}
              />
              <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
              <input
                id='bilingAddressPostalCode'
                type='text'
                onChange={handAddPostalCode}
                className={newAddress.input}
              />
            </div>
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
