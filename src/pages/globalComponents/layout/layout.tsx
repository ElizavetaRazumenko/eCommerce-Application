import { Outlet } from 'react-router';

import { LayoutPropsType } from '../../../types/types';

import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = (props: LayoutPropsType) => {
  return (
    <>
      <Header userState={props.userState} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
