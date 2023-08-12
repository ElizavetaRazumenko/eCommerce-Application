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

export type ButtonLoginType = {
  content: string;
};

export type addInputValueType = (
  id: number,
  value: string,
  inputType: string,
  page: string,
) => void;

export type fieldType = {
  id: number;
  plshldr: string;
  classname: string;
  page: string;
  type: string;
  errorMessage: string;
  value: string;
};

export type InputLoginType = {
  id: number;
  plshldr: string;
  classname: string;
  page: string;
  type: string;
  errorMessage: string;
  value: string;
  addInputValue: addInputValueType;
};

export type typeState = {
  mainPage: {
    drinks: DrinkType[];
    pizzas: PizzaType[];
    souces: SauceType[];
  };
  loginPage: {
    fieldData: fieldType[];
  };
  registerPage: {
    fieldData: fieldType[];
  };
};

export type stateTypeApp = {
  state: typeState;
  addInputValue: addInputValueType;
};

export type loginPageType = {
  stateLoginPage: {
    fieldData: fieldType[];
  };
  addInputValue: addInputValueType;
};

export type registerPageType = {
  stateRegisterPage: {
    fieldData: fieldType[];
  };
  addInputValue: addInputValueType;
};

//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};
