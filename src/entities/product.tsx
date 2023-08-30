// бизнес-сущности.(например, User, Product, Order)

const infoProducts = {
  pizzas: [
    {
      name: 'Pepperoni',
      PFCK: [10.4, 12.8, 21.2, 241],
      key: 'PS-1-1-1',
    },
    {
      name: 'Salami',
      PFCK: [14.7, 16.2, 22.9, 324],
      key: 'PS-1-1-2',
    },
    {
      name: 'Rustic',
      PFCK: [9.7, 11.3, 27.8, 315],
      key: 'PS-1-1-3',
    },
    {
      name: 'Greek',
      PFCK: [12.1, 9.8, 26.5, 278],
      key: 'PS-1-1-4',
    },
    {
      name: 'Cheese&meat',
      PFCK: [18.6, 22.4, 15.8, 348],
      key: 'PS-1-1-5',
    },
    {
      name: 'Mushroom',
      PFCK: [10.2, 8.7, 30.5, 256],
      key: 'PS-1-1-6',
    },
    {
      name: 'Vegetable',
      PFCK: [9.3, 11.6, 24.9, 235],
      key: 'PS-1-1-7',
    },
    {
      name: 'Original',
      PFCK: [12.8, 15.4, 18.2, 285],
      key: 'PS-1-1-8',
    },
    {
      name: 'Tomato',
      PFCK: [9.7, 12.1, 22.8, 258],
      key: 'PS-1-1-9',
    },
    {
      name: 'Vegetarian',
      PFCK: [11.2, 10.8, 27.6, 269],
      key: 'PS-1-1-10',
    },
    {
      name: 'Bacon',
      PFCK: [14.3, 18.6, 23.2, 345],
      key: 'PS-1-1-11',
    },
    {
      name: 'Broccoli',
      PFCK: [8.9, 11.2, 19.7, 236],
      key: 'PS-1-1-12',
    },
    {
      name: 'Hunting',
      PFCK: [16.5, 19.8, 14.2, 324],
      key: 'PS-1-1-13',
    },
    {
      name: 'Forest',
      PFCK: [9.2, 13.5, 21.8, 278],
      key: 'PS-1-1-14',
    },
    {
      name: 'Spicy',
      PFCK: [13.5, 15.2, 18.7, 289],
      key: 'PS-1-1-15',
    },
  ],
  sauces: [
    {
      name: 'Carry',
      PFCK: [1.8, 4.6, 5.2, 61],
      key: 'PS-1-2-1',
    },
    {
      name: 'Ketchup',
      PFCK: [0.8, 0, 25, 35],
      key: 'PS-1-2-2',
    },
    {
      name: 'Tomato',
      PFCK: [0.9, 2.5, 3.6, 29],
      key: 'PS-1-2-3',
    },
    {
      name: 'Onion',
      PFCK: [0.6, 1.7, 8.2, 40],
      key: 'PS-1-2-4',
    },
    {
      name: 'Sweet',
      PFCK: [4.2, 12.8, 9.5, 240],
      key: 'PS-1-2-5',
    },
    {
      name: 'Garlic',
      PFCK: [1.0, 0.2, 33.1, 205],
      key: 'PS-1-2-6',
    },
    {
      name: 'Sour cream',
      PFCK: [2.2, 21.0, 3.0, 213],
      key: 'PS-1-2-7',
    },
    {
      name: 'Barbecue',
      PFCK: [18.5, 5.2, 8.7, 285],
      key: 'PS-1-2-8',
    },
  ],
  drinks: [
    {
      name: 'Coca-cola',
      PFCK: [0.0, 0.2, 10.7, 42],
      key: 'DR-1-1',
    },
    {
      name: 'Fanta',
      PFCK: [0.0, 0.3, 9.8, 45],
      key: 'DR-1-2',
    },
    {
      name: 'Sprite',
      PFCK: [0.0, 0.2, 10.2, 43],
      key: 'DR-1-3',
    },
    {
      name: 'Pepsi',
      PFCK: [0.0, 0.3, 10.5, 45],
      key: 'DR-1-4',
    },
    {
      name: 'Bonaqua',
      PFCK: [0.0, 0.0, 0.0, 0],
      key: 'DR-1-5',
    },
    {
      name: 'Orange juice',
      PFCK: [0.7, 0.3, 10.2, 45],
      key: 'DR-1-6',
    },
  ],
};

export default infoProducts;

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
