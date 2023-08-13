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
import { FieldType } from '../types/types';

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
  loginPage: {
    fieldData: [
      {
        id: 1,
        plshldr: 'Username',
        classname: 'user',
        page: 'login',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 2,
        plshldr: 'Password',
        classname: 'password',
        page: 'login',
        type: 'password',
        errorMessage: '',
        value: '',
        isValid: false,
      },
    ],
  },
  registerPage: {
    fieldData: [
      {
        id: 1,
        plshldr: 'Username',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 2,
        plshldr: 'First name',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 3,
        plshldr: 'Last name',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 4,
        plshldr: 'Date of birth: dd.mm.yy',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 5,
        plshldr: 'Email',
        classname: 'email',
        page: 'register',
        type: 'email',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 6,
        plshldr: 'Password',
        classname: 'password',
        page: 'register',
        type: 'password',
        errorMessage: '',
        value: '',
        isValid: false,
      },
    ],
    location: {
      billing: {
        country: {
          value: 'Choose the country',
          errorMessage: '',
          isValid: false,
        },
        city: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        street: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        postal: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        isValid: false,
      },
      shipping: {
        country: {
          value: 'Choose the country',
          errorMessage: '',
          isValid: false,
        },
        city: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        street: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        postal: {
          value: '',
          errorMessage: '',
          isValid: false,
        },
        isValid: false,
      },
    },
  },
};

export const inputValues: string[][] = [];

const findField = (id: number, page: string) => {
  let field: FieldType;
  if (page === 'login') {
    field = state.loginPage.fieldData.find((item) => item.id === id) as FieldType;
  } else {
    field = state.registerPage.fieldData.find((item) => item.id === id) as FieldType;
  }
  return field;
};

const checkTextField = (field: FieldType) => {
  if (field.value.length === 0) {
    field.errorMessage = 'must be filled';
    field.isValid = false;
  } else field.isValid = true;
};

const checkEmail = (field: FieldType) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (field.value.match(/\s/)) {
    field.errorMessage = 'must not contain spaces';
    field.isValid = false;
  } else if (!field.value.includes('@')) {
    field.errorMessage = 'must contain @';
    field.isValid = false;
  } else if (!field.value.includes('.')) {
    field.errorMessage = 'must contain a domain name';
    field.isValid = false;
  } else if (!re.test(field.value)) {
    field.errorMessage = 'incorrect email form';
    field.isValid = false;
  }
};

const checkPassword = (field: FieldType) => {
  if (field.value.length < 8) {
    field.errorMessage = 'must be at least 8 characters long';
    field.isValid = false;
  } else if (field.value.toLowerCase() === field.value) {
    field.errorMessage = 'must contain at least one capital letter';
    field.isValid = false;
  } else if (field.value.toUpperCase() === field.value) {
    field.errorMessage = 'must contain at least one lowercase letter';
    field.isValid = false;
  } else if (!field.value.match(/\d/)) {
    field.errorMessage = 'must contain at least one number';
    field.isValid = false;
  } else if (!field.value.match(/[!@#$&*]/)) {
    field.errorMessage = 'must contain at least one special character';
    field.isValid = false;
  } else if (field.value.trim() !== field.value) {
    field.errorMessage = 'must not contain leading or trailing spaces';
    field.isValid = false;
  }
};

const checkDate = (field: FieldType) => {
  const re =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (!re.test(field.value)) {
    field.errorMessage = 'incorrect date';
    field.isValid = false;
  }
};

export const addInputValue = (id: string, value: string, inputType: string, page: string) => {
  const field = findField(+id, page);
  field.value = value;
  field.errorMessage = '';
  checkTextField(field);
  if (field.isValid) {
    if (inputType === 'email') {
      checkEmail(field);
    } else if (inputType === 'password') {
      checkPassword(field);
    } else if (inputType.startsWith('date of')) {
      checkDate(field);
    }
  }
};

const checkPostalCode = (
  field: { value: string; errorMessage: string; isValid: boolean },
  type: 'billing' | 'shipping',
) => {
  const country = state.registerPage.location[type].country;
  const reg = /^\d+$/;
  if (!reg.test(field.value)) {
    field.errorMessage = 'must contain contain only digits';
    field.isValid = false;
  }
  if (country.value === 'Spain') {
    if (field.value.length !== 6) {
      field.errorMessage = 'spain postal code must contain 6 digits';
      field.isValid = false;
    }
  } else if (country.value === 'Italy') {
    if (field.value.length !== 5) {
      field.errorMessage = 'italy postal code must contain 5 digits';
      field.isValid = false;
    }
  } else {
    field.errorMessage = 'select a country to check the validity';
    field.isValid = false;
  }
};

export const isValide = (type: 'billing' | 'shipping') => {
  const countryValid = !(state.registerPage.location[type].country.value === 'Choose the country');
  const cityValid = state.registerPage.location[type].city.isValid;
  const streetValid = state.registerPage.location[type].street.isValid;
  const postalValid = state.registerPage.location[type].postal.isValid;
  if (countryValid && cityValid && streetValid && postalValid) {
    state.registerPage.location[type].isValid = true;
    return true;
  }
  return false;
};

export const addLocationValue = (
  type: 'billing' | 'shipping',
  property: 'city' | 'street' | 'postal',
  value: string,
) => {
  const field = state.registerPage.location[type][property];
  field.value = value;
  field.errorMessage = '';
  if (field.value.length === 0) {
    field.errorMessage = 'must be filled';
    field.isValid = false;
  } else field.isValid = true;
  if (field.isValid) {
    if (property === 'postal') {
      checkPostalCode(field, type);
    } else {
      if (field.value.match(/[0-9]/)) {
        field.errorMessage = 'must not contain numbers';
        field.isValid = false;
      }
    }
  }
};

export default state;
