import React from "react";
import { Link } from "react-router-dom";

const SinglePageHeader = () => {
  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <Link to="/market">Market Place</Link>
          </li>
          <li className="breadcrumb-item active text-white">
            <Link to="/market/view">View Cart</Link>
          </li>
          <li className="breadcrumb-item active text-white">
            <Link to="/market/bill">Checkout</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SinglePageHeader;
