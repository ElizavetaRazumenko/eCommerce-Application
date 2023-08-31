import { Outlet } from 'react-router';

import s from './catalogLayout.module.scss';

import { CatalogLayuotPropsType } from '../../../types/types';
import Inputs from '../components/inputs/inputs';
import CatalogNavigation from '../components/navigation/navigation';

const CatalogPageLayout = (props: CatalogLayuotPropsType) => {
  return (
    <main className={s.catalog_wrapper}>
      <Inputs setProducts={props.setProducts} />
      <CatalogNavigation
        currentCathegory={props.currentCathegory}
        setCurrentCathegory={props.setCurrentCathegory}
        setProducts={props.setProducts}
      />
      <Outlet />
    </main>
  );
};

export default CatalogPageLayout;
