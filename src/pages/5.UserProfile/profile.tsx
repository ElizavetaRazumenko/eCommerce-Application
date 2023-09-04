
import { ChangeEvent, useEffect, useState } from 'react';
import { useState } from 'react';

import ModalAddNewAddress from './components/modal/modalAddNewAddress/modalAddNewAddress';
import ModalAddressEdit from './components/modal/modalAddressInfo/modalAddressEdit';
import ModalPersonalDataEdit from './components/modal/modalPersonInfo/ModalPersonalDataEdit';
import s from './profile.module.scss';

import { getApiRoot } from '../../shared';
import {
  AddressType,
  CustomerAddressType,
  CustomerAddressesType,
  CustomerDataType,
  UserPropsType,
} from '../../types/types';

const ProfilePage = (props: UserPropsType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState('ModalPersonalDataEdit');

  const customer = localStorage.getItem('userInfo');
  let customerAddresses: CustomerAddressesType = null;
  let defaultBillingAddressId: string | null | undefined = null;
  let defaultShippingAddressId: string | null = null;
  let firstName: string | null = null;
  let lastName: string | null = null;
  let email: string | null = null;
  let dateBirth: string | null = null;
  let customerData: CustomerDataType = {
    addresses: [],
    defaultBillingAddressId: null,
    shippingAddressIds: [],
    firstName: null,
    lastName: null,
    email: null,
    dateBirth: null,
    id: null,
    version: null,
  };

  if (customer) {
    customerAddresses = JSON.parse(customer).customer.addresses;
    defaultBillingAddressId = JSON.parse(customer).customer.defaultBillingAddressId;
    defaultShippingAddressId = JSON.parse(customer).customer.defaultShippingAddressId;
    firstName = JSON.parse(customer).customer.firstName;
    lastName = JSON.parse(customer).customer.lastName;
    email = JSON.parse(customer).customer.email;
    dateBirth = JSON.parse(customer).customer.dateOfBirth;

    const parsedCustomer = JSON.parse(customer).customer;
    customerData = {
      addresses: parsedCustomer.addresses,
      defaultBillingAddressId: parsedCustomer.defaultBillingAddressId,
      shippingAddressIds: parsedCustomer.shippingAddressIds[0],
      firstName: parsedCustomer.firstName,
      lastName: parsedCustomer.lastName,
      email: parsedCustomer.email,
      dateBirth: parsedCustomer.dateOfBirth,
      id: parsedCustomer.id,
      version: parsedCustomer.version,
    };
  }
  const [selectedAddress, setSelectedAddress] = useState(customerData);

  function getCurrentAge() {
    if (dateBirth) {
      const birthDate = new Date(dateBirth);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    }
  }

  let billingAddress: AddressType[] = [
    {
      city: '',
      country: '',
      id: '',
      key: '',
      postalCode: '',
      streetName: '',
    },
  ];

  let shippingAddress: AddressType[] = Object.assign({}, billingAddress);

  // let defaultBilling: AddressType[] = Object.assign({}, billingAddress);
  let defaultBilling: AddressType[] = [];

  // let defaultShipping: AddressType[] = Object.assign({}, billingAddress);
  let defaultShipping: AddressType[] = [];

  if (customerAddresses) {
    const billingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .billingAddressIds;
    billingAddress = customerAddresses.filter((el) => billingAddressId.includes(el.id))!;

    const shippingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .shippingAddressIds;
    shippingAddress = customerAddresses.filter((el) => shippingAddressId.includes(el.id))!;

    if (defaultBillingAddressId) {
      defaultBilling = customerAddresses.filter((el) => defaultBillingAddressId?.includes(el.id));
    }

    if (defaultShippingAddressId) {
      defaultShipping = customerAddresses.filter((el) => el.id === defaultShippingAddressId)!;
    }
  }

  const initialState = {
    checkboxBill: localStorage.getItem('checkboxBill') as string,
    checkboxShipp: localStorage.getItem('checkboxShipp') as string,
  };

  const [addresses, setAddresses] = useState(billingAddress);
  const [addresses2, setAddresses2] = useState(shippingAddress);
  const [defBillAddress, setDefBillAddress] = useState(defaultBilling);
  const [defShipping, setShippingAddress] = useState(defaultShipping);
  const [checkboxes, setCheckboxes] = useState(initialState);

  useEffect(() => {
    Object.entries(checkboxes).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }, [checkboxes]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCheckboxes((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const showModalPersnal = () => {
    setCurrentModal('ModalPersonalDataEdit');
    setModalVisible(true);
  };
  const showModalAddress = (addresses: CustomerAddressType[]) => {
    setCurrentModal('ModalAddressEdit');
    setModalVisible(true);
    const updatedCustomerData: CustomerDataType = { ...customerData, addresses };
    setSelectedAddress(updatedCustomerData);
  };
  const showModalAddNewAddress = () => {
    setCurrentModal('ModalAddNewAddress');
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const hendleCheckboxChangeDefaultBillingAddress = (
    id: string,
    updateAddressList: AddressType[],
  ) => {
    const defBillingAddress = updateAddressList?.find((address) => address.id === id);
    if (defBillingAddress) {
      setDefBillAddress([defBillingAddress]);
    }
  };

  const hendleCheckboxChangeDefaultShippingAddress = (
    id: string,
    updateAddressList: AddressType[],
  ) => {
    const defBillingAddress = updateAddressList?.find((address) => address.id === id);
    if (defBillingAddress) {
      setShippingAddress([defBillingAddress]);
    }
  };

  const addDefBillingAddressId = async (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerData.id ? customerData.id : '' })
        .post({
          body: {
            version: customerData.version ? customerData.version : 0,
            actions: [
              {
                action: 'setDefaultBillingAddress',
                addressId: id,
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));
      const updateAddressList = data.addresses as AddressType[];
      hendleCheckboxChangeDefaultBillingAddress(id, updateAddressList);
      handleCheckboxChange(event);
      return data;
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const addDefShippingAddressId = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerData.id ? customerData.id : '' })
        .post({
          body: {
            version: customerData.version ? customerData.version : 0,
            actions: [
              {
                action: 'setDefaultShippingAddress',
                addressId: id,
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));
      const updateAddressList = data.addresses as AddressType[];
      hendleCheckboxChangeDefaultShippingAddress(id, updateAddressList);
      handleCheckboxChange(event);
      return data;
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const deleteAddress = async (id: string) => {
    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerData.id ? customerData.id : '' })
        .post({
          body: {
            version: customerData.version ? customerData.version : 0,
            actions: [
              {
                action: 'removeAddress',
                addressId: id ? id : '',
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));
      if (setAddresses && setAddresses2) {
        const updateAddressesList = resultData.customer.addresses as AddressType[];
        const shippId = resultData.customer.shippingAddressIds;
        const billId = resultData.customer.billingAddressIds;
        const updateShippingList = updateAddressesList.filter((el) => shippId?.includes(el.id));
        const updateBillingList = updateAddressesList.filter((el) => billId?.includes(el.id));
        setAddresses(updateBillingList);
        setAddresses2(updateShippingList);
      }
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <>
      {currentModal === 'ModalPersonalDataEdit'
        ? modalVisible && (
            <ModalPersonalDataEdit onHideModal={hideModal} customerData={customerData} />
          )
        : currentModal === 'ModalAddNewAddress'
        ? modalVisible && (
            <ModalAddNewAddress
              onHideModal={hideModal}
              customerData={customerData}
              setNewAddress={setAddresses}
              setNewAddress2={setAddresses2}
            />
          )
        : modalVisible && (
            <ModalAddressEdit
              onHideModal={hideModal}
              customerData={selectedAddress}
              setNewAddress={setAddresses}
              setNewAddress2={setAddresses2}
            />
          )}
      <div className={s.profile_wrapper}>
        <h1 className={s.welcome_title}>User Profile</h1>
        <div className={s.welcome_container}>
          <div className={s.user_info}>
            <div className={s.user_info_personal}>
              <div className={s.user_info_img_name}>
                <div className={s.user_image_box}>
                  <div className={s.user_image}></div>
                </div>
                <div className={s.user_name_box}>
                  <span className={s.user_name}>{firstName}</span>
                  <span className={s.user_last_name}>{lastName}</span>
                  <span className={s.user_email}>{email}</span>
                  <span className={s.user_birth_day}>{`${getCurrentAge()} y.o.`}</span>
                </div>
              </div>
              <button className={s.edit_button} onClick={showModalPersnal}>
                Edit
              </button>
            </div>
            <div className={s.user_info_address}>
              {addresses.map((billAddress) => {
                const id = billAddress.id;
                return (
                  <p
                    key={id}
                    className={props.userState === 'Login' ? s.hidden : s.welcome_content}
                  >
                    <span className={s.span}>Billing address:</span>
                    {` ${billAddress.country === 'IT' ? 'Italy' : 'Spain'} ${billAddress.city} st.${
                      billAddress.streetName
                    }, ${billAddress.postalCode}`}
                    <span className={s.settings}>
                      <span
                        className={s.edit_icon}
                        onClick={() => showModalAddress([billAddress])}
                      ></span>
                      <span
                        className={s.delete_icon}
                        onClick={() => deleteAddress(billAddress.id)}
                      ></span>
                      <input
                        type='checkbox'
                        checked={isCheckedDefBillAddress === billAddress.id}
                        value={billAddress.id}
                        onChange={() => addDefBillingAddressId(billAddress.id)}
                        className={s.input_profile}
                      />
                    </span>
                  </p>
                );
              })}

              {addresses2.map((shippAddress) => {
                return (
                  <p
                    key={shippAddress.id}
                    className={props.userState === 'Login' ? s.hidden : s.welcome_content}
                  >
                    <span className={s.span}>Shipping address:</span>
                    {` ${shippAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
                      shippAddress.city
                    } st.${shippAddress.streetName}, ${shippAddress.postalCode}`}
                    <span className={s.settings}>
                      <span
                        className={s.edit_icon}
                        onClick={() => showModalAddress([shippAddress])}
                      ></span>
                      <span
                        className={s.delete_icon}
                        onClick={() => deleteAddress(shippAddress.id)}
                      ></span>
                      <input
                        type='checkbox'
                        checked={isCheckedDefShippAddress === shippAddress.id}
                        value={shippAddress.id}
                        onChange={() => addDefShippingAddressId(shippAddress.id)}
                        className={s.input_profile}
                      />
                    </span>
                  </p>
                );
              })}

              {defBillAddress.length !== 0 ? (
                defBillAddress.map((defBillAddress) => {
                  return (
                    <p
                      key={defBillAddress.id}
                      className={
                        props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
                      }
                    >
                      <span className={s.span}>Default Billing address:</span>
                      {defaultBillingAddressId
                        ? ` ${defBillAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
                            defBillAddress.city
                          } st.${defBillAddress.streetName}, ${defBillAddress.postalCode}`
                        : ' was not selected'}
                    </p>
                  );
                })
              ) : (
                <p
                  className={
                    props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
                  }
                >
                  <span className={s.span}>Default Billing address:</span>was not selected
                </p>
              )}

              {defShipping.length !== 0 ? (
                defShipping.map((defShippAddress) => {
                  return (
                    <p
                      key={defShippAddress.id}
                      className={
                        props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
                      }
                    >
                      <span className={s.span}>Default Shipping address:</span>
                      {defaultShippingAddressId
                        ? ` ${defShippAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
                            defShippAddress.city
                          } st.${defShippAddress.streetName}, ${defShippAddress.postalCode}`
                        : ' was not selected'}
                    </p>
                  );
                })
              ) : (
                <p
                  className={
                    props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
                  }
                >
                  <span className={s.span}>Default Shipping address:</span>
                  was not selected
                </p>
              )}

              <button onClick={showModalAddNewAddress} className={s.btn_add}>
                Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
