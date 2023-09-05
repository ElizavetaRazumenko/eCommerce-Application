import { useState } from 'react';

import closeIcon from '../../../../../assets/svg/close.svg';
import { getApiRoot } from '../../../../../shared';
import { HideModalType } from '../../../../../types/types';
import modal from '../modal.module.scss';
import address from '../modalAddNewAddress/modalAddNewAddress.module.scss';

const ModalEditPassword: React.FC<HideModalType> = ({ onHideModal, customerData }) => {
  const [currentPasswordState, SetCurrentPasswordState] = useState('');
  const [newPasswordState, SetNewPasswordState] = useState('');

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onHideModal();
    }
  };

  const handleCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetCurrentPasswordState(e.target.value);
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetNewPasswordState(e.target.value);
  };

  const checkSubmit = async () => {
    try {
      const response = await getApiRoot()
        .customers()
        .password()
        .post({
          body: {
            id: customerData.id ? customerData.id : '',
            version: customerData.version ? customerData.version : 0,
            currentPassword: currentPasswordState,
            newPassword: newPasswordState,
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

  return (
    <div className={modal.modalBackground} onClick={handleBackgroundClick}>
      <div className={modal.modalActive}>
        <div className={modal.modalClose} onClick={onHideModal}>
          <img src={closeIcon} alt='close-icon' />
        </div>
        <div className={modal.modalWindow}>
          <div className={address.address_info}>
            <h3 className={address.address_info_title}> Edit Password </h3>
            <label htmlFor='currentPassword'>Current password: </label>
            <input id='currentPassword' type='text' onChange={handleCurrentPassword} />
            <label htmlFor='newPassword'>New Password: </label>
            <input id='newPassword' type='text' onChange={handleNewPassword} />
          </div>
          <button onClick={checkSubmit} className={address.btn_submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditPassword;
