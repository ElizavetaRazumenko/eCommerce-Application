import Button from './components/button';
import s from './error.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.error_wrapper}>
      <p className={s.info}>Something went wrong...</p>
      <p className={s.error}>404</p>
      <Button content='Go to the main page' to='/' />
    </div>
  );
};

export default ErrorPage;
