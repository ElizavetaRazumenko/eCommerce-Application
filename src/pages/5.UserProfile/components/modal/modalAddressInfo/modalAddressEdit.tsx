import { useState } from 'react';

import address from './modalAddressEdit.module.scss';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { AddressType, HideModalType } from '../../../../../types/types';
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

  const customerBillingAddressId: string = customerData.addresses[0].id;

  const handChangeBillingAddressCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerBillingAddressCity(e.target.value);
  };
  const handChangeBillingAddressCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerBillingAddressCountry(e.target.value);
  };
  const handChangeBillingAddressStreetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerBillingAddressStreetName(e.target.value);
  };
  const handChangeBillingAddressPostalCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerBillingAddressPostalCode(e.target.value);
  };
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
  };

  const checkSubmit = async () => {
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
            <label htmlFor='bilingAddressCountry'>Country: </label>
            <input
              id='bilingAddressCountry'
              type='text'
              value={customerBillingAddressCountry}
              onChange={handChangeBillingAddressCountry}
            />
            <label htmlFor='bilingAddressStreetName'>Street name: </label>
            <input
              id='bilingAddressStreetName'
              type='text'
              value={customerBillingAddressStreetName}
              onChange={handChangeBillingAddressStreetName}
            />
            <label htmlFor='bilingAddressPostalCode'>Postal code: </label>
            <input
              id='bilingAddressPostalCode'
              type='text'
              value={customerBillingAddressPostalCode}
              onChange={handChangeBillingAddressPostalCode}
            />
          </div>
          <button onClick={checkSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddressEdit;
