import barbecueUrl from '../../../../assets/sauces/barbecue.png';
import carryUrl from '../../../../assets/sauces/carry.png';
import garlicUrl from '../../../../assets/sauces/garlic.png';
import ketchupUrl from '../../../../assets/sauces/ketchup.png';
import onionUrl from '../../../../assets/sauces/onion.png';
import sourcreamUrl from '../../../../assets/sauces/sourcream.png';
import sweetUrl from '../../../../assets/sauces/sweet.png';
import tomatoUrl from '../../../../assets/sauces/tomato.png';

const TakeSauce = () => {
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
};

export default TakeSauce;
