import s from './loginWindow.module.scss';

import { loginPageType } from '../../../../../types/types';
import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: loginPageType) => {
  return (
    <div className={s.login_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        {props.stateLoginPage.fieldData.map((data, index) => {
          return (
            <>
              <Field
                plshldr={data.plshldr}
                classname={data.classname}
                page={data.page}
                type={data.type}
                addInputValue={props.addInputValue}
                key={index}
              />
              <p className={s.control}>{data.errorMessage}</p>
            </>
          );
        })}
      </div>
      <Button content='Login' />
    </div>
  );
};

export default LoginWindow;
