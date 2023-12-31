import { KeyObject } from '../types/types';

const infoProducts = {
  pizzas: [
    {
      name: 'Pepperoni',
      PFCK: [10.4, 12.8, 21.2, 241],
      key: 'PS-1-1-1',
      onCart: false,
    },
    {
      name: 'Salami',
      PFCK: [14.7, 16.2, 22.9, 324],
      key: 'PS-1-1-2',
      onCart: false,
    },
    {
      name: 'Rustic',
      PFCK: [9.7, 11.3, 27.8, 315],
      key: 'PS-1-1-3',
      onCart: false,
    },
    {
      name: 'Greek',
      PFCK: [12.1, 9.8, 26.5, 278],
      key: 'PS-1-1-4',
      onCart: false,
    },
    {
      name: 'Cheese&meat',
      PFCK: [18.6, 22.4, 15.8, 348],
      key: 'PS-1-1-5',
      onCart: false,
    },
    {
      name: 'Mushroom',
      PFCK: [10.2, 8.7, 30.5, 256],
      key: 'PS-1-1-6',
      onCart: false,
    },
    {
      name: 'Vegetable',
      PFCK: [9.3, 11.6, 24.9, 235],
      key: 'PS-1-1-7',
      onCart: false,
    },
    {
      name: 'Original',
      PFCK: [12.8, 15.4, 18.2, 285],
      key: 'PS-1-1-8',
      onCart: false,
    },
    {
      name: 'Tomato',
      PFCK: [9.7, 12.1, 22.8, 258],
      key: 'PS-1-1-9',
      onCart: false,
    },
    {
      name: 'Vegetarian',
      PFCK: [11.2, 10.8, 27.6, 269],
      key: 'PS-1-1-10',
      onCart: false,
    },
    {
      name: 'Bacon',
      PFCK: [14.3, 18.6, 23.2, 345],
      key: 'PS-1-1-11',
      onCart: false,
    },
    {
      name: 'Broccoli',
      PFCK: [8.9, 11.2, 19.7, 236],
      key: 'PS-1-1-12',
      onCart: false,
    },
    {
      name: 'Hunting',
      PFCK: [16.5, 19.8, 14.2, 324],
      key: 'PS-1-1-13',
      onCart: false,
    },
    {
      name: 'Forest',
      PFCK: [9.2, 13.5, 21.8, 278],
      key: 'PS-1-1-14',
      onCart: false,
    },
    {
      name: 'Spicy',
      PFCK: [13.5, 15.2, 18.7, 289],
      key: 'PS-1-1-15',
      onCart: false,
    },
  ],
  sauces: [
    {
      name: 'Carry',
      PFCK: [1.8, 4.6, 5.2, 61],
      key: 'PS-1-2-1',
      onCart: false,
    },
    {
      name: 'Ketchup',
      PFCK: [0.8, 0, 25, 35],
      key: 'PS-1-2-2',
      onCart: false,
    },
    {
      name: 'Tomato',
      PFCK: [0.9, 2.5, 3.6, 29],
      key: 'PS-1-2-3',
      onCart: false,
    },
    {
      name: 'Onion',
      PFCK: [0.6, 1.7, 8.2, 40],
      key: 'PS-1-2-4',
      onCart: false,
    },
    {
      name: 'Sweet',
      PFCK: [4.2, 12.8, 9.5, 240],
      key: 'PS-1-2-5',
      onCart: false,
    },
    {
      name: 'Garlic',
      PFCK: [1.0, 0.2, 33.1, 205],
      key: 'PS-1-2-6',
      onCart: false,
    },
    {
      name: 'Sour cream',
      PFCK: [2.2, 21.0, 3.0, 213],
      key: 'PS-1-2-7',
      onCart: false,
    },
    {
      name: 'Barbecue',
      PFCK: [18.5, 5.2, 8.7, 285],
      key: 'PS-1-2-8',
      onCart: false,
    },
  ],
  drinks: [
    {
      name: 'Coca-cola',
      PFCK: [0.0, 0.2, 10.7, 42],
      key: 'DR-1-1',
      onCart: false,
    },
    {
      name: 'Fanta',
      PFCK: [0.0, 0.3, 9.8, 45],
      key: 'DR-1-2',
      onCart: false,
    },
    {
      name: 'Sprite',
      PFCK: [0.0, 0.2, 10.2, 43],
      key: 'DR-1-3',
      onCart: false,
    },
    {
      name: 'Pepsi',
      PFCK: [0.0, 0.3, 10.5, 45],
      key: 'DR-1-4',
      onCart: false,
    },
    {
      name: 'Bonaqua',
      PFCK: [0.0, 0.0, 0.0, 0],
      key: 'DR-1-5',
      onCart: false,
    },
    {
      name: 'Orange juice',
      PFCK: [0.7, 0.3, 10.2, 45],
      key: 'DR-1-6',
      onCart: false,
    },
  ],
};

export default infoProducts;

export const keysProduct = [
  'PS-1-1-1',
  'PS-1-1-2',
  'PS-1-1-3',
  'PS-1-1-4',
  'PS-1-1-5',
  'PS-1-1-6',
  'PS-1-1-7',
  'PS-1-1-8',
  'PS-1-1-9',
  'PS-1-1-10',
  'PS-1-1-11',
  'PS-1-1-12',
  'PS-1-1-13',
  'PS-1-1-14',
  'PS-1-1-15',
  'PS-1-2-1',
  'PS-1-2-2',
  'PS-1-2-3',
  'PS-1-2-4',
  'PS-1-2-5',
  'PS-1-2-6',
  'PS-1-2-7',
  'PS-1-2-8',
  'DR-1-1',
  'DR-1-2',
  'DR-1-3',
  'DR-1-4',
  'DR-1-5',
  'DR-1-6',
];

export const productOnCart: Record<KeyObject, boolean> = {
  'PS-1-1-1-L': false,
  'PS-1-1-1-M': false,
  'PS-1-1-1-S': false,
  'PS-1-1-2-L': false,
  'PS-1-1-2-M': false,
  'PS-1-1-2-S': false,
  'PS-1-1-3-L': false,
  'PS-1-1-3-M': false,
  'PS-1-1-3-S': false,
  'PS-1-1-4-L': false,
  'PS-1-1-4-M': false,
  'PS-1-1-4-S': false,
  'PS-1-1-5-L': false,
  'PS-1-1-5-M': false,
  'PS-1-1-5-S': false,
  'PS-1-1-6-L': false,
  'PS-1-1-6-M': false,
  'PS-1-1-6-S': false,
  'PS-1-1-7-L': false,
  'PS-1-1-7-M': false,
  'PS-1-1-7-S': false,
  'PS-1-1-8-L': false,
  'PS-1-1-8-M': false,
  'PS-1-1-8-S': false,
  'PS-1-1-9-L': false,
  'PS-1-1-9-M': false,
  'PS-1-1-9-S': false,
  'PS-1-1-10-L': false,
  'PS-1-1-10-M': false,
  'PS-1-1-10-S': false,
  'PS-1-1-11-L': false,
  'PS-1-1-11-M': false,
  'PS-1-1-11-S': false,
  'PS-1-1-12-L': false,
  'PS-1-1-12-M': false,
  'PS-1-1-12-S': false,
  'PS-1-1-13-L': false,
  'PS-1-1-13-M': false,
  'PS-1-1-13-S': false,
  'PS-1-1-14-L': false,
  'PS-1-1-14-M': false,
  'PS-1-1-14-S': false,
  'PS-1-1-15-L': false,
  'PS-1-1-15-M': false,
  'PS-1-1-15-S': false,
  'PS-1-2-1-': false,
  'PS-1-2-2-': false,
  'PS-1-2-3-': false,
  'PS-1-2-4-': false,
  'PS-1-2-5-': false,
  'PS-1-2-6-': false,
  'PS-1-2-7-': false,
  'PS-1-2-8-': false,
  'DR-1-1-': false,
  'DR-1-2-': false,
  'DR-1-3-': false,
  'DR-1-4-': false,
  'DR-1-5-': false,
  'DR-1-6-': false,
};

export const productIdOnCart: Record<KeyObject, string> = {
  'PS-1-1-1-L': '',
  'PS-1-1-1-M': '',
  'PS-1-1-1-S': '',
  'PS-1-1-2-L': '',
  'PS-1-1-2-M': '',
  'PS-1-1-2-S': '',
  'PS-1-1-3-L': '',
  'PS-1-1-3-M': '',
  'PS-1-1-3-S': '',
  'PS-1-1-4-L': '',
  'PS-1-1-4-M': '',
  'PS-1-1-4-S': '',
  'PS-1-1-5-L': '',
  'PS-1-1-5-M': '',
  'PS-1-1-5-S': '',
  'PS-1-1-6-L': '',
  'PS-1-1-6-M': '',
  'PS-1-1-6-S': '',
  'PS-1-1-7-L': '',
  'PS-1-1-7-M': '',
  'PS-1-1-7-S': '',
  'PS-1-1-8-L': '',
  'PS-1-1-8-M': '',
  'PS-1-1-8-S': '',
  'PS-1-1-9-L': '',
  'PS-1-1-9-M': '',
  'PS-1-1-9-S': '',
  'PS-1-1-10-L': '',
  'PS-1-1-10-M': '',
  'PS-1-1-10-S': '',
  'PS-1-1-11-L': '',
  'PS-1-1-11-M': '',
  'PS-1-1-11-S': '',
  'PS-1-1-12-L': '',
  'PS-1-1-12-M': '',
  'PS-1-1-12-S': '',
  'PS-1-1-13-L': '',
  'PS-1-1-13-M': '',
  'PS-1-1-13-S': '',
  'PS-1-1-14-L': '',
  'PS-1-1-14-M': '',
  'PS-1-1-14-S': '',
  'PS-1-1-15-L': '',
  'PS-1-1-15-M': '',
  'PS-1-1-15-S': '',
  'PS-1-2-1-': '',
  'PS-1-2-2-': '',
  'PS-1-2-3-': '',
  'PS-1-2-4-': '',
  'PS-1-2-5-': '',
  'PS-1-2-6-': '',
  'PS-1-2-7-': '',
  'PS-1-2-8-': '',
  'DR-1-1-': '',
  'DR-1-2-': '',
  'DR-1-3-': '',
  'DR-1-4-': '',
  'DR-1-5-': '',
  'DR-1-6-': '',
};

export const keysPizza = [
  'PS-1-1-1',
  'PS-1-1-2',
  'PS-1-1-3',
  'PS-1-1-4',
  'PS-1-1-5',
  'PS-1-1-6',
  'PS-1-1-7',
  'PS-1-1-8',
  'PS-1-1-9',
  'PS-1-1-10',
  'PS-1-1-11',
  'PS-1-1-12',
  'PS-1-1-13',
  'PS-1-1-14',
  'PS-1-1-15',
];

export const keysSauces = [
  'PS-1-2-1',
  'PS-1-2-2',
  'PS-1-2-3',
  'PS-1-2-4',
  'PS-1-2-5',
  'PS-1-2-6',
  'PS-1-2-7',
  'PS-1-2-8',
];

export const keysDrinks = ['DR-1-1', 'DR-1-2', 'DR-1-3', 'DR-1-4', 'DR-1-5', 'DR-1-6'];

export const startProductObject = [
  {
    categories: [
      {
        typeId: '',
        id: '',
      },
    ],
    categoryOrderHints: {},
    createdAt: '',
    description: {
      'en-US': '',
    },
    hasStagedChanges: true,
    id: '',
    key: '',
    lastModifiedAt: '',
    masterVariant: {
      id: 0,
      images: [
        {
          dimensions: {
            h: 0,
            w: 0,
          },
          url: '',
        },
      ],
      key: '',
      prices: [
        {
          id: '',
          key: '',
          value: {
            centAmount: 1,
            currencyCode: '',
            fractionDigits: 1,
            type: '',
          },
        },
      ],
      sku: '',
    },
    metaDescription: {
      'en-US': '',
    },
    metaTitle: {
      'en-US': '',
    },
    name: {
      'en-US': '',
    },
    priceMode: '',
    productType: {
      typeId: '',
      id: '',
    },
    published: false,
    searchKeywords: {},
    slug: {
      'en-US': '',
    },
    variants: [],
    version: 0,
  },
];
