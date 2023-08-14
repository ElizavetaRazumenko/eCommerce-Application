import { To } from 'react-router-dom';
export interface IFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

//                                                    MAIN PAGE TYPES

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

export type stateTypeMain = {
  stateMain: {
    drinks: DrinkType[];
    pizzas: PizzaType[];
    souces: SauceType[];
  };
};

export type stateTypeDrinks = {
  drinksType: DrinkType[];
};

export type stateTypePizzas = {
  pizzasType: PizzaType[];
};

export type stateTypeSouces = {
  saucesType: SauceType[];
};

export type stateTypeVisiblePizzas = PizzaType[];

export type PizzaParamsType = {
  size: string;
  length: string;
  price: string;
};

//                                                      LOGIN / REGISTER PAGE

export type FieldType = {
  id: number;
  plshldr: string;
  classname: string;
  page: string;
  type: string;
  errorMessage: string;
  value: string;
  isValid: boolean;
};

export type InputLoginType = {
  id: number;
  plshldr: string;
  classname: string;
  page: string;
  type: string;
  errorMessage: string;
  value: string;
  isValid: boolean;
};

export type LocationValueType = {
  type: 'billing' | 'shipping';
  default: boolean;
  refs: {
    inputCountryB: React.RefObject<HTMLParagraphElement>;
    inputCityB: React.RefObject<HTMLInputElement>;
    errorCityB: React.RefObject<HTMLParagraphElement>;
    inputStreetB: React.RefObject<HTMLInputElement>;
    errorStreetB: React.RefObject<HTMLParagraphElement>;
    inputPostalB: React.RefObject<HTMLInputElement>;
    errorPostalB: React.RefObject<HTMLParagraphElement>;
    inputCountryS: React.RefObject<HTMLParagraphElement>;
    inputCityS: React.RefObject<HTMLInputElement>;
    errorCityS: React.RefObject<HTMLParagraphElement>;
    inputStreetS: React.RefObject<HTMLInputElement>;
    errorStreetS: React.RefObject<HTMLParagraphElement>;
    inputPostalS: React.RefObject<HTMLInputElement>;
    errorPostalS: React.RefObject<HTMLParagraphElement>;
  };
};

export type InputLocationPropsType = {
  id: 'city' | 'street' | 'postal';
  plshldr: string;
  addressType: 'billing' | 'shipping';
  default: boolean;
  refs: {
    inputCountryB: React.RefObject<HTMLDivElement>;
    inputCityB: React.RefObject<HTMLInputElement>;
    errorCityB: React.RefObject<HTMLParagraphElement>;
    inputStreetB: React.RefObject<HTMLInputElement>;
    errorStreetB: React.RefObject<HTMLParagraphElement>;
    inputPostalB: React.RefObject<HTMLInputElement>;
    errorPostalB: React.RefObject<HTMLParagraphElement>;
    inputCountryS: React.RefObject<HTMLDivElement>;
    inputCityS: React.RefObject<HTMLInputElement>;
    errorCityS: React.RefObject<HTMLParagraphElement>;
    inputStreetS: React.RefObject<HTMLInputElement>;
    errorStreetS: React.RefObject<HTMLParagraphElement>;
    inputPostalS: React.RefObject<HTMLInputElement>;
    errorPostalS: React.RefObject<HTMLParagraphElement>;
  };
};

export type FieldLocationType = {
  type: string;
  value: string;
  errorMessage: string;
  isValid: boolean;
};

//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};
