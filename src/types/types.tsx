import { To } from 'react-router-dom';

export interface IFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export type PizzaParamsType = {
  size: string;
  length: string;
  price: string;
};

export type PizzaType = {
  link: string;
  name: string;
  cost: string[];
};

export type SauceType = {
  link: string;
  name: string;
};

export type DrinkType = {
  link: string;
  price: string;
};

export type InputLoginType = {
  plshldr: string;
  classname: string;
  page: string;
  type: string;
};

export type ButtonLoginType = {
  content: string;
};

export type ButtonRedirectType = {
  content: string;
  to: To;
};

export type stateTypeApp = {
  state: {
    mainPage: {
      drinks: {
        link: string;
        price: string;
      }[];
    };
  };
};

export type stateTypeMain = {
  stateMain: {
    drinks: {
      link: string;
      price: string;
    }[];
  };
};

export type stateTypeDrinks = {
  drinksType: {
    link: string;
    price: string;
  }[];
};
