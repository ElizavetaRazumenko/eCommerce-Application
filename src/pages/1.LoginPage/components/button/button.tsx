import s from './button.module.scss';

import { ButtonLoginType } from '../../../../types/types';

const Button = (props: ButtonLoginType) => {
  return (
    <div className={s.button}>
      <span>{props.content}</span>
    </div>
  );
};

export default Button;
