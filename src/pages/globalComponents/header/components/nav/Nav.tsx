import s from './nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.navigation_list}>
        <li className={s.nav_item + ' ' + s.no_active_link}>Main</li>
        <li className={s.nav_item}>Catalog</li>
        <li className={s.nav_item}>Profile</li>
        <li className={s.nav_item}>Cart</li>
        <li className={s.nav_item}>Login page</li>
      </ul>
    </nav>
  );
};

export default Nav;
