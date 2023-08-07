interface IDrink {
  name: string;
  url: string;
  price: number;
}

export const drinksArray: IDrink[] = [
  {
    name: 'cola',
    url: '../../../../../assets/drinks/cola.png',
    price: 1.6,
  },
  {
    name: 'fanta',
    url: '../../../../../assets/drinks/fanta.png',
    price: 1.6,
  },
  {
    name: 'sprite',
    url: '../../../../../assets/drinks/sprite.png',
    price: 1.6,
  },
  {
    name: 'pepsi',
    url: '../../../../../assets/drinks/pepsi.png',
    price: 1.6,
  },
  {
    name: 'bonaqua',
    url: '../../../../../assets/drinks/bonaqua.png',
    price: 0.9,
  },
  {
    name: 'juicery',
    url: '../../../../../assets/drinks/juicery',
    price: 3.5,
  },
];

const Drinks = () => {
  return (
    <div className='container'>
      <section className='section section-drinks'>
        <h2 className='title-section title-right'>Don't forget to choose some drinks</h2>
        {/* <div className='drinks-container'>
          <div className='item-drink'>
            <img
              src='../../../../../assets/drinks/fanta.png'
              className='drink-img drink'
              alt='drink'
            />
            <button className='btn-adddrink'>Add to cart</button>
            <div className='drink-price'>{drinksArray[0].price} </div>
          </div>
        </div> */}

        {/* !!! НЕ понимаю почему не отобрадается написток, ссылка вроде как верная */}
        <div className='drinks-container'>
          {drinksArray.map((drink) => (
            <div className='item-drink'>
              <div key={drink.url}>
                <img src={drink.url} className='drink-img drink' alt='drink' />
                <button className='btn-adddrink'>Add to cart</button>
                <div className='drink-price'>{drink.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className='btn-catalog'>To catalog</button>
      </section>
    </div>
  );
};

export default Drinks;
