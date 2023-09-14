/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import PopUp from './components/popUp/popUp';
import Slider from './components/slider/slider';
import s from './detailedPage.module.scss';

import infoProducts, {
  keysProduct,
  keysPizza,
  keysSauces,
  keysDrinks,
  productIdOnCart,
  productOnCart,
} from '../../entities/product';
import { getProduct } from '../../shared';
import { addPizzaToCart, addProductsToCart, removeProductOnCart } from '../../shared/cartSession';
import { KeyObject, ProductDetailsType, ProductItemType, ProductType } from '../../types/types';

const DetailedPage = () => {
  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('0.00$');
  const [productDiscountPrice, setProductDiscountPrice] = useState<string>('0.00$');
  const [productImg, setProductImg] = useState<string[]>(['']);
  const [productWeigth, setProductWeigth] = useState<string>('');
  const [productPFCK, setProductPFCK] = useState<number[]>([0, 0, 0, 0]);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const { key, size } = useParams();
  const navigate = useNavigate();

  const getSKU = (key: string) => {
    if (keysPizza.includes(key)) {
      return `${key}-${size!.toUpperCase()}`;
    } else {
      return key + '-';
    }
  };

  const keySKU = getSKU(key!.toUpperCase());
  const [onCart, setOnCart] = useState(productOnCart[keySKU as KeyObject]);
  const [waiting, setWaiting] = useState('hidden');
  const [buttonMessage, setButtonMessage] = useState(onCart ? 'Remove' : 'Add to cart');

  const toCart = async () => {
    if (!onCart) {
      setWaiting('waiting');
      setButtonMessage('');
      if (!keysPizza.includes(key!.toUpperCase())) {
        await addProductsToCart(key!.toUpperCase());
      } else {
        await addPizzaToCart(key!.toUpperCase(), size!);
      }
      setWaiting('none');
      setButtonMessage('Remove');
      setOnCart(true);
    } else {
      setWaiting('waiting');
      setButtonMessage('');
      setOnCart(false);
      await removeProductOnCart(productIdOnCart[keySKU as KeyObject]);
      setButtonMessage('Add to cart');
      setWaiting('none');
    }
  };

  const setPriceAndWeigth = (price: number, weigth: string) => {
    const priceSet = (price / 100).toFixed(2) + '$';
    setProductPrice(priceSet);
    setProductWeigth(weigth);
  };
  const setDataIfDiscount = (price: number) => {
    setProductDiscountPrice((price / 100).toFixed(2) + '$');
    setIsDiscounted(true);
  };

  const createMainsize = (responce: ProductType, type: 'pizzas' | 'drinks' | 'sauces') => {
    setProductName(responce.name['en-US']);
    setProductDescription(responce.description['en-US']);
    const price = responce.masterVariant.prices[0].value.centAmount;
    responce.masterVariant.prices[0].discounted
      ? setDataIfDiscount(responce.masterVariant.prices[0].discounted.value.centAmount)
      : setIsDiscounted(false);
    const images = responce.masterVariant.images.map((el) => el.url);
    const weigth = type === 'pizzas' ? '945gr' : type === 'drinks' ? '950gr' : '40gr';
    setPriceAndWeigth(price, weigth);
    setProductImg(images);
    const productItem = infoProducts[type].find(
      (el) => el.name === responce.name['en-US'],
    ) as ProductItemType;
    setProductPFCK(productItem.PFCK);
  };

  const createVariantSize = (size: string, responce: ProductType) => {
    setProductName(responce.name['en-US']);
    setProductDescription(responce.description['en-US']);
    const index = size === 'm' ? 0 : 1;
    const price = responce.variants[index].prices[0].value.centAmount;
    responce.variants[index].prices[0].discounted
      ? setDataIfDiscount(responce.variants[index].prices[0].discounted!.value.centAmount)
      : setIsDiscounted(false);
    if (price) size === 'm' ? setPriceAndWeigth(price, '632gr') : setPriceAndWeigth(price, '210gr');
    const images = responce.variants[index].images.map((el) => el.url);
    setProductImg(images);
    const productItem = infoProducts['pizzas'].find(
      (el) => el.name === responce.name['en-US'],
    ) as ProductItemType;
    setProductPFCK(productItem.PFCK);
  };
  const getProductInfo = async () => {
    const currentProduct = keysProduct.find((el) => el.toLowerCase() === key);
    if (!currentProduct || (keysPizza.includes(key!.toUpperCase()) && !size)) {
      navigate('/error');
    } else {
      const responseProductInfo = (await getProduct(key!.toUpperCase())) as ProductType;
      if (size) {
        size === 'l'
          ? createMainsize(responseProductInfo, 'pizzas')
          : size === 'm'
          ? createVariantSize('m', responseProductInfo)
          : createVariantSize('s', responseProductInfo);
      }
      if (keysSauces.includes(key!.toUpperCase())) {
        createMainsize(responseProductInfo, 'sauces');
      }
      if (keysDrinks.includes(key!.toUpperCase())) {
        createMainsize(responseProductInfo, 'drinks');
      }
    }
  };
  useEffect(() => {
    getProductInfo();
  }, []);
  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
  return (
    <div className={s.page_wrapper}>
      <NavLink to='/catalog' className={s.nav_link} onClick={() => setIsOpenPopUp(false)}>
        <div className={s.button_back}>
          <div className={s.arrow_back}></div>
          <span>Back to the catalog</span>
        </div>
      </NavLink>
      <div className={s.details_wrapper}>
        <PopUp
          isOpenPopUp={isOpenPopUp}
          setProductImg={setProductImg}
          setIsOpenPopUp={setIsOpenPopUp}
          imgURL={productImg}
        />
        <Slider
          imagesURL={productImg}
          setProductImg={setProductImg}
          setIsOpenPopUp={setIsOpenPopUp}
        />
        <div className={s.description_wrapper}>
          <p className={s.name}>{productName}</p>
          <p className={s.description}>
            {productDescription.slice(
              0,
              productDescription.indexOf('Main ingredients') === -1
                ? productDescription.length
                : productDescription.indexOf('Main ingredients'),
            )}
          </p>
          <p className={s.description}>
            {productDescription.indexOf('Main ingredients') === -1
              ? ''
              : productDescription.slice(productDescription.indexOf('Main ingredients'))}
          </p>
          <div className='s.pfc'>
            <p className={s.info_string}>{`Proteins: ${productPFCK[0]}gr`}</p>
            <p className={s.info_string}>{`Fats: ${productPFCK[1]}gr`}</p>
            <p className={s.info_string}>{`Carbohydrates: ${productPFCK[2]}gr`}</p>
          </div>
          <div className={s.call_weight}>
            <p className={s.info_string}>{`Calories per 100 gr: ${productPFCK[3]}`}</p>
            <p className={s.info_string}>{`Weight: ${productWeigth}`}</p>
          </div>
          <div className={s.prices_wrapper}>
            <p className={isDiscounted ? s.price + ' ' + s.price_on_sale : s.price}>
              {productPrice}
            </p>
            <p className={isDiscounted ? s.price + ' ' + s.price_sale : s.hidden}>
              {productDiscountPrice}
            </p>
          </div>
          <div className={s.button} onClick={toCart}>
            <span>{buttonMessage}</span>
            <div className={s[waiting]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
