import React, { useState, useRef } from 'react';

import s from './inputs.module.scss';

const Inputs = () => {
  const [sortBy, setSortBy] = useState('');
  const [findBy, setFindBy] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // const sortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortBy(event.target.value);
  // };
  // const findChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFindBy(event.target.value);
  // };
  // const filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterBy(event.target.value);
  // };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortClick = (value: string) => {
    setSortBy(value);
    setIsSortOpen(false);
  };

  return (
    <div className={s.inputs_wrapper}>
      <div
        onClick={toggleSort}
        className={`${s.input} ${s.input_sort} ${isSortOpen ? s.open_sort_select : ''}`}
      >
        <div className={s.sort_title}> {sortBy ? sortBy : 'Sort by'}</div>
        {isSortOpen && (
          <ul className={s.sort_list}>
            <li
              className={`${s.sort_line} ${s.sort_line_up}`}
              onClick={() => handleSortClick('Low to High')}
            >
              price (Low to High)
            </li>
            <li
              className={`${s.sort_line} ${s.sort_line_down}`}
              onClick={() => handleSortClick('High to Low')}
            >
              price (High to Low)
            </li>
            <li className={`${s.sort_line} ${s.sort_az}`} onClick={() => handleSortClick('A to Z')}>
              alphabet (A to Z)
            </li>
            <li className={`${s.sort_line} ${s.sort_za}`} onClick={() => handleSortClick('Z to A')}>
              alphabet (Z to A)
            </li>
          </ul>
        )}
      </div>

      {/* <div className={s.input_wrapper}> */}
      {/* <div className={`${s.input} ${s.input_find}`}> */}
      <input
        type='text'
        placeholder='Find'
        value={findBy}
        onChange={findChange}
        className={`${s.input} ${s.input_find}`}
      />
      <input
        type='text'
        placeholder='Filter by'
        value={filterBy}
        onChange={filterChange}
        className={`${s.input} ${s.input_filter}`}
      />
    </div>
  );
};

export default Inputs;

// import React, { useState, ChangeEvent } from 'react';

// import s from './inputs.module.scss';

// const Inputs = () => {
//   const [sortBy, setSortBy] = useState('');
//   const [findBy, setFindBy] = useState('');
//   const [filterBy, setFilterBy] = useState('');

//   const sortChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSortBy(event.target.value);
//   };

//   const findChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setFindBy(event.target.value);
//   };

//   const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setFilterBy(event.target.value);
//   };

//   return (
//     <div className={s.inputs_wrapper}>
//       <div className={s.inputs}>
//         <select value={sortBy} onChange={sortChange} className={s.input + ' ' + s.input_sort}>
//           <option value=''>Sort by</option>
//           <option value='price-asc'> &#x25B2; Price (Low to High)</option>
//           <option value='price-desc'>
//             <img src={require('../../../../assets/png/sort-arrow.png')} alt='Down Arrow' />
//             Price (High to Low)
//           </option>
//         </select>

//         <div className={s.input_wrapper}>
//           <input
//             type='text'
//             placeholder='Find'
//             value={findBy}
//             onChange={findChange}
//             className={s.input + ' ' + s.input_find}
//           />
//         </div>
//         {/* <div className={s.input_find_after}></div> */}

//         <div className={s.input_wrapper}>
//           <input
//             type='text'
//             placeholder='Filter by'
//             value={filterBy}
//             onChange={filterChange}
//             className={s.input + ' ' + s.input_filter}
//           />
//           <div className={s.input_filter_after}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inputs;
