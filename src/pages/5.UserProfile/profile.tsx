import s from './profile.module.scss';

import { AddressType, CustomerAddressesType, UserPropsType } from '../../types/types';

const ProfilePage = (props: UserPropsType) => {
  const customer = localStorage.getItem('userInfo');
  let customerAddresses: CustomerAddressesType = null;
  if (customer) {
    customerAddresses = JSON.parse(customer).customer.addresses;
  }
  let billingAddress: AddressType = {
    city: '',
    country: '',
    id: '',
    key: '',
    postalCode: '',
    streetName: '',
  };

  let shippingAddress: AddressType = {
    city: '',
    country: '',
    id: '',
    key: '',
    postalCode: '',
    streetName: '',
  };

  if (customerAddresses) {
    const billingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .billingAddressIds[0];
    billingAddress = customerAddresses.find((el) => el.id === billingAddressId)!;

    const shippingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
      .shippingAddressIds[0];
    shippingAddress = customerAddresses.find((el) => el.id === shippingAddressId)!;
  }
  return (
    <div className={s.profile_wrapper}>
      <p className={s.welcome}>Welcome to the Profile Page!</p>
      <p className={props.userState === 'Login' ? s.hidden : s.welcome_content}>
        {`Billing address: ${billingAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
          billingAddress.city
        } st.${billingAddress.streetName}, ${billingAddress.postalCode}`}
      </p>
      <p className={props.userState === 'Login' ? s.hidden : s.welcome_content}>
        {`Shipping address: ${shippingAddress.country === 'IT' ? 'Italy' : 'Spain'} ${
          shippingAddress.city
        } st.${shippingAddress.streetName}, ${shippingAddress.postalCode}`}
      </p>
    </div>
  );
};

export default ProfilePage;
