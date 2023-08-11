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
  addInputValue: (value: string, inputType: string) => void;
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
      pizzas: {
        link: string;
        name: string;
        cost: string[];
      }[];
      souces: {
        link: string;
        name: string;
      }[];
    };
    loginPage: {
      fieldData: {
        id: number;
        plshldr: string;
        classname: string;
        page: string;
        type: string;
        errorMessage: string;
      }[];
    };
    registerPage: {
      fieldData: {
        id: number;
        plshldr: string;
        classname: string;
        page: string;
        type: string;
        errorMessage: string;
      }[];
    };
  };

  addInputValue: (value: string, inputType: string) => void;
};

export type loginPageType = {
  stateLoginPage: {
    fieldData: {
      id: number;
      plshldr: string;
      classname: string;
      page: string;
      type: string;
      errorMessage: string;
    }[];
  };

  addInputValue: (value: string, inputType: string) => void;
};

export type registerPageType = {
  stateRegisterPage: {
    fieldData: {
      id: number;
      plshldr: string;
      classname: string;
      page: string;
      type: string;
      errorMessage: string;
    }[];
  };
  addInputValue: (value: string, inputType: string) => void;
};

export type stateTypeMain = {
  stateMain: {
    drinks: {
      link: string;
      price: string;
    }[];
    pizzas: {
      link: string;
      name: string;
      cost: string[];
    }[];
    souces: {
      link: string;
      name: string;
    }[];
  };
};

export type stateTypeDrinks = {
  drinksType: {
    link: string;
    price: string;
  }[];
};

export type stateTypePizzas = {
  pizzasType: {
    link: string;
    name: string;
    cost: string[];
  }[];
};

export type stateTypeVisiblePizzas = {
  link: string;
  name: string;
  cost: string[];
}[];

export type stateTypeSouces = {
  saucesType: {
    link: string;
    name: string;
  }[];
};
