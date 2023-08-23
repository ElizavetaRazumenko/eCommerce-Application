// бизнес-сущности.(например, User, Product, Order)
const infoProducts = {
  pizzas: [
    {
      name: 'Pepperoni',
      description:
        'Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper',
      mainIngredients: 'salami, beef, cheese, tomato paste, mushrooms',
      PFC: [10.4, 12.8, 21.2],
      calories: 241,
      vegetarian: false,
      isNoSpacy: false,
      isLowColorie: true,
    },
    {
      name: 'Salami',
      description:
        "The Salami pizza is a carnivore's delight that brings together the bold and savory flavors of salami with classic pizza elements, resulting in a satisfying culinary experience.",
      mainIngrediens: 'salami slices, mozzarella cheese, tomato sauce, black olives, red onion',
      PFC: [14.7, 16.2, 22.9],
      calories: 324,
      vegetarian: false,
      isNoSpacy: false,
      isLowColorie: false,
    },
    {
      name: 'Rustic',
      description:
        'Rustic pizza captures the essence of the countryside with a mix of hearty ingredients and earthy flavors.',
      mainIngrediens:
        'rosemary-infused olive oil, roasted garlic, goat cheese, caramelized onions, spinach',
      PFC: [9.7, 11.3, 27.8],
      calories: 315,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Greek',
      description:
        'Greek pizza offers a taste of the Mediterranean with a blend of olives, feta cheese, and fresh vegetables.',
      mainIngrediens:
        'kalamata olives, feta cheese, red onion, bell peppers, cherry tomatoes, oregano',
      PFC: [12.1, 9.8, 26.5],
      calories: 278,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Cheese & Meat',
      description:
        'Indulge in the perfect combination of gooey melted cheese and savory meat toppings, creating a delightful harmony of flavors.',
      mainIngrediens: 'mozzarella cheese, pepperoni, Italian sausage, bacon, ham',
      PFC: [18.6, 22.4, 15.8],
      calories: 348,
      vegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Mushroom',
      description:
        'The Mushroom pizza is a celebration of earthy flavors with a generous topping of various mushrooms that create a rich and satisfying taste.',
      mainIngrediens:
        'button mushrooms, portobello mushrooms, shiitake mushrooms, mozzarella cheese, garlic, thyme',
      PFC: [10.2, 8.7, 30.5],
      calories: 256,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
    },
    {
      name: 'Vegetable',
      description:
        'The Vegetable pizza is a garden-fresh delight, featuring a colorful assortment of vibrant vegetables that come together in a burst of flavor.',
      mainIngrediens:
        'bell peppers, red onion, cherry tomatoes, black olives, spinach, mozzarella cheese',
      PFC: [9.3, 11.6, 24.9],
      calories: 235,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
    },
    {
      name: 'Original',
      description:
        'The Original pizza pays homage to the classic flavors that started it all, combining a simple yet satisfying combination of timeless ingredients.',
      mainIngrediens:
        'tomato sauce, mozzarella cheese, pepperoni, green bell peppers, black olives',
      PFC: [12.8, 15.4, 18.2],
      calories: 285,
      vegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Tomato',
      description:
        'The Tomato pizza is a celebration of the bold and vibrant flavors of tomatoes, featuring a delicious combination of tomato-based ingredients.',
      mainIngrediens:
        'tomato sauce, fresh tomatoes, sun-dried tomatoes, cherry tomatoes, mozzarella cheese, basil',
      PFC: [9.7, 12.1, 22.8],
      calories: 258,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Vegetarian',
      description:
        'The Vegetarian pizza is a wholesome delight for herbivores, featuring an abundance of fresh and flavorful plant-based ingredients.',
      mainIngrediens:
        'bell peppers, red onion, mushrooms, spinach, black olives, mozzarella cheese, tomato sauce',
      PFC: [11.2, 10.8, 27.6],
      calories: 269,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
    },
    {
      name: 'Bacon',
      description:
        'The Bacon pizza is a savory delight that combines the irresistible smokiness of bacon with classic pizza ingredients, creating a mouthwatering experience.',
      mainIngrediens: 'bacon, mozzarella cheese, tomato sauce, red onion, bell peppers',
      PFC: [14.3, 18.6, 23.2],
      calories: 345,
      vegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Broccoli',
      description:
        'The Broccoli pizza is a flavorful twist that embraces the nutritional goodness of broccoli, paired with complementary ingredients for a delicious and healthy option.',
      mainIngrediens: 'broccoli florets, mozzarella cheese, garlic, red pepper flakes, olive oil',
      PFC: [8.9, 11.2, 19.7],
      calories: 236,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: true,
    },
    {
      name: 'Hunting',
      description:
        'The Hunting pizza is a bold fusion of flavors that captures the essence of the great outdoors. Rich and hearty game meats are combined with robust ingredients to create a truly satisfying culinary experience.',
      mainIngrediens:
        'venison sausage, wild boar bacon, elk steak strips, caramelized onions, aged cheddar cheese',
      PFC: [16.5, 19.8, 14.2],
      calories: 324,
      vegetarian: false,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Forest',
      description:
        'The Forest pizza is a culinary journey into the heart of nature, where earthy ingredients come together to create a harmonious and aromatic medley of flavors.',
      mainIngrediens:
        'wild mushrooms, truffle oil, spinach, caramelized shallots, goat cheese, mozzarella cheese',
      PFC: [9.2, 13.5, 21.8],
      calories: 278,
      vegetarian: true,
      isNoSpacy: true,
      isLowColorie: false,
    },
    {
      name: 'Spicy',
      description:
        'Spicy is a fiery delight that combines the kick of chili peppers with savory toppings for a tantalizing experience.',
      mainIngrediens: 'chili peppers, pepper jack cheese, spicy sausage, red onion, jalapenos',
      PFC: [13.5, 15.2, 18.7],
      calories: 289,
      vegetarian: false,
      isNoSpacy: false,
      isLowColorie: false,
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
      isSpicy: true, // Подразумевает, что соус имеет острый вкус
      isVegan: true, // Подразумевает, что соус веганский, не содержит продуктов животного происхождения
      isGlutenFree: true, // Подразумевает, что соус не содержит глютена
      isDairyFree: true,
    },
  ],
  drincs: [
    {
      name: 'Coca-Cola',
      description:
        'Coca-Cola is a classic carbonated soft drink known for its refreshing and iconic taste. With a perfect balance of sweetness and fizziness, it has been enjoyed for generations as a delightful beverage that pairs well with various meals and occasions.',
      flavorProfile: 'refreshing, sweet, effervescent',
      calories: 140,
      isCarbonated: true,
      isCaffeinated: true,
      isDiet: false,
      isZeroSugar: false,
    },
  ],
};
