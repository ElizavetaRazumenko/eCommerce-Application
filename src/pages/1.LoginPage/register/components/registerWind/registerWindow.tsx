import s from './registerWindow.module.scss';

import { registerPageType } from '../../../../../types/types';
import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = (props: registerPageType) => {
  return (
    <div className={s.register_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        {props.stateRegisterPage.fieldData.map((data, index) => {
          return (
            <>
              <Field
                id={data.id}
                plshldr={data.plshldr}
                classname={data.classname}
                page={data.page}
                type={data.type}
                errorMessage={data.errorMessage}
                addInputValue={props.addInputValue}
                inputClearErrorMessage={props.inputClearErrorMessage}
                key={index}
              />
              <p className={s.control}>{data.errorMessage}</p>
            </>
          );
        })}
        <Location />
        <p className={s.control}>must be chosen location</p>
      </div>
      <Button content='Register' />
    </div>
  );
};

export default RegisterWindow;
