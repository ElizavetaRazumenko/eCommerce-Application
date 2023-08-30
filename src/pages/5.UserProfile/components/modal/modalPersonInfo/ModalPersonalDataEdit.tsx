import { useState } from 'react';

import personal from './ModalPersonalDataEdit.module.scss';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { HideModalType } from '../../../../../types/types';
import modal from '../modal.module.scss';

const ModalPersonalDataEditWindow: React.FC<HideModalType> = ({ onHideModal, customerData }) => {
  const [customerEmail, setCustomerEmail] = useState(customerData.email);
  const [customerFirstName, setFirstName] = useState(customerData.firstName);
  const [customerLastName, setCustomerLastName] = useState(customerData.lastName);
  const [customerDate, setCustomerDate] = useState(customerData.dateBirth);

  const handChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerEmail(e.target.value);
  };
  const handChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerLastName(e.target.value);
  };
  const handChangeDateBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDate(e.target.value);
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
                action: 'changeEmail',
                email: customerEmail ? customerEmail : '',
              },
              {
                action: 'setFirstName',
                firstName: customerFirstName ? customerFirstName : '',
              },
              {
                action: 'setLastName',
                lastName: customerLastName ? customerLastName : '',
              },
              {
                action: 'setDateOfBirth',
                dateOfBirth: customerDate ? customerDate : '',
              },
            ],
          },
        })
        .execute();
      const data = response.body;
      const resultData = { customer: { ...data } };
      localStorage.setItem('userInfo', JSON.stringify(resultData));
      onHideModal();
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
  };

  return (
    <div className={modal.modalBackground} onClick={handleBackgroundClick}>
      <div className={modal.modalActive}>
        <div className={modal.modalClose} onClick={onHideModal}>
          <img src={closeIcon} alt='close-icon' />
        </div>
        <div className={modal.modalWindow}>
          <div className={personal.personal_info}>
            <h3 className={personal.personal_info_title}>Personal Information</h3>
            <label htmlFor='firsName'>First name: </label>
            <input
              id='firstName'
              type='text'
              value={customerFirstName ? customerFirstName : ''}
              onChange={handChangeFirstName}
            />
            <label htmlFor='lastName'>Last name: </label>
            <input
              id='lastName'
              type='text'
              value={customerLastName ? customerLastName : ''}
              onChange={handChangeLastName}
            />
            <label htmlFor='dateBirth'>Date of birth: </label>
            <input
              id='dateBirth'
              type='text'
              value={customerDate ? customerDate : ''}
              onChange={handChangeDateBirth}
            />
            <label htmlFor='email'>Email: </label>
            <input
              id='email'
              type='text'
              value={customerEmail ? customerEmail : ''}
              onChange={handChangeEmail}
            />
          </div>
          <button onClick={checkSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonalDataEditWindow;
