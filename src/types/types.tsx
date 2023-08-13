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
  state: typeState;
  setState: React.Dispatch<React.SetStateAction<typeState>>;
};

export type typeState = {
  mainPage: {
    drinks: DrinkType[];
    pizzas: PizzaType[];
    souces: SauceType[];
  };
  loginPage: {
    fieldData: FieldType[];
  };
  registerPage: {
    fieldData: FieldType[];
    location: {
      billing: {
        country: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        city: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        street: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        postal: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        isValid: boolean;
      };
      shipping: {
        country: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        city: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        street: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        postal: {
          value: string;
          errorMessage: string;
          isValid: boolean;
        };
        isValid: boolean;
      };
    };
  };
};

export type loginPageType = {
  state: typeState;
  setState: React.Dispatch<React.SetStateAction<typeState>>;
};

export type registerPageType = {
  state: typeState;
  setState: React.Dispatch<React.SetStateAction<typeState>>;
};

export type LocationValueType = {
  values: {
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    street: string;
    setStreet: React.Dispatch<React.SetStateAction<string>>;
    postal: string;
    setPostal: React.Dispatch<React.SetStateAction<string>>;
  };
  type: 'billing' | 'shipping';
  state: typeState;
  setState: React.Dispatch<React.SetStateAction<typeState>>;
  fake: boolean;
};

//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};
