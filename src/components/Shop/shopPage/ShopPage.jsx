import React from "react";
import SearchBar from "../InputSearchBar/SearchBar";
import FilterProducts from "../Filter/FilterProducts";
import ProductCategories from "../Categories/ProductCategories";
import ProductPrices from "../Prices/ProductPrices";
import AdditonalInfo from "../Additonal/AdditonalInfo";
import FeaturedProducts from "../Featured/FeaturedProducts";
import FruitsBanner from "../Banner/FruitsBanner";
import ProductCards from "../Catalogue/ProductCards";
import SinglePageHeader from "../PageHeader/SinglePageHeader";
import styles from "../shopPage/Shop.module.css";
import { Link } from "react-router-dom";
// import ViewCart from "../Cart/ViewCart";

const ShopPage = () => {
  return (
    <section>
      {/* Agro Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Market Place</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                {/* input field - search bar */}
                <div className="col-xl-3">
                  {/* input */}
                  <SearchBar />
                  <span className={styles.veiwCart}>
                    <Link to="/market/view"> View Cart</Link>
                  </span>
                </div>
                <div className="col-6" />
                {/* Filter */}
                <FilterProducts />
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <SinglePageHeader/>
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
    </section>
  );
};

export default ShopPage;
