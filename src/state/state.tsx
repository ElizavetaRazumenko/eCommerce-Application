import bonaquaUrl from '../assets/drinks/bonaqua.png';
import colaUrl from '../assets/drinks/cola.png';
import fantaUrl from '../assets/drinks/fanta.png';
import juiceryUrl from '../assets/drinks/juicery.png';
import pepsiUrl from '../assets/drinks/pepsi.png';
import spriteUrl from '../assets/drinks/sprite.png';

const state = {
  mainPage: {
    drinks: [
      {
        link: colaUrl,
        price: '1.60$',
      },
      {
        link: fantaUrl,
        price: '1.60$',
      },
      {
        link: spriteUrl,
        price: '1.60$',
      },
      {
        link: pepsiUrl,
        price: '1.60$',
      },
      {
        link: bonaquaUrl,
        price: '0.80$',
      },
      {
        link: juiceryUrl,
        price: '3.50$',
      },
    ],
  },
};

export default state;
