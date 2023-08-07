import logoUrl from '../../../../assets/logo/parsley.png';
import logo2Url from '../../../../assets/logo/souse.png';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <h1 className='logo-title'>
        <img src={logoUrl} className='app-logo' alt='logo' />
        PIZZA ITALIANO
        <img src={logo2Url} className='app-logo app-logo2' alt='logo' />
      </h1>
      <span className='subtitle'>
        the best for <span className='parsley'>you</span>
      </span>
    </div>
  );
};

export default Logo;
