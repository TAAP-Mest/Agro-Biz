import styles from "../InputSearchBar/SearchBar.module.css";
import React, { useState } from "react";
import ProductCards from "../Catalogue/ProductCards";
import productsData from "../../../dataBase/products.json";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="input-group w-100 mx-auto d-flex">
      <TextField
        id="outlined-basic"
        label="Search products here.."
        variant="outlined"
        type="search"
        className={styles.searchField}
        // placeholder="Search products here.."
        aria-describedby="search-icon-1"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <span id="search-icon-1" className="input-group-text p-3">
        <i className="fa fa-search" />
      </span>
      {/* Optionally, display filtered products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

// const SearchBar = () => {
// store items
// const [searchData, setSearchData] = useState("");

// Filter Items -input
// const InputSearchChange = (event) => {
//   setSearchData(event.target.value);
// };
// const filteredItems = productsData.filter((product) =>
//   product.name.indexOf(searchData !== -1)
// );

// function filterData(product, selected, fetchData) {
//   let filteredProduct = product;

//   if (fetchData) {
//     filteredProduct = filteredItems;
//   }
// }

//   return (
//     <div className="input-group w-100 mx-auto d-flex">
//       <input
//         type="search"
//         className="form-control p-3"
//         placeholder="Search products here.."
//         aria-describedby="search-icon-1"
//       />
//       <span id="search-icon-1" className="input-group-text p-3">
//         <i className="fa fa-search" />
//       </span>
//     </div>
//   );
// };

// export default SearchBar;
