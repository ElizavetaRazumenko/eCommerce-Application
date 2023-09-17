import React from 'react';

import s from './promo.module.scss';

const SectionPromo = () => {
  const promoCodes = [
    { code: '1111', description: 'For vegetarian pizzas:' },
    { code: '2222', description: 'For all catalog products:' },
  ];

  return (
    <section className={s.section_promo}>
      <h2 className={s.title_promo}>Use promo codes to get 10-15% discount:</h2>
      <div className={s.promo_list}>
        {promoCodes.map((promo, index) => (
          <div key={index} className={s.promocode}>
            <div className={s.promo_description}>{promo.description}</div>
            <div className={s.promo_number}>{promo.code}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPromo;
