import React from "react";
import SearchBar from "./InputSearchBar/SearchBar";
import FilterProducts from "./Filter/FilterProducts";
import ProductCategories from "./Categories/ProductCategories";
import ProductPrices from "./Prices/ProductPrices";
import AdditonalInfo from "./Additonal/AdditonalInfo";
import FeaturedProducts from "./Featured/FeaturedProducts";
import FruitsBanner from "./Banner/FruitsBanner";
import ProductCards from "./Catalogue/ProductCards";
const ShopPage = () => {
  return (
    <section>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* Single Page Header End */}
      {/* Agro Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Agro shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                {/* input field - search bar */}
                <div className="col-xl-3">
                  {/* input */}
                  <SearchBar />
                </div>
                <div className="col-6" />
                {/* Filter */}
                <FilterProducts />
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <ProductCategories />
                    <ProductPrices />
                    <AdditonalInfo />
                    <FeaturedProducts />
                    <FruitsBanner />
                  </div>
                </div>
                <div className="col-lg-9">
                  <ProductCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Agro Shop End*/}
    </section>
  );
};

export default ShopPage;
