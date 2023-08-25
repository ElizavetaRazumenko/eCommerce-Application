import React, { useState, ChangeEvent } from 'react';

import s from './inputs.module.scss';

const Inputs = () => {
  const [sortBy, setSortBy] = useState('');
  const [findBy, setFindBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const sortChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value);
  };

  const findChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFindBy(event.target.value);
  };

  const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className={s.inputs_wrapper}>
      <div className={s.inputs}>
        <div className={s.input_wrapper}>
          <input
            type='text'
            placeholder='Sort by'
            value={sortBy}
            onChange={sortChange}
            className={s.input + ' ' + s.input_sort}
          />
          <div className={s.input_sort_after}></div>
        </div>
        <div className={s.input_wrapper}>
          <input
            type='text'
            placeholder='Find'
            value={findBy}
            onChange={findChange}
            className={s.input + ' ' + s.input_find}
          />
          <div className={s.input_find_after}></div>
        </div>
        <div className={s.input_wrapper}>
          <input
            type='text'
            placeholder='Filter by'
            value={filterBy}
            onChange={filterChange}
            className={s.input + ' ' + s.input_filter}
          />
          <div className={s.input_filter_after}></div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
