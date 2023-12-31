import { LineItem } from '@commercetools/platform-sdk';
import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import { productOnCart } from '../../../../../entities/product';
import { loginClient } from '../../../../../shared/index';
import state from '../../../../../state/state';
import { KeyObject, LoginPagePropsType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: LoginPagePropsType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const deleteError = () => {
    setErrorMessage('');
  };

  const loginTrek = () => {
    props.setUserState('Logout');
    localStorage.setItem('userState', 'Logout');
  };

  const checkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = state.loginPage.fieldData.find((field) => !field.isValid);
    if (isValidForm) {
      isValidForm.value === ''
        ? setErrorMessage(`field '${isValidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${isValidForm.plshldr}' is not valid`);
    } else {
      const email = state.loginPage.fieldData.find((el) => el.classname === 'email')!.value;
      const password = state.loginPage.fieldData.find((el) => el.classname === 'password')!.value;
      try {
        await loginClient(email, password);
        if (localStorage.getItem('CurrentEmail') === email && localStorage.getItem('UserCart')) {
          localStorage.setItem('Cart', localStorage.getItem('UserCart')!);
          localStorage.setItem('CartItems', localStorage.getItem('UserCartItems')!);
          localStorage.setItem('idCarts', localStorage.getItem('UserIdCarts')!);
          localStorage.setItem('CartIsEmpty', localStorage.getItem('UserCartIsEmpty')!);
          const cartItems = JSON.parse(localStorage.getItem('CartItems')!) as LineItem[];
          if (cartItems) {
            cartItems.forEach((el) => (productOnCart[el.variant.sku as KeyObject] = true));
          }
          window.dispatchEvent(new Event('storage'));
        }
        setSuccessMessage('Authorized ✔');
        setTimeout(loginTrek, 700);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'Customer account with the given credentials not found.') {
            setErrorMessage("Invalid email or password. Don't have an account? Click registration");
          } else setErrorMessage(e.message);
        }
      }
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.login_window}>
        <Toggler />
        <form
          className={s.field_wrapper}
          ref={formRef}
          onSubmit={checkSubmit}
          onChange={deleteError}
        >
          {state.loginPage.fieldData.map((data) => {
            return (
              <div key={data.id}>
                <Field
                  id={data.id}
                  name={data.plshldr}
                  plshldr={data.plshldr}
                  classname={data.classname}
                  errorMessage={data.errorMessage}
                  page={data.page}
                  type={data.type}
                  value={data.value}
                  isValid={data.isValid}
                />
              </div>
            );
          })}
          <p className={s.control}>{errorMessage}</p>
          <button className={s.button}>
            <span>Login</span>
          </button>
        </form>
      </div>
      <p className={s.notification}>{successMessage}</p>
    </div>
  );
};

export default LoginWindow;
