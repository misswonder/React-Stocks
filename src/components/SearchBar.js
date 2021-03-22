import React from 'react';

const SearchBar = ({ sort, toggleAlphabeticalSort, togglePriceSort, setType }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sort === 'abc'} onChange={toggleAlphabeticalSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sort === 'price'} onChange={togglePriceSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
