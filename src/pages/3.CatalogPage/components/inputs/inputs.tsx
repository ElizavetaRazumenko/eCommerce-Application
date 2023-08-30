import React, { useState, ChangeEvent, useRef } from 'react';

import s from './inputs.module.scss';

import {
  sortByAlphabetAZ,
  sortByAlphabetZA,
  sortByLowerPrice,
  sortByHigherPrice,
  search,
  filter,
  getProducts,
} from '../../../../shared/index';
import { ProductsType } from '../../../../types/types';

const Inputs = (props: { setProducts: React.Dispatch<React.SetStateAction<ProductsType>> }) => {
  const sortRef = useRef<HTMLDivElement>(null);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const lowPrice = useRef<HTMLParagraphElement>(null);
  const hightPrice = useRef<HTMLParagraphElement>(null);
  const a_z = useRef<HTMLParagraphElement>(null);
  const z_a = useRef<HTMLParagraphElement>(null);
  const vegetarian = useRef<HTMLParagraphElement>(null);
  const children = useRef<HTMLParagraphElement>(null);
  const lowCalorie = useRef<HTMLParagraphElement>(null);
  const resetFilter = useRef<HTMLParagraphElement>(null);
  const [findBy, setFindBy] = useState('');

  const sortChange = (ref: React.RefObject<HTMLParagraphElement>) => {
    hightPrice.current!.classList.remove(s.selected);
    lowPrice.current!.classList.remove(s.selected);
    z_a.current!.classList.remove(s.selected);
    a_z.current!.classList.remove(s.selected);
    ref.current!.classList.toggle(s.selected);
    openMenuSort(sortRef, 'sort');
  };

  const findChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setFindBy(event.target.value);
    const value = await search(event.target.value);
    console.log(value);
  };

  const openMenuSort = (ref: React.RefObject<HTMLDivElement>, type: string) => {
    ref.current!.classList.toggle(s.open);
    if (type === 'sort') {
      ref.current!.classList.contains(s.open)
        ? sortMenuRef.current!.classList.remove(s.hidden)
        : sortMenuRef.current!.classList.add(s.hidden);
    } else {
      ref.current!.classList.contains(s.open)
        ? filterMenuRef.current!.classList.remove(s.hidden)
        : filterMenuRef.current!.classList.add(s.hidden);
    }
  };

  const changeChouse = (ref: React.RefObject<HTMLParagraphElement>) => {
    ref.current!.classList.add(s.selected);
  };

  const resetFilters = () => {
    vegetarian.current!.classList.remove(s.selected);
    children.current!.classList.remove(s.selected);
    lowCalorie.current!.classList.remove(s.selected);
    openMenuSort(filterRef, 'filter');
  };

  return (
    <div className={s.inputs_wrapper}>
      <div className={s.sort_menu}>
        <div className={s.div_sort} onClick={() => openMenuSort(sortRef, 'sort')} ref={sortRef}>
          <span>Sort by</span>
          <div className={s.sort_arrow}></div>
        </div>
        <div className={s.sort_menu_choise + ' ' + s.hidden} ref={sortMenuRef}>
          <p
            className={s.sort_item}
            onClick={async () => {
              const catalogState = await sortByLowerPrice();
              if (catalogState) props.setProducts(catalogState);
              sortChange(lowPrice);
            }}
            ref={lowPrice}
          >
            From low to high average price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const catalogState = await sortByHigherPrice();
              if (catalogState) props.setProducts(catalogState);
              sortChange(hightPrice);
            }}
            ref={hightPrice}
          >
            From high to low average price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const catalogState = await sortByAlphabetAZ();
              if (catalogState) props.setProducts(catalogState);
              sortChange(a_z);
            }}
            ref={a_z}
          >
            Alphabetically (A-Z)
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const catalogState = await sortByAlphabetZA();
              if (catalogState) props.setProducts(catalogState);
              sortChange(z_a);
            }}
            ref={z_a}
          >
            Alphabetically (Z-A)
          </p>
        </div>
      </div>
      <div className={s.input_wrapper}>
        <input
          type='text'
          placeholder='Find'
          value={findBy}
          onChange={findChange}
          className={s.input_find}
        />
      </div>
      <div className={s.filter_menu}>
        <div
          className={s.div_filter}
          ref={filterRef}
          onClick={() => openMenuSort(filterRef, 'filter')}
        >
          <span>Filter by</span>
          <div className={s.sort_arrow}></div>
        </div>
        <div className={s.filter_menu_choise + ' ' + s.hidden} ref={filterMenuRef}>
          <p
            className={s.sort_item}
            onClick={async () => {
              if (!vegetarian.current!.classList.contains(s.selected)) {
                const filteredItems = await filter('vf');
                if (filteredItems) props.setProducts(filteredItems);
              }
              changeChouse(vegetarian);
            }}
            ref={vegetarian}
          >
            Vegetarian food
          </p>
          <p
            className={s.sort_item}
            ref={children}
            onClick={async () => {
              if (!children.current!.classList.contains(s.selected)) {
                const filteredItems = await filter('fc');
                if (filteredItems) props.setProducts(filteredItems);
              }
              changeChouse(children);
            }}
          >
            Food for children
          </p>
          <p
            className={s.sort_item}
            ref={lowCalorie}
            onClick={async () => {
              if (!lowCalorie.current!.classList.contains(s.selected)) {
                const filteredItems = await filter('lc');
                if (filteredItems) props.setProducts(filteredItems);
              }
              changeChouse(lowCalorie);
            }}
          >
            Low calorie food
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const catalogState = await getProducts();
              if (catalogState) props.setProducts(catalogState);
              resetFilters();
            }}
            ref={resetFilter}
          >
            Reset
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
