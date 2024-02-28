import React from "react";

const SearchBar = () => {
  return (
    <div className="input-group w-100 mx-auto d-flex">
      <input
        type="search"
        className="form-control p-3"
        placeholder="Search products here.."
        aria-describedby="search-icon-1"
      />
      <span id="search-icon-1" className="input-group-text p-3">
        <i className="fa fa-search" />
      </span>
    </div>
  );
};

export default SearchBar;
