import pepperoni from '../../../assets/pizzas/pepperoni.png';
import rustic from '../../../assets/pizzas/rustic.png';
import salami from '../../../assets/pizzas/salami.png';
import cart from '../../../assets/png/cart.png';
import barbecue from '../../../assets/sauces/barbecue.png';
import carry from '../../../assets/sauces/carry.png';
import garlic from '../../../assets/sauces/garlic.png';
import ketchup from '../../../assets/sauces/ketchup.png';
import onion from '../../../assets/sauces/onion.png';
import sourcream from '../../../assets/sauces/sourcream.png';
import sweet from '../../../assets/sauces/sweet.png';
import tomato from '../../../assets/sauces/tomato.png';

export function SectionWelcome() {
  return (
    <section className='section section-welcome'>
      <h2 className='title-welcome title-left'>Welcome to the Italian pizzeria!</h2>
      <p className='welcome-contemt'>
        We have been preparing the best pizza for you for many years. Our chefs use the finest
        ingredients and the freshest vegetables for cooking. But the most important ingredient is
        that we make pizza with love!
      </p>
    </section>
  );
}

export function SectionOffer() {
  return (
    <section className='section sectio-offer'>
      <h3 className='title-section title-center'>We offer a collection of our best pizzas</h3>
      <div className='pizza-collection'>
        <div className='pizza-item'>
          <img src={pepperoni} className='pizza-img img-peperoni' alt='pizza' />
          <h3 className='item-title'>Pepperoni</h3>
          <div className='select-wrapper'>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>L</span>
                <span className='span-size size-l'>45cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>32.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>

            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>M</span>
                <span className='span-size size-l'>30cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>25.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>S</span>
                <span className='span-size size-l'>25cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>18.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>
          </div>
        </div>
        <div className='pizza-item'>
          <img src={salami} className='pizza-img img-salami' alt='pizza' />
          <h3 className='item-title'>Salami</h3>
          <div className='select-wrapper'>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>L</span>
                <span className='span-size size-l'>45cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>25.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>

            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>M</span>
                <span className='span-size size-l'>30cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>20.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>S</span>
                <span className='span-size size-l'>25cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>15.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>
          </div>
        </div>
        <div className='pizza-item'>
          <img src={rustic} className='pizza-img img-rustic' alt='pizza' />
          <h3 className='item-title'>Rustic</h3>
          <div className='select-wrapper'>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>L</span>
                <span className='span-size size-l'>45cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>20.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>

            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>M</span>
                <span className='span-size size-l'>30cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>15.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
              </div>
            </div>
            <div className='item-line line-l'>
              <div className='size-wrapper'>
                <span className='span-line span-l'>S</span>
                <span className='span-size size-l'>25cm</span>
              </div>
              <div className='price-wrapper'>
                <span className='span-price price-l'>10.00 $</span>
                <img src={cart} className='shopping-cart' alt='shopping cart' />
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
  );
}

export function TakeSouce() {
  return (
    <section className='section section-souce'>
      <h2 className='title-section title-left'>Take the sauce to feel all the splendor of taste</h2>
      <div className='select-souce'>
        <div className='item-souce'>
          <img src={carry} className='souce-img souce-carry' alt='souce-carry' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Carry</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={ketchup} className='souce-img souce-ketchup' alt='souce-ketchup' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Ketchup</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={sweet} className='souce-img souce-sweet' alt='souce-sweet' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Sweet</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={garlic} className='souce-img souce-sweet' alt='souce-garlic' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Garlic</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={tomato} className='souce-img souce-tomato' alt='souce-tomato' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Tomato</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={onion} className='souce-img souce-onion' alt='souce-onion' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Onion</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={sourcream} className='souce-img souce-sourcream' alt='souce-sourcream' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Sour cream</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
        <div className='item-souce'>
          <img src={barbecue} className='souce-img souce-barbecue' alt='souce-barbecue' />
          <div className='sauce-info'>
            <h4 className='sauce-title'>Barbecue</h4>
            <div className='sauce-price'>0,60$</div>
            <button className='btn-addsauce'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Main() {
  return (
    <main>
      <div className='container'>
        <SectionWelcome />
        <SectionOffer />
        <TakeSouce />
        {/* <section className='section sectio-offer'>
          <h3 className='title-section title-center'>We offer a collection of our best pizzas</h3>
          <div className='pizza-collection'>
            <div className='pizza-item'>
              <img src={pepperoni} className='pizza-img img-peperono' alt='pizza' />
              <h3 className='item-title'>Pepperoni</h3>
              <div className='select-wrapper'>

                </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
