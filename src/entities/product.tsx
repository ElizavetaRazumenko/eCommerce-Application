// бизнес-сущности.(например, User, Product, Order)

export const productsKeys = {
  pizzas: [
    {
      name: 'Pepperoni',
      key: 'PS-1-1-1',
    },
    {
      name: 'Salami',
      key: 'PS-1-1-2',
    },
    {
      name: 'Rustic',
      key: 'PS-1-1-3',
    },
    {
      name: 'Greek',
      key: 'PS-1-1-4',
    },
    {
      name: 'Cheese & Meat',
      key: 'PS-1-1-5',
    },
    {
      name: 'Mushroom',
      key: 'PS-1-1-6',
    },
    {
      name: 'Vegetable',
      key: 'PS-1-1-7',
    },
    {
      name: 'Original',
      key: 'PS-1-1-8',
    },
    {
      name: 'Tomato',
      key: 'PS-1-1-9',
    },
    {
      name: 'Vegetarian',
      key: 'PS-1-1-10',
    },
    {
      name: 'Bacon',
      key: 'PS-1-1-11',
    },
    {
      name: 'Broccoli',
      key: 'PS-1-1-12',
    },
    {
      name: 'Hunting',
      key: 'PS-1-1-13',
    },
    {
      name: 'Forest',
      key: 'PS-1-1-14',
    },
    {
      name: 'Spicy',
      key: 'PS-1-1-15',
    },
  ],
  sauces: [
    {
      name: 'Curry',
      key: 'PS-1-2-1',
    },
    {
      name: 'Ketchup',
      key: 'PS-1-2-2',
    },
    {
      name: 'Tomato Sauce',
      key: 'PS-1-2-3',
    },
    {
      name: 'Onion',
      key: 'PS-1-2-4',
    },
    {
      name: 'Sweet',
      key: 'PS-1-2-5',
    },
    {
      name: 'Garlic',
      key: 'PS-1-2-6',
    },
    {
      name: 'Sour Cream',
      key: 'PS-1-2-7',
    },
    {
      name: 'Barbecue',
      key: 'PS-1-2-8',
    },
  ],
  drinks: [
    {
      name: 'Coca-Cola',
      key: 'DR-1-1',
    },
    {
      name: 'Fanta',
      key: 'DR-1-2',
    },
    {
      name: 'Sprite',
      key: 'DR-1-3',
    },
    {
      name: 'Pepsi',
      key: 'DR-1-4',
    },
    {
      name: 'Bonaqua',
      key: 'DR-1-5',
    },
    {
      name: 'GOOD Juicery',
      key: 'DR-1-6',
    },
  ],
};
const infoProducts = {
  pizzas: [
    {
      name: 'Pepperoni',
      description:
        'Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper',
      mainIngredients: 'salami, beef, cheese, tomato paste, mushrooms',
      PFC: [10.4, 12.8, 21.2],
      calories: 241,
      isVvegetarian: false,
      isNoSpacy: false,
      isLowColorie: true,
      key: 'PS-1-1-1',
    },
    {
      name: 'Salami',
      description:
        "The Salami pizza is a carnivore's delight that brings together the bold and savory flavors of salami with classic pizza elements, resulting in a satisfying culinary experience.",
      mainIngredients: 'salami slices, mozzarella cheese, tomato sauce, black olives, red onion',
      PFC: [14.7, 16.2, 22.9],
      calories: 324,
      isVegetarian: false,
      isNoSpacy: false,
      isLowColorie: false,
      key: 'PS-1-1-2',
    },
    {
      name: 'Rustic',
      description:
        'Rustic pizza captures the essence of the countryside with a mix of hearty ingredients and earthy flavors.',
      mainIngredients:
        'rosemary-infused olive oil, roasted garlic, goat cheese, caramelized onions, spinach',
      PFC: [9.7, 11.3, 27.8],
      calories: 315,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-3',
    },
    {
      name: 'Greek',
      description:
        'Greek pizza offers a taste of the Mediterranean with a blend of olives, feta cheese, and fresh vegetables.',
      mainIngredients:
        'kalamata olives, feta cheese, red onion, bell peppers, cherry tomatoes, oregano',
      PFC: [12.1, 9.8, 26.5],
      calories: 278,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-4',
    },
    {
      name: 'Cheese & Meat',
      description:
        'Indulge in the perfect combination of gooey melted cheese and savory meat toppings, creating a delightful harmony of flavors.',
      mainIngredients: 'mozzarella cheese, pepperoni, Italian sausage, bacon, ham',
      PFC: [18.6, 22.4, 15.8],
      calories: 348,
      isVegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-5',
    },
    {
      name: 'Mushroom',
      description:
        'The Mushroom pizza is a celebration of earthy flavors with a generous topping of various mushrooms that create a rich and satisfying taste.',
      mainIngredients:
        'button mushrooms, portobello mushrooms, shiitake mushrooms, mozzarella cheese, garlic, thyme',
      PFC: [10.2, 8.7, 30.5],
      calories: 256,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
      key: 'PS-1-1-6',
    },
    {
      name: 'Vegetable',
      description:
        'The Vegetable pizza is a garden-fresh delight, featuring a colorful assortment of vibrant vegetables that come together in a burst of flavor.',
      mainIngredients:
        'bell peppers, red onion, cherry tomatoes, black olives, spinach, mozzarella cheese',
      PFC: [9.3, 11.6, 24.9],
      calories: 235,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
      key: 'PS-1-1-7',
    },
    {
      name: 'Original',
      description:
        'The Original pizza pays homage to the classic flavors that started it all, combining a simple yet satisfying combination of timeless ingredients.',
      mainIngredients:
        'tomato sauce, mozzarella cheese, pepperoni, green bell peppers, black olives',
      PFC: [12.8, 15.4, 18.2],
      calories: 285,
      isVegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-8',
    },
    {
      name: 'Tomato',
      description:
        'The Tomato pizza is a celebration of the bold and vibrant flavors of tomatoes, featuring a delicious combination of tomato-based ingredients.',
      mainIngredients:
        'tomato sauce, fresh tomatoes, sun-dried tomatoes, cherry tomatoes, mozzarella cheese, basil',
      PFC: [9.7, 12.1, 22.8],
      calories: 258,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-9',
    },
    {
      name: 'Vegetarian',
      description:
        'The Vegetarian pizza is a wholesome delight for herbivores, featuring an abundance of fresh and flavorful plant-based ingredients.',
      mainIngredients:
        'bell peppers, red onion, mushrooms, spinach, black olives, mozzarella cheese, tomato sauce',
      PFC: [11.2, 10.8, 27.6],
      calories: 269,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
      key: 'PS-1-1-10',
    },
    {
      name: 'Bacon',
      description:
        'The Bacon pizza is a savory delight that combines the irresistible smokiness of bacon with classic pizza ingredients, creating a mouthwatering experience.',
      mainIngredients: 'bacon, mozzarella cheese, tomato sauce, red onion, bell peppers',
      PFC: [14.3, 18.6, 23.2],
      calories: 345,
      isVegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-11',
    },
    {
      name: 'Broccoli',
      description:
        'The Broccoli pizza is a flavorful twist that embraces the nutritional goodness of broccoli, paired with complementary ingredients for a delicious and healthy option.',
      mainIngredients: 'broccoli florets, mozzarella cheese, garlic, red pepper flakes, olive oil',
      PFC: [8.9, 11.2, 19.7],
      calories: 236,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
      key: 'PS-1-1-12',
    },
    {
      name: 'Hunting',
      description:
        'The Hunting pizza is a bold fusion of flavors that captures the essence of the great outdoors. Rich and hearty game meats are combined with robust ingredients to create a truly satisfying culinary experience.',
      mainIngredients:
        'venison sausage, wild boar bacon, elk steak strips, caramelized onions, aged cheddar cheese',
      PFC: [16.5, 19.8, 14.2],
      calories: 324,
      isVegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-13',
    },
    {
      name: 'Forest',
      description:
        'The Forest pizza is a culinary journey into the heart of nature, where earthy ingredients come together to create a harmonious and aromatic medley of flavors.',
      mainIngredients:
        'wild mushrooms, truffle oil, spinach, caramelized shallots, goat cheese, mozzarella cheese',
      PFC: [9.2, 13.5, 21.8],
      calories: 278,
      isVegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
      key: 'PS-1-1-14',
    },
    {
      name: 'Spicy',
      description:
        'Spicy is a fiery delight that combines the kick of chili peppers with savory toppings for a tantalizing experience.',
      mainIngredients: 'chili peppers, pepper jack cheese, spicy sausage, red onion, jalapenos',
      PFC: [13.5, 15.2, 18.7],
      calories: 289,
      isVegetarian: false,
      isNoSpacy: false,
      isLowColorie: false,
      key: 'PS-1-1-15',
    },
  ],
  sauces: [
    {
      name: 'Curry',
      description:
        'The Curry Sauce is a flavorful addition that infuses your pizza with the aromatic richness of traditional curry. Crafted from a blend of curry spices and seasonings, it brings an enticing and exotic twist to your pizza experience.',
      mainIngredients: 'curry spices, tomatoes, onions, garlic, ginger, coconut milk',
      PFC: [1.8, 4.6, 5.2],
      calories: 61,
      isNoSpicy: false,
      isVegan: true,
      isGlutenFree: true,
      key: 'PS-1-2-1',
    },
    {
      name: 'Ketchup',
      description:
        'A classic tangy and slightly sweet condiment with a rich tomato base and balanced blend of spices. A versatile companion to various dishes.',
      mainIngredients: 'tomatoes, vinegar, sugar, salt, spices',
      PFC: [0.8, 0, 25],
      calories: 10,
      isNoSpicy: true,
      isVegan: true,
      isGlutenFree: true,
      key: 'PS-1-2-2',
    },
    {
      name: 'Tomato Sauce',
      description:
        'The Tomato Sauce captures the essence of ripe tomatoes, aromatic herbs, onions, garlic, and select spices. It enhances your dishes with its timeless and comforting flavor.',
      mainIngredients: 'tomatoes, onions, garlic, herbs, olive oil',
      PFC: [0.9, 2.5, 3.6],
      calories: 29,
      isNoSpicy: true,
      isVegan: true,
      isGlutenFree: true,
      key: 'PS-1-2-3',
    },
    {
      name: 'Onion',
      description: `The Onion's pungent aroma and rich flavor enhance dishes like soups, sauces, and sautés. Its natural sweetness and versatility make it a culinary staple for both simple and complex recipes.`,
      mainIngredients: 'onion, garlic, herbs, olive oil',
      PFC: [0.6, 1.7, 8.2],
      calories: 40,
      isNoSpicy: true,
      isVegan: true,
      isGlutenFree: true,
      key: 'PS-1-2-4',
    },
    {
      name: 'Sweet',
      description:
        'The Sweet Delight is a heavenly treat, combining delightful flavors and a rich, indulgent texture. This dessert brings joy and satisfaction to every bite, making it the perfect companion for any occasion.',
      mainIngredients: 'sugar, chocolate, cream, butter, vanilla',
      PFC: [4.2, 12.8, 9.5],
      calories: 240,
      isNoSpicy: true,
      isVegan: false,
      isGlutenFree: false,
      key: 'PS-1-2-5',
    },
    {
      name: 'Garlic',
      description:
        'Garlic adds depth and flavor to dishes with its pungent aroma and distinct taste. A staple in global cuisines, it brings a savory richness whether roasted, sautéed, or used as a seasoning.',
      mainIngredients: 'garlic, olive oil, herbs, butter',
      PFC: [1.0, 0.2, 33.1],
      calories: 49,
      isNoSpicy: true,
      isVegan: true,
      isGlutenFree: true,
      key: 'PS-1-2-6',
    },
    {
      name: 'Sour Cream',
      description: `Sour Cream enriches sweet and savory dishes with its creamy, tangy essence. With a luscious texture, it's versatile for dips, dressings, baked goods, and more. Whether topping or mixing, it adds a delightful touch to your culinary creations.`,
      mainIngredients: 'sour cream, milk, cultures, enzymes',
      PFC: [2.2, 21.0, 3.0],
      calories: 213,
      isNoSpicy: true,
      isVegan: false,
      isGlutenFree: true,
      key: 'PS-1-2-7',
    },
    {
      name: 'Barbecue',
      description:
        'Barbecue infuses dishes with smoky depth and a burst of flavor. Whether grilled, slow-cooked, or glazed, it adds a tantalizing touch to your culinary creations.',
      mainIngredients: 'meat (such as pork, beef, chicken), marinade, spices, wood chips',
      PFC: [18.5, 5.2, 8.7],
      calories: 275,
      isNoSpicy: 'true',
      isVegan: 'false',
      isGlutenFree: 'true',
      key: 'PS-1-2-8',
    },
  ],
  drinks: [
    {
      name: 'Coca-Cola',
      description: `Coca-Cola is a classic carbonated soft drink with an iconic and refreshing taste. It's enjoyed across generations, offering a perfect balance of sweetness and fizziness that complements various meals and occasions.`,
      isCarbonated: true,
      isZeroSugar: false,
      key: 'DR-1-1',
    },
    {
      name: 'Fanta',
      description:
        'Fanta is a vibrant and fruity carbonated soft drink that delivers a burst of flavors. Its lively and refreshing taste makes it a popular choice for those seeking a colorful and zesty beverage.',
      isCarbonated: true,
      isZeroSugar: false,
      key: 'DR-1-2',
    },
    {
      name: 'Sprite',
      description:
        'Sprite is a crisp and citrusy carbonated soft drink that provides a refreshing and tangy flavor. Known for its clear and effervescent appearance, Sprite is a popular choice for those seeking a zesty and thirst-quenching beverage.',
      isCarbonated: true,
      isZeroSugar: false,
      key: 'DR-1-3',
    },
    {
      name: 'Pepsi',
      description:
        'Pepsi is a well-known carbonated soft drink with a bold and satisfying taste. Its unique blend of flavors offers a delicious and invigorating beverage option. Enjoyed by many, Pepsi is a versatile choice for various occasions.',
      isCarbonated: true,
      isZeroSugar: false,
      key: 'DR-1-4',
    },
    {
      name: 'Bonaqua',
      description:
        'Bonaqua is a refreshing and crisp bottled water, providing pure hydration without any added flavors or sugars. With its clean and natural taste, Bonaqua is a popular choice for staying refreshed throughout the day.',
      isCarbonated: false,
      isZeroSugar: true,
      key: 'DR-1-5',
    },
    {
      name: 'GOOD Juicery',
      description:
        'GOOD Juicery offers a range of cold-pressed juices, bursting with natural flavors and nutrients. Made from fresh fruits and vegetables, these juices provide a delicious and wholesome way to boost your health and vitality.',
      isCarbonated: false,
      isZeroSugar: true,
      key: 'DR-1-6',
    },
  ],
};

export default infoProducts;

export const startProductObject = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [
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
  ],
  total: 1,
};
