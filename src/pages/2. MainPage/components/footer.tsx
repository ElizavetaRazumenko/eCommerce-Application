// import { LogoWrapper } from '../pages/2. main page/index';
import { Logo } from '../components/header';

export const Footer = ({ footer }: { footer: string }) => {
  return (
    <footer className={footer}>
      <Logo />
      <div></div>
    </footer>
  );
};
