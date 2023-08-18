import s from './profile.module.scss';

import { AddressType, CustomerAddressesType, UserPropsType } from '../../types/types';

const ProfilePage = (props: UserPropsType) => {
  const customerAddresses: CustomerAddressesType = JSON.parse(
    localStorage.getItem('userInfo') || '',
  ).customer.addresses;

  const billingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
    .billingAddressIds[0];
  const billingAddress: AddressType = customerAddresses.find((el) => el.id === billingAddressId)!;

  const shippingAddressId: string = JSON.parse(localStorage.getItem('userInfo') || '').customer
    .shippingAddressIds[0];
  const shippingAddress: AddressType = customerAddresses.find((el) => el.id === shippingAddressId)!;
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
