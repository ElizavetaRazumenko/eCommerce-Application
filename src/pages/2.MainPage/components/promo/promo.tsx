import React, { useState } from 'react';

import s from './promo.module.scss';

const SectionPromo = () => {
  const [promoCode, setPromoCode] = useState('');
  const [isValidPromo, setIsValidPromo] = useState(false);

  const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPromoCode(value);
    setIsValidPromo(false);
  };

  const applyPromoCode = () => {
    if (promoCode.length === 6 && /^\d+$/.test(promoCode)) {
      setIsValidPromo(true);
    } else {
      setIsValidPromo(false);
    }
  };

  return (
    <section className={s.section_promo}>
      <h2 className={s.title_promo}>Promo code:</h2>
      <div className={s.promo_input}>
        <input
          type='text'
          placeholder='Your promo'
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
        <button onClick={applyPromoCode} className={s.btn_promo}>
          Apply
        </button>
      </div>
      {isValidPromo ? (
        <p className={s.valid_promo}>Get 10% discount!</p>
      ) : (
        <p className={s.invalid_promo}>Promo code must be contain 6 numbers. Please try again.</p>
      )}
    </section>
  );
};

export default SectionPromo;
