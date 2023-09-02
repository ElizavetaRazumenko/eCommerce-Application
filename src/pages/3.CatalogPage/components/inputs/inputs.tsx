import React, { useState, ChangeEvent, useRef } from 'react';

import s from './inputs.module.scss';

import { search, requestToCommerce } from '../../../../shared/index';
import requestsCatalogParams from '../../../../state/requestObj';
import { CatalogInputsPropsType } from '../../../../types/types';

const Inputs = (props: CatalogInputsPropsType) => {
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
  const [sortBy, setSortBy] = useState('Sort by');
  const [findBy, setFindBy] = useState('');

  const sortChange = (ref: React.RefObject<HTMLParagraphElement>) => {
    hightPrice.current!.classList.remove(s.selected);
    lowPrice.current!.classList.remove(s.selected);
    z_a.current!.classList.remove(s.selected);
    a_z.current!.classList.remove(s.selected);
    ref.current!.classList.toggle(s.selected);
    setSortBy(ref.current!.textContent || '');
    openMenuSort(sortRef, 'sort');
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

  const sentRequetsSort = async (condition: string) => {
    requestsCatalogParams.sort! = [condition];
    const catalogState = await requestToCommerce(requestsCatalogParams);
    if (catalogState) props.setProducts(catalogState);
  };
  const sentRequetsFilter = async (id: string) => {
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter!.push(`variants.attributes.${id}:"yes"`);
      const catalogState = await requestToCommerce(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
    }
  };

  const findChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setFindBy(event.target.value);
    if (event.target.value === '') {
      delete requestsCatalogParams['text.en-US'];
      delete requestsCatalogParams.fuzzy;
    } else {
      requestsCatalogParams['text.en-US'] = event.target.value;
      requestsCatalogParams.fuzzy = true;
    }
    const catalogState = await requestToCommerce(requestsCatalogParams);
    if (catalogState) props.setProducts(catalogState);
  };

  const removeFromRequetsFilter = async () => {
    const info = localStorage.getItem('filter_params');
    requestsCatalogParams.filter = info ? JSON.parse(info) : [];
    const catalogState = await requestToCommerce(requestsCatalogParams);
    if (catalogState) props.setProducts(catalogState);
  };

  return (
    <div className={s.inputs_wrapper}>
      <div className={s.sort_menu}>
        <div className={s.div_sort} onClick={() => openMenuSort(sortRef, 'sort')} ref={sortRef}>
          <span>{sortBy}</span>
          <div className={s.sort_arrow}></div>
        </div>
        <div className={s.sort_menu_choise + ' ' + s.hidden} ref={sortMenuRef}>
          <p
            className={s.sort_item}
            onClick={async () => {
              await sentRequetsSort('price asc');
              sortChange(lowPrice);
            }}
            ref={lowPrice}
          >
            From low to high price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              await sentRequetsSort('price desc');
              sortChange(hightPrice);
            }}
            ref={hightPrice}
          >
            From high to low price
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              await sentRequetsSort('name.en-US asc');
              sortChange(a_z);
            }}
            ref={a_z}
          >
            Alphabetically (A-Z)
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              await sentRequetsSort('name.en-US desc');
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
                await sentRequetsFilter('lf');
              }
              changeChouse(vegetarian);
            }}
            ref={vegetarian}
          >
            Lactose Free Ingredients
          </p>
          <p
            className={s.sort_item}
            ref={children}
            onClick={async () => {
              if (!children.current!.classList.contains(s.selected)) {
                await sentRequetsFilter('nt');
              }
              changeChouse(children);
            }}
          >
            No tomatoes
          </p>
          <p
            className={s.sort_item}
            ref={lowCalorie}
            onClick={async () => {
              if (!lowCalorie.current!.classList.contains(s.selected)) {
                await sentRequetsFilter('no');
              }
              changeChouse(lowCalorie);
            }}
          >
            No onion
          </p>
          <p
            className={s.sort_item}
            onClick={async () => {
              await removeFromRequetsFilter();
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
