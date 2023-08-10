import bonaquaUrl from '../assets/drinks/bonaqua.png';
import colaUrl from '../assets/drinks/cola.png';
import fantaUrl from '../assets/drinks/fanta.png';
import juiceryUrl from '../assets/drinks/juicery.png';
import pepsiUrl from '../assets/drinks/pepsi.png';
import spriteUrl from '../assets/drinks/sprite.png';
import baconUrl from '../assets/pizzas/bacon.png';
import broccoliUrl from '../assets/pizzas/broccoli.png';
import cheesemeatUrl from '../assets/pizzas/cheesemeat.png';
import forestUrl from '../assets/pizzas/forest.png';
import greekUrl from '../assets/pizzas/greek.png';
import huntingUrl from '../assets/pizzas/hunting.png';
import mushroomUrl from '../assets/pizzas/mushroom.png';
import originalUrl from '../assets/pizzas/original.png';
import pepperoniUrl from '../assets/pizzas/pepperoni.png';
import rusticUrl from '../assets/pizzas/rustic.png';
import salamiUrl from '../assets/pizzas/salami.png';
import spicyUrl from '../assets/pizzas/spicy.png';
import tomatoPizzaUrl from '../assets/pizzas/tomato.png';
import vegetableUrl from '../assets/pizzas/vegetable.png';
import vegetarianUrl from '../assets/pizzas/vegetarian.png';
import barbecueUrl from '../assets/sauces/barbecue.png';
import carryUrl from '../assets/sauces/carry.png';
import garlicUrl from '../assets/sauces/garlic.png';
import ketchupUrl from '../assets/sauces/ketchup.png';
import onionUrl from '../assets/sauces/onion.png';
import sourcreamUrl from '../assets/sauces/sourcream.png';
import sweetUrl from '../assets/sauces/sweet.png';
import tomatoUrl from '../assets/sauces/tomato.png';

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
    pizzas: [
      { link: pepperoniUrl, name: 'Pepperoni', cost: ['32.00$', '25.00$', '18.00$'] },
      { link: salamiUrl, name: 'Salami', cost: ['25.00$', '20.00$', '15.00$'] },
      { link: rusticUrl, name: 'Rustic', cost: ['20.00$', '15.00$', '10.00$'] },
      { link: greekUrl, name: 'Greek', cost: ['25.00$', '20.00$', '15.00$'] },
      { link: cheesemeatUrl, name: 'Cheese&meat', cost: ['20.00$', '15.00$', '10.00$'] },
      { link: mushroomUrl, name: 'Mushroom', cost: ['45.00$', '30.00$', '25.00$'] },
      { link: vegetableUrl, name: 'Vegetable', cost: ['15.00$', '12.00$', '8.00$'] },
      { link: originalUrl, name: 'Original', cost: ['35.00$', '27.00$', '21.00$'] },
      { link: tomatoPizzaUrl, name: 'Tomato', cost: ['20.00$', '15.00$', '10.00$'] },
      { link: vegetarianUrl, name: 'Vegetarian', cost: ['17.00$', '12.00$', '6.00$'] },
      { link: baconUrl, name: 'Bacon', cost: ['37.00$', '28.00$', '23.00$'] },
      { link: broccoliUrl, name: 'Brocolli', cost: ['25.00$', '15.00$', '10.00$'] },
      { link: huntingUrl, name: 'Hunting', cost: ['32.00$', '24.00$', '19.00$'] },
      { link: forestUrl, name: 'Forest', cost: ['32.00$', '18.00$', '14.00$'] },
      { link: spicyUrl, name: 'Spicy', cost: ['22.00$', '17.00$', '12.00$'] },
    ],
    souces: [
      {
        link: carryUrl,
        name: 'Carry',
      },
      {
        link: ketchupUrl,
        name: 'Ketchup',
      },
      {
        link: sweetUrl,
        name: 'Sweet',
      },
      {
        link: garlicUrl,
        name: 'Garlic',
      },
      {
        link: tomatoUrl,
        name: 'Tomato',
      },
      {
        link: onionUrl,
        name: 'Onion',
      },
      {
        link: sourcreamUrl,
        name: 'Sour cream',
      },
      {
        link: barbecueUrl,
        name: 'Barbecue',
      },
    ],
  },
};

export default state;
