import React from "react";
import HeadingProduct from "./HeadingProduct";
import FilterProducts from "./FilterProducts";
import FruitsCatalog from "./Fruits";
import SeedsCatalog from "./SeedsCatalog";
import AllProducts from "./AllProducts";
import VegetablesCatalog from "./VegetablesCatalog";
import Insecticeds from "./Insecticeds";
// import styles from "./AllProducts.module.css"

const FeaturedProducts = () => {
  return (
    <section className="featuredProduct">
      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <HeadingProduct />
              <FilterProducts />
            </div>
            {/* Products catalog */}
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <AllProducts />
                {/* <FruitsCatalog /> */}
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <SeedsCatalog />
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <FruitsCatalog />
              </div>
              <div id="tab-4" className="tab-pane fade show p-0">
                <VegetablesCatalog />
              </div>
              <div id="tab-5" className="tab-pane fade show p-0">
                <Insecticeds />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
