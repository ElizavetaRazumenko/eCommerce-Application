import logo from '../../../assets/logo/parsley.png';
// import '../../../App.scss';

export function LogoWrapper() {
  return (
    <div className='logo-wrapper'>
      <div className='logo-title'>
        <h1>ITALIC PIZZA</h1>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <span className='subtitle'>
        the <span className='parsley'>best</span> for you
      </span>
    </div>
  );
}

export function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <LogoWrapper />
          <nav className='nav'>
            <ul className='navigation-list'>
              <li className='nav-item no-active-link'>Main</li>
              <li className='nav-item'>Catalog</li>
              <li className='nav-item'>Profile</li>
              <li className='nav-item'>Basket</li>
              <li className='nav-item'>Login page</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
