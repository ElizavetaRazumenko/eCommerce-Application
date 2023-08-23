import s from './profile.module.scss';

import { AddressType, CustomerAddressesType, UserPropsType } from '../../types/types';

const ProfilePage = (props: UserPropsType) => {
  const customer = localStorage.getItem('userInfo');
  let customerAddresses: CustomerAddressesType = null;
  let defaultBillingAddressId: string | null = null;
  let defaultShippingAddressId: string | null = null;
  let firstName: string | null = null;
  let lastName: string | null = null;
  let email: string | null = null;
  let dateBirth: string | null = null;

  if (customer) {
    customerAddresses = JSON.parse(customer).customer.addresses;
    defaultBillingAddressId = JSON.parse(customer).customer.defaultBillingAddressId;
    defaultShippingAddressId = JSON.parse(customer).customer.defaultShippingAddressId;
    firstName = JSON.parse(customer).customer.firstName;
    lastName = JSON.parse(customer).customer.lastName;
    email = JSON.parse(customer).customer.email;
    dateBirth = JSON.parse(customer).customer.dateOfBirth;
  }

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

  let billingAddress: AddressType = {
    city: '',
    country: '',
    id: '',
    key: '',
    postalCode: '',
    streetName: '',
  };

  let shippingAddress: AddressType = Object.assign({}, billingAddress);

  let defaultBilling: AddressType = Object.assign({}, billingAddress);

  let defaultShipping: AddressType = Object.assign({}, billingAddress);

  if (customerAddresses) {
    const billingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .billingAddressIds[0];
    billingAddress = customerAddresses.find((el) => el.id === billingAddressId)!;

    const shippingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .shippingAddressIds[0];
    shippingAddress = customerAddresses.find((el) => el.id === shippingAddressId)!;

    if (defaultBillingAddressId) {
      defaultBilling = customerAddresses.find((el) => el.id === defaultBillingAddressId)!;
    }

    if (defaultShippingAddressId) {
      defaultShipping = customerAddresses.find((el) => el.id === defaultShippingAddressId)!;
    }
  }
  return (
    <div className={s.profile_wrapper}>
      <h1 className={s.welcome_title}>User Profile</h1>
      <div className={s.welcome_container}>
        <div className={s.user_info}>
          <div className={s.user_info_personal}>
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
          <div className={s.user_info_address}>
            <p className={props.userState === 'Login' ? s.hidden : s.welcome_content}>
              <span className={s.span}>Billing address:</span>
              {` ${billingAddress.country === 'IT' ? 'Italy' : 'Spain'} ${billingAddress.city} st.${
                billingAddress.streetName
              }, ${billingAddress.postalCode}`}
            </p>
            <p className={props.userState === 'Login' ? s.hidden : s.welcome_content}>
              <span className={s.span}>Shipping address:</span>
              {` ${shippingAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
                shippingAddress.city
              } st.${shippingAddress.streetName}, ${shippingAddress.postalCode}`}
            </p>
            <p
              className={
                props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
              }
            >
              <span className={s.span}>Default Billing address:</span>
              {defaultBillingAddressId
                ? ` ${defaultBilling.country === 'IT' ? 'Italy' : 'Spain'} ${
                    defaultBilling.city
                  } st.${defaultBilling.streetName}, ${defaultBilling.postalCode}`
                : ' was not selected'}
            </p>
            <p
              className={
                props.userState === 'Login' ? s.hidden : s.welcome_content + ' ' + s.default
              }
            >
              <span className={s.span}>Default Shipping address:</span>
              {defaultShippingAddressId
                ? ` ${defaultShipping.country === 'IT' ? 'Italy' : 'Spain'} ${
                    defaultShipping.city
                  } st.${defaultShipping.streetName}, ${defaultShipping.postalCode}`
                : ' was not selected'}
            </p>
          </div>
        </div>
        <button className={s.edit_button}>Edit</button>
      </div>
    </div>
  );
};

export default ProfilePage;
