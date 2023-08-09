import { Link } from 'react-router-dom';

import s from './button.module.scss';

import { ButtonRedirectType } from '../../../types/types';

const Button = (props: ButtonRedirectType) => {
  return (
    <div className={s.button_wrapper}>
      <Link to={props.to} className={s.button}>
        {props.content}
      </Link>
    </div>
  );
};

export default Button;
