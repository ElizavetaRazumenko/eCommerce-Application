import { QueryParam } from '@commercetools/platform-sdk';
import { Dispatch, SetStateAction } from 'react';

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
  discounts: string[];
  code: string;
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
  onCart: boolean;
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
  onCart: boolean;
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

export type Customer = {
  addresses: CustomerAddressType[];
  authenticationMode: string;
  billingAddressIds: string[];
  createdAt: string;
  createdBy: {
    clientId: string;
    isPlatformClient: boolean;
    anonymousId: string;
  };
  dateOfBirth: string;
  defaultBillingAddressId: string;
  defaultShippingAddressId: string;
  email: string;
  firstName: string;
  id: string;
  isEmailVerified: boolean;
  lastMessageSequenceNumber: number;
  lastModifiedAt: string;
  lastModifiedBy: {
    clientId: string;
    isPlatformClient: boolean;
  };
  lastName: string;
  password: string;
  shippingAddressIds: string[];
  stores: string[];
  version: number;
  versionModifiedAt: string;
};

export type HideModalType = {
  onHideModal: () => void;
  customerData: CustomerDataType;
  setNewAddress?: Dispatch<SetStateAction<AddressType[]>>;
  setNewAddress2?: Dispatch<SetStateAction<AddressType[]>>;
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
  findData: {
    key: string | undefined;
    size: string;
  };
  onCart: boolean;
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
};

export type CatalogDrinksProps = CatalogSaucesProps;

export type CatalogPizzasProps = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogPropsType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogFoodType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogFoodNamedType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

export type CatalogDrinksType = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
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
  imagesURL: string[];
  setProductImg: React.Dispatch<React.SetStateAction<string[]>>;
  setIsOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PopUpPropsType = {
  isOpenPopUp: boolean;
  setProductImg: React.Dispatch<React.SetStateAction<string[]>>;
  setIsOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  imgURL: string[];
};

//                                                                    ERROR PAGE

export type ButtonRedirectType = {
  content: string;
  to: To;
};

//                                                      COMMERCE TOOLS

export type ProductType = {
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
};

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

export type KeyObject =
  | 'PS-1-1-1-L'
  | 'PS-1-1-1-M'
  | 'PS-1-1-1-S'
  | 'PS-1-1-2-L'
  | 'PS-1-1-2-M'
  | 'PS-1-1-2-S'
  | 'PS-1-1-3-L'
  | 'PS-1-1-3-M'
  | 'PS-1-1-3-S'
  | 'PS-1-1-4-L'
  | 'PS-1-1-4-M'
  | 'PS-1-1-4-S'
  | 'PS-1-1-5-L'
  | 'PS-1-1-5-M'
  | 'PS-1-1-5-S'
  | 'PS-1-1-6-L'
  | 'PS-1-1-6-M'
  | 'PS-1-1-6-S'
  | 'PS-1-1-7-L'
  | 'PS-1-1-7-M'
  | 'PS-1-1-7-S'
  | 'PS-1-1-8-L'
  | 'PS-1-1-8-M'
  | 'PS-1-1-8-S'
  | 'PS-1-1-9-L'
  | 'PS-1-1-9-M'
  | 'PS-1-1-9-S'
  | 'PS-1-1-10-L'
  | 'PS-1-1-10-M'
  | 'PS-1-1-10-S'
  | 'PS-1-1-11-L'
  | 'PS-1-1-11-M'
  | 'PS-1-1-11-S'
  | 'PS-1-1-12-L'
  | 'PS-1-1-12-M'
  | 'PS-1-1-12-S'
  | 'PS-1-1-13-L'
  | 'PS-1-1-13-M'
  | 'PS-1-1-13-S'
  | 'PS-1-1-14-L'
  | 'PS-1-1-14-M'
  | 'PS-1-1-14-S'
  | 'PS-1-1-15-L'
  | 'PS-1-1-15-M'
  | 'PS-1-1-15-S'
  | 'PS-1-2-1-'
  | 'PS-1-2-2-'
  | 'PS-1-2-3-'
  | 'PS-1-2-4-'
  | 'PS-1-2-5-'
  | 'PS-1-2-6-'
  | 'PS-1-2-7-'
  | 'PS-1-2-8-'
  | 'DR-1-1-'
  | 'DR-1-2-'
  | 'DR-1-3-'
  | 'DR-1-4-'
  | 'DR-1-5-'
  | 'DR-1-6-';
