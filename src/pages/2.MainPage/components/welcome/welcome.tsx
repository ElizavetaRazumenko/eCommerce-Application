import { NavLink } from 'react-router-dom';

import s from './welcome.module.scss';

const SectionWelcome = () => {
  return (
    <section className={s.section_welcome}>
      <h2 className={s.title_welcome}>Welcome to the Italian pizzeria!</h2>
      <p className={s.welcome_content}>
        We have been preparing the best pizza for you for many years. Our chefs use the finest
        ingredients and the freshest vegetables for cooking. But the most important ingredient is
        that we make pizza with love!
      </p>
      <div className={s.link_wrapper}>
        <p className={s.welcome_content + ' ' + s.member}>Become a member of our community:</p>
        <NavLink to='/login' className={s.link}>
          <button className={s.btn_login}>Login/Register</button>
        </NavLink>
      </div>
      <div className={s.to_profile}>
        <p className={s.content_to_profile}>To personal data:</p>
        <NavLink to='/profile' className={s.link}>
          <button className={s.btn_login}>Profile</button>
        </NavLink>
      </div>
    </section>
  );
};

export default SectionWelcome;
