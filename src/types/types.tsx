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
  name: string;
  plshldr: string;
  classname: string;
  page: string;
  type: string;
  errorMessage: string;
  value: string;
  isValid: boolean;
};

type StatesType = {
  countryB: string;
  setCountryB: React.Dispatch<React.SetStateAction<string>>;
  countryS: string;
  setCountryS: React.Dispatch<React.SetStateAction<string>>;
  inputCityB: string;
  setCityB: React.Dispatch<React.SetStateAction<string>>;
  errorCityB: string;
  setErrorCityB: React.Dispatch<React.SetStateAction<string>>;

  inputCityS: string;
  setCityS: React.Dispatch<React.SetStateAction<string>>;
  errorCityS: string;
  setErrorCityS: React.Dispatch<React.SetStateAction<string>>;

  inputStreetB: string;
  setStreetB: React.Dispatch<React.SetStateAction<string>>;
  errorStreetB: string;
  setErrorStreetB: React.Dispatch<React.SetStateAction<string>>;

  inputStreetS: string;
  setStreetS: React.Dispatch<React.SetStateAction<string>>;
  errorStreetS: string;
  setErrorStreetS: React.Dispatch<React.SetStateAction<string>>;

  inputPostalB: string;
  setPostalB: React.Dispatch<React.SetStateAction<string>>;
  errorPostalB: string;
  setErrorPostalB: React.Dispatch<React.SetStateAction<string>>;

  inputPostalS: string;
  setPostalS: React.Dispatch<React.SetStateAction<string>>;
  errorPostalS: string;
  setErrorPostalS: React.Dispatch<React.SetStateAction<string>>;
};

export type LocationValueType = {
  type: 'billing' | 'shipping';
  isOneAddress: boolean;
  states: StatesType;
  toggle?: boolean;
};

export type InputLocationPropsType = {
  id: 'city' | 'street' | 'postal';
  plshldr: string;
  addressType: 'billing' | 'shipping';
  isOneAddress: boolean;
  stateValue: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
  errorValue: string;
  setErrorValue: React.Dispatch<React.SetStateAction<string>>;
};

export type FieldLocationType = {
  type: string;
  value: string;
  errorMessage: string;
  isValid: boolean;
};

export type LocationPropsType = {
  defaultSetting: {
    defaultBilling: string;
    setdDefaultBilling: React.Dispatch<React.SetStateAction<string>>;
    defaultShipping: string;
    setdDefaultShipping: React.Dispatch<React.SetStateAction<string>>;
  };
};

export type RequestBodyType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: [
    {
      key: string;
      country: string;
      city: string;
      streetName: string;
      postalCode: string;
    },
    {
      key: string;
      country: string;
      city: string;
      streetName: string;
      postalCode: string;
    },
  ];
  billingAddresses: [0];
  shippingAddresses: [1];
  defaultBillingAddress?: number;
  defaultShippingAddress?: number;
};

export type LoginPagePropsType = {
  setUserState: React.Dispatch<React.SetStateAction<string>>;
};

export type RegisterPagePropsType = LoginPagePropsType;

export type LayoutPropsType = {
  userState: string;
  setUserState: React.Dispatch<React.SetStateAction<string>>;
};

export type HeaderPropsType = LayoutPropsType;
//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};
