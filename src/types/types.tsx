import { QueryParam } from '@commercetools/platform-sdk';
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
  mainIngredients?: string;
};

export type PizzaCatalogType = {
  link: {
    dimensions: {
      h: number;
      w: number;
    };
    url: string;
  }[];
  name: string;
  cost: string[];
  description: string;
  setProductDetailes: SetProductDetailsType;
  discounts: string[];
};

export type SauceType = {
  link: string;
  name: string;
};

export type SauceTypeCatalog = {
  link: {
    dimensions: {
      h: number;
      w: number;
    };
    url: string;
  }[];
  name: string;
  price: string;
  description: string;
  setProductDetailes: SetProductDetailsType;
};

export type DrinkType = {
  link: string;
  price: string;
};

export type DrinkTypeCatalog = {
  link: {
    dimensions: {
      h: number;
      w: number;
    };
    url: string;
  }[];
  price: string;
  name: string;
  description: string;
  setProductDetailes: SetProductDetailsType;
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

//......................................................PROFIL PAGE TYPE / INTERFACE

export type HideModalType = {
  onHideModal: () => void;
  customerData: CustomerDataType;
};
export type CustomerDataType = {
  addresses: CustomerAddressType[];
  defaultBillingAddressId: string | null;
  shippingAddressIds: string[];
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  dateBirth: string | null;
  id: string | null;
  version: number | null;
};

export type CustomerAddressType = {
  city: string;
  country: string;
  id: string;
  key: string;
  postalCode: string;
  streetName: string;
};

export type PizzaParamsCatalogType = {
  size: string;
  length: string;
  price: string;
  discount: string;
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

export type TestFieldType = {
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

export type CartPropsType = {
  userState: string;
};

export type UserPropsType = {
  userState: string;
};

export type AddressType = {
  city: string;
  country: string;
  id: string;
  key: string;
  postalCode: string;
  streetName: string;
};

export type CustomerAddressesType = AddressType[] | null;

//                                                                   CATALOG PAGE

export type requestCatalogParamsType = {
  fuzzy?: boolean;
  fuzzyLevel?: number;
  markMatchingVariants?: boolean;
  filter?: string | string[];
  'filter.facets'?: string | string[];
  'filter.query'?: string | string[];
  facet?: string | string[];
  sort?: string | string[];
  limit?: number;
  offset?: number;
  withTotal?: boolean;
  staged?: boolean;
  priceCurrency?: string;
  priceCountry?: string;
  priceCustomerGroup?: string;
  priceChannel?: string;
  localeProjection?: string | string[];
  storeProjection?: string;
  expand?: string | string[];
  [key: string]: QueryParam;
};
export type CatalogSaucesProps = {
  products: ProductsType;
  setProductDetailes: SetProductDetailsType;
};

export type CatalogDrinksProps = CatalogSaucesProps;

export type CatalogPizzasProps = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
  setProductDetailes: SetProductDetailsType;
};

export type CatalogPropsType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
  setProductDetailes: SetProductDetailsType;
};

export type CatalogFoodType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
  setProductDetailes: SetProductDetailsType;
};

export type CatalogFoodNamedType = {
  products: ProductsType;
  setProductDetailes: SetProductDetailsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogDrinksType = {
  products: ProductsType;
  setProductDetailes: SetProductDetailsType;
};

export type CatalogLayuotPropsType = {
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
  currentCathegory: string;
  setCurrentCathegory: React.Dispatch<React.SetStateAction<string>>;
};

export type CatalogInputsPropsType = {
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogNavPropsType = {
  currentCathegory: string;
  setCurrentCathegory: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

//                                                                  DETAILS PAGE

export type SetProductDetailsType = {
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  setProductDescription: React.Dispatch<React.SetStateAction<string>>;
  setProductPrice: React.Dispatch<React.SetStateAction<string>>;
  setProductImg: React.Dispatch<React.SetStateAction<string[]>>;
  setProductType: React.Dispatch<React.SetStateAction<'pizzas' | 'sauces' | 'drinks'>>;
  setProductWeigth: React.Dispatch<React.SetStateAction<string>>;
  setProductPFCK: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ProductDetailsType = {
  productName: string;
  productDescription: string;
  productPrice: string;
  productImg: string[];
  productType: 'pizzas' | 'sauces' | 'drinks';
  productWeigth: string;
  productPFCK: number[];
};

export type ProductItemType = {
  name: string;
  PFCK: number[];
  key: string;
};

export type SliderPropsType = {
  imageCount: number;
  imagesURL: string[];
  setIsOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PopUpPropsType = {
  isOpenPopUp: boolean;
  imageCount: number;
  setIsOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  imgURL: string[];
};

//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};

//                                                      COMMERCE TOOLS

export type ProductsType = {
  categories: {
    typeId: string;
    id: string;
  }[];
  categoryOrderHints: {};
  createdAt: string;
  description: {
    'en-US': string;
  };
  hasStagedChanges: boolean;
  id: string;
  key: string;
  lastModifiedAt: string;
  masterVariant: {
    assets?: [];
    attributes?: [];
    id: number;
    images: {
      dimensions: {
        h: number;
        w: number;
      };
      url: string;
    }[];
    key: string;
    prices: {
      country?: string;
      discounted?: {
        discount: {
          id: string;
          typeId: string;
        };
        value: {
          centAmount: number;
          currencyCode: string;
          fractionDigits: number;
          type: string;
        };
      };
      id: string;
      key: string;
      value: {
        centAmount: number;
        currencyCode: string;
        fractionDigits: number;
        type: string;
      };
    }[];
    sku: string;
  };
  metaDescription: {
    'en-US': string;
  };
  metaTitle: {
    'en-US': string;
  };
  name: {
    'en-US': string;
  };
  priceMode: string;
  productType: {
    typeId: string;
    id: string;
  };
  published: boolean;
  searchKeywords: {};
  slug: {
    'en-US': string;
  };
  variants:
    | {
        assets: [];
        attributes: [];
        id: number;
        images: {
          dimensions: {
            h: number;
            w: number;
          };
          url: string;
        }[];
        key: string;
        prices: {
          discounted?: {
            discount: {
              id: string;
              typeId: string;
            };
            value: {
              centAmount: number;
              currencyCode: string;
              fractionDigits: number;
              type: string;
            };
          };
          id: string;
          key: string;
          value: {
            centAmount: number;
            currencyCode: string;
            fractionDigits: number;
            type: string;
          };
        }[];
        sku: string;
      }[]
    | [];
  version: number;
}[];

export type requestType = {
  count: number;
  limit: number;
  offset: number;
  results: {
    categories: {
      typeId: string;
      id: string;
    }[];
    categoryOrderHints: {};
    createdAt: string;
    description: {
      'en-US': string;
    };
    hasStagedChanges: boolean;
    id: string;
    key: string;
    lastModifiedAt: string;
    masterVariant: {
      assets?: [];
      attributes?: [];
      id: number;
      images: {
        dimensions: {
          h: number;
          w: number;
        };
        url: string;
      }[];
      key: string;
      prices: {
        country?: string;
        discounted?: {
          discount: {
            id: string;
            typeId: string;
          };
          value: {
            centAmount: number;
            currencyCode: string;
            fractionDigits: number;
            type: string;
          };
        };
        id: string;
        key: string;
        value: {
          centAmount: number;
          currencyCode: string;
          fractionDigits: number;
          type: string;
        };
      }[];
      sku: string;
    };
    metaDescription: {
      'en-US': string;
    };
    metaTitle: {
      'en-US': string;
    };
    name: {
      'en-US': string;
    };
    priceMode: string;
    productType: {
      typeId: string;
      id: string;
    };
    published: boolean;
    searchKeywords: {};
    slug: {
      'en-US': string;
    };
    variants:
      | {
          assets: [];
          attributes: [];
          id: number;
          images: {
            dimensions: {
              h: number;
              w: number;
            };
            url: string;
          }[];
          key: string;
          prices: {
            discounted?: {
              discount: {
                id: string;
                typeId: string;
              };
              value: {
                centAmount: number;
                currencyCode: string;
                fractionDigits: number;
                type: string;
              };
            };
            id: string;
            key: string;
            value: {
              centAmount: number;
              currencyCode: string;
              fractionDigits: number;
              type: string;
            };
          }[];
          sku: string;
        }[]
      | [];
    version: number;
  }[];
  total: number;
};
