import RegisterWindow from './components/registerWind/registerWindow';
import s from './register.module.scss';

const RegisterPage = () => {
  return (
    <div className={s.register_wrapper}>
      <RegisterWindow />
    </div>
  );
};

export default RegisterPage;
