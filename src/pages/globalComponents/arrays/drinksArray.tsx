// export const drinks: { name: string; url: string; price: number }[] = [

interface IDrink {
  name: string;
  url: string;
  price: number;
}

export const drinksArray: IDrink[] = [
  {
    name: 'cola',
    url: '../../../..//assets/drinks/cola.png',
    price: 1.6,
  },
  {
    name: 'fanta',
    url: '../../../assets/drinks/fanta.png',
    price: 1.6,
  },
  {
    name: 'sprite',
    url: '../../../assets/drinks/sprite.png',
    price: 1.6,
  },
  {
    name: 'pepsi',
    url: '../../../assets/drinks/pepsi.png',
    price: 1.6,
  },
  {
    name: 'bonaqua',
    url: '../../../assets/drinks/bonaqua.png',
    price: 0.9,
  },
  {
    name: 'juicery',
    url: '../../../assets/drinks/juicery',
    price: 3.5,
  },
];
