import React, { useState, ChangeEvent, useRef } from 'react';

import s from './inputs.module.scss';

const Inputs = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const [sortBy, setSortBy] = useState('Sort by');
  const [findBy, setFindBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const sortChange = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const target = event.target as HTMLParagraphElement;
    setSortBy(target.textContent!);
    sortMenuRef.current!.classList.add(s.hidden);
    sortRef.current!.classList.remove(s.open);
  };

  const findChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFindBy(event.target.value);
  };

  const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterBy(event.target.value);
  };

  const openMenu = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current!.classList.toggle(s.open);
    ref.current!.classList.contains(s.open)
      ? sortMenuRef.current!.classList.remove(s.hidden)
      : sortMenuRef.current!.classList.add(s.hidden);
  };

  return (
    <div className={s.inputs_wrapper}>
      <div className={s.sort_menu}>
        <div className={s.div_sort} onClick={() => openMenu(sortRef)} ref={sortRef}>
          <span>{sortBy}</span>
          <div className={s.sort_arrow}></div>
        </div>
        <div className={s.sort_menu_choise + ' ' + s.hidden} ref={sortMenuRef}>
          <p className={s.sort_item} onClick={(e) => sortChange(e)}>
            From low to high price
          </p>
          <p className={s.sort_item} onClick={(e) => sortChange(e)}>
            From high to low price
          </p>
          <p className={s.sort_item} onClick={(e) => sortChange(e)}>
            Alphabetically (A-Z)
          </p>
          <p className={s.sort_item} onClick={(e) => sortChange(e)}>
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
      <div className={s.div_filter} ref={filterRef} onClick={() => openMenu(filterRef)}>
        <span>Filter by</span>
        <div className={s.sort_arrow}></div>
      </div>
    </div>
  );
};

export default Inputs;
