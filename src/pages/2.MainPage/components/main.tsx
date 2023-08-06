// import React from 'react';
import pepperoniUrl from '../../../assets/pizzas/pepperoni.png';
import rusticUrl from '../../../assets/pizzas/rustic.png';
import salamiUrl from '../../../assets/pizzas/salami.png';
import cartUrl from '../../../assets/png/cart.png';
import barbecueUrl from '../../../assets/sauces/barbecue.png';
import carryUrl from '../../../assets/sauces/carry.png';
import garlicUrl from '../../../assets/sauces/garlic.png';
import ketchupUrl from '../../../assets/sauces/ketchup.png';
import onionUrl from '../../../assets/sauces/onion.png';
import sourcreamUrl from '../../../assets/sauces/sourcream.png';
import sweetUrl from '../../../assets/sauces/sweet.png';
import tomatoUrl from '../../../assets/sauces/tomato.png';

// export function SectionWelcome() {
//   return (
//     <section className='section section-welcome'>
//       <h2 className='title-welcome title-left'>Welcome to the Italian pizzeria!</h2>
//       <p className='welcome-contemt'>
//         We have been preparing the best pizza for you for many years. Our chefs use the finest
//         ingredients and the freshest vegetables for cooking. But the most important ingredient is
//         that we make pizza with love!
//       </p>
//     </section>
//   );
// }

export function SectionOffer() {
  return (
    <>
      <section className='section section-welcome'>
        <h2 className='title-welcome title-left'>Welcome to the Italian pizzeria!</h2>
        <p className='welcome-contemt'>
          We have been preparing the best pizza for you for many years. Our chefs use the finest
          ingredients and the freshest vegetables for cooking. But the most important ingredient is
          that we make pizza with love!
        </p>
      </section>
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
}

export function TakeSauce() {
  return (
    <div className='container'>
      <section className='section section-souce'>
        <h2 className='title-section title-left'>
          Take the sauce to feel all the splendor of taste
        </h2>
        <div className='select-souce'>
          <div className='item-souce'>
            <img src={carryUrl} className='souce-img souce-carry' alt='souce-carry' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Carry</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={ketchupUrl} className='souce-img souce-ketchup' alt='souce-ketchup' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Ketchup</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={sweetUrl} className='souce-img souce-sweet' alt='souce-sweet' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Sweet</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={garlicUrl} className='souce-img souce-sweet' alt='souce-garlic' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Garlic</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={tomatoUrl} className='souce-img souce-tomato' alt='souce-tomato' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Tomato</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={onionUrl} className='souce-img souce-onion' alt='souce-onion' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Onion</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={sourcreamUrl} className='souce-img souce-sourcream' alt='souce-sourcream' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Sour cream</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
          <div className='item-souce'>
            <img src={barbecueUrl} className='souce-img souce-barbecue' alt='souce-barbecue' />
            <div className='sauce-info'>
              <h4 className='sauce-title'>Barbecue</h4>
              <div className='sauce-price'>0,60$</div>
              <button className='btn-addsauce'>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Main() {
  return (
    <main>
      {/* <div className='container'> */}
      <SectionOffer />
      <TakeSauce />
      {/* </div> */}
    </main>
  );
}
