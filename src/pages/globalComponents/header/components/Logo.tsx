import logoUrl from '../../../../assets/logo/parsley.png';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <div className='logo-title'>
        <h1>ITALIC PIZZA</h1>
        <img src={logoUrl} className='App-logo' alt='logo' />
      </div>
      <span className='subtitle'>
        the <span className='parsley'>best</span> for you
      </span>
    </div>
  );
};

export default Logo;
