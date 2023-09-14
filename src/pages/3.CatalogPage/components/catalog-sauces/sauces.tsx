import { LineItem } from '@commercetools/platform-sdk';

import Sauce from './components/sauce';

import s from './sauces.module.scss';

import infoProducts, { productOnCart } from '../../../../entities/product';
import { CatalogSaucesProps, KeyObject } from '../../../../types/types';

const CatalogSauces = (props: CatalogSaucesProps) => {
  const saucesItems = props.products.filter((el) =>
    infoProducts.sauces.find((item) => item.key === el.key),
  );
  const sauceArray = saucesItems.map((sauce) => {
    let sauceCost = (sauce.masterVariant.prices[0].value.centAmount / 100).toFixed(2) + '$';
    return (
      <Sauce
        key={sauce.key}
        link={sauce.masterVariant.images}
        name={sauce.name['en-US']}
        price={sauceCost}
        description={sauce.description['en-US']}
        onCart={productOnCart[sauce.key as KeyObject]}
      />
    );
  });
  return (
    <div>
      <section className={s.section_sauce_catalog}>
        <h2 className={s.title_section}>Sauces</h2>
        <div className={s.select_sauce_catalog}>{sauceArray}</div>
      </section>
    </div>
  );
};

export default CatalogSauces;
