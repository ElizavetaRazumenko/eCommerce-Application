import React, { useState, ChangeEvent } from 'react';

import s from './inputs.module.scss';

// import CatalogPizzas from './components/catalog-pizzas/pizzas';

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
        <input
          type='text'
          placeholder='Sort by'
          value={sortBy}
          onChange={sortChange}
          className={s.input}
        />
        <input
          type='text'
          placeholder='Find'
          value={findBy}
          onChange={findChange}
          className={s.input}
        />
        <input
          type='text'
          placeholder='Filter by'
          value={filterBy}
          onChange={filterChange}
          className={s.input}
        />
      </div>
      {/* <CatalogPizzas sortBy={sortBy} findBy={findBy} filterBy={filterBy} /> */}
    </div>
  );
};

export default Inputs;
