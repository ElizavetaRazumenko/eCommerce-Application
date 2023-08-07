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
