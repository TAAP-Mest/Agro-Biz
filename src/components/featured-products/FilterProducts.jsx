import React from "react";

const FilterProducts = () => {
  return (
    <div className="col-lg-8 text-end">
      <ul className="nav nav-pills d-inline-flex text-center mb-5">
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2 bg-light rounded-pill active"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            {" "}
            <span className="text-dark" style={{ width: 130 }}>
              {" "}
              All Products
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2 bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#tab-2"
          >
            {" "}
            <span className="text-dark" style={{ width: 130 }}>
              {" "}
              Seeds
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2 bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#tab-3"
          >
            {" "}
            <span className="text-dark" style={{ width: 130 }}>
              {" "}
              Fruits
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2 bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#tab-4"
          >
            {" "}
            <span className="text-dark" style={{ width: 130 }}>
              {" "}
              Vegetables
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2 bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#tab-5"
          >
            {" "}
            <span className="text-dark" style={{ width: 130 }}>
              Insecticides
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FilterProducts;
