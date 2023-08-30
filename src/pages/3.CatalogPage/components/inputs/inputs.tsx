import React, { useState, ChangeEvent, useRef } from 'react';

import s from './inputs.module.scss';

import {
  sortByAlphabetAZ,
  sortByAlphabetZA,
  sortByLowerPrice,
  sortByHigherPrice,
  search,
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
  const [findBy, setFindBy] = useState('');

  const sortChange = (ref: React.RefObject<HTMLParagraphElement>) => {
    hightPrice.current!.classList.remove(s.selected);
    lowPrice.current!.classList.remove(s.selected);
    z_a.current!.classList.remove(s.selected);
    a_z.current!.classList.remove(s.selected);
    ref.current!.classList.toggle(s.selected);
  };

  const findChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFindBy(event.target.value);
    search(event.target.value);
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

  const changeChouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLParagraphElement;
    target.classList.toggle(s.selected);
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
              const data = (await sortByLowerPrice()) as unknown as ProductsType;
              const catalogState = data as ProductsType;
              props.setProducts(catalogState);
              sortChange(lowPrice);
            }}
            ref={lowPrice}
          >
            From low to high average price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const data = (await sortByHigherPrice()) as unknown as ProductsType;
              const catalogState = data as ProductsType;
              props.setProducts(catalogState);
              sortChange(hightPrice);
            }}
            ref={hightPrice}
          >
            From high to low average price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const data = (await sortByAlphabetAZ()) as unknown as ProductsType;
              const catalogState = data as ProductsType;
              props.setProducts(catalogState);
              sortChange(a_z);
            }}
            ref={a_z}
          >
            Alphabetically (A-Z)
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              const data = (await sortByAlphabetZA()) as unknown as ProductsType;
              const catalogState = data as ProductsType;
              props.setProducts(catalogState);
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
        <div
          className={s.filter_menu_choise + ' ' + s.hidden}
          ref={filterMenuRef}
          onClick={(e) => changeChouse(e)}
        >
          <p className={s.sort_item}>Vegetarian food</p>
          <p className={s.sort_item}>Not spicy food</p>
          <p className={s.sort_item}>Low calorie food</p>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
