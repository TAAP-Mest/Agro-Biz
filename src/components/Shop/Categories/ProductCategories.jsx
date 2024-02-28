import React from "react";

const ProductCategories = () => {
  return (
    <div className="col-lg-12">
      <div className="mb-3">
        <h4>Categories</h4>
        <ul className="list-unstyled fruite-categorie">
          <li>
            <div className="d-flex justify-content-between fruite-name">
              <a href="#">
                <i className="fas fa-apple-alt me-2" />
                Seeds
              </a>
              <span>(3)</span>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between fruite-name">
              <a href="#">
                <i className="fas fa-apple-alt me-2" />
                Fruits
              </a>
              <span>(5)</span>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between fruite-name">
              <a href="#">
                <i className="fas fa-apple-alt me-2" />
                Vegetables
              </a>
              <span>(2)</span>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between fruite-name">
              <a href="#">
                <i className="fas fa-apple-alt me-2" />
                Insecticdes
              </a>
              <span>(8)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;
