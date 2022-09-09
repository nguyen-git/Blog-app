import React from 'react';
import "./search.scss";

const Search = ({value, handleSearchKey, clearSearch, formSubmit}) => {
  return (
    <div className="search">
        <form action="" onSubmit={formSubmit}>
            <input type="text" onChange={handleSearchKey} value={value} placeholder="search key..." />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Search</button>
        </form>
    </div>
  )
}

export default Search