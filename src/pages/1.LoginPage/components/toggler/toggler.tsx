import s from './toggler.module.css';

const Toggler = () => {
  return (
    <div className={s.toggler}>
      <a className={s.login_a + ' ' + s.unactive_link} href='/login'>
        Login
      </a>
      <a className={s.register_a + ' ' + s.active_link} href='/register'>
        Register
      </a>
    </div>
  );
};

export default Toggler;
