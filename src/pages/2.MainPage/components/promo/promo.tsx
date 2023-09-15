import React, { useState } from 'react';

import s from './promo.module.scss';

const SectionPromo = () => {
  const [promoCode, setPromoCode] = useState('');
  const [isValidPromo, setIsValidPromo] = useState(false);
  const [selectedPromoCode, setSelectedPromoCode] = useState<{
    code: string;
    description: string;
  } | null>(null);

  const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPromoCode(value);
    setSelectedPromoCode(null);
    setIsValidPromo(false);
  };

  const promoCodes = [
    { code: '246802', description: 'For purchases on even days' },
    { code: '135791', description: 'For purchases on odd days' },
    { code: '333333', description: 'For purchases of three or more pizzas' },
    { code: '444333', description: 'For purchases of three or more beverages' },
    { code: '555333', description: 'For purchases of three or more sauces' },
  ];

  const applyPromoCode = () => {
    const selectedPromo = promoCodes.find((promo) => promo.code === promoCode);

    if (selectedPromo) {
      setIsValidPromo(true);
      setSelectedPromoCode(selectedPromo);
    } else {
      setIsValidPromo(false);
    }
  };

  return (
    <section className={s.section_promo}>
      <h2 className={s.title_promo}>Promo codes:</h2>
      <div className={s.promo_list}>
        {promoCodes.map((promo, index) => (
          <button
            key={index}
            className={`${s.btn_select_promo} ${
              selectedPromoCode?.code === promo.code ? s.selected_promo : ''
            }`}
            onClick={() => {
              setPromoCode(promo.code);
              setSelectedPromoCode(promo);
            }}
          >
            <div className={s.promo_description}>{promo.description}</div>
            <div className={s.promo_number}>{promo.code}</div>
          </button>
        ))}
      </div>
      <div className={s.promo_input}>
        <input
          type='text'
          placeholder='Your promo'
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
        <button onClick={applyPromoCode} className={s.btn_apply}>
          Apply
        </button>
      </div>
      {isValidPromo ? (
        <p className={s.valid_promo}>
          Applied Promo: {selectedPromoCode?.code} - {selectedPromoCode?.description}
        </p>
      ) : (
        <p className={s.invalid_promo}>Invalid promo code. Please try again.</p>
      )}
    </section>
  );
};

export default SectionPromo;
