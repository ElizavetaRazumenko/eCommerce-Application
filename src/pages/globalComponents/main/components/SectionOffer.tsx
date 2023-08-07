import pepperoniUrl from '../../../../assets/pizzas/pepperoni.png';
import rusticUrl from '../../../../assets/pizzas/rustic.png';
import salamiUrl from '../../../../assets/pizzas/salami.png';
import cartUrl from '../../../../assets/png/cart.png';

const SectionOffer = () => {
  return (
    <>
      <section className='section section-offer'>
        <h3 className='title-section title-center'>We offer a collection of our best pizzas</h3>
        <div className='pizza-collection'>
          <div className='pizza-item'>
            <img src={pepperoniUrl} className='pizza-img img-peperoni' alt='pizza' />
            <h3 className='item-title'>Pepperoni</h3>
            <div className='select-wrapper'>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>L</span>
                  <span className='span-size size-l'>45cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>32.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>

              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>M</span>
                  <span className='span-size size-l'>30cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>25.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>S</span>
                  <span className='span-size size-l'>25cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>18.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
            </div>
          </div>
          <div className='pizza-item'>
            <img src={salamiUrl} className='pizza-img img-salami' alt='pizza' />
            <h3 className='item-title'>Salami</h3>
            <div className='select-wrapper'>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>L</span>
                  <span className='span-size size-l'>45cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>25.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>

              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>M</span>
                  <span className='span-size size-l'>30cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>20.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>S</span>
                  <span className='span-size size-l'>25cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>15.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
            </div>
          </div>
          <div className='pizza-item'>
            <img src={rusticUrl} className='pizza-img img-rustic' alt='pizza' />
            <h3 className='item-title'>Rustic</h3>
            <div className='select-wrapper'>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>L</span>
                  <span className='span-size size-l'>45cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>20.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>

              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>M</span>
                  <span className='span-size size-l'>30cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>15.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
              <div className='item-line line-l'>
                <div className='size-wrapper'>
                  <span className='span-line span-l'>S</span>
                  <span className='span-size size-l'>25cm</span>
                </div>
                <div className='price-wrapper'>
                  <span className='span-price price-l'>10.00 $</span>
                  <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='arrows'>
          <div className='arrow-left'></div>
          <div className='arrow-right'></div>
        </div>
        <button className='btn-seeall'>See all</button>
      </section>
    </>
  );
};

export default SectionOffer;
