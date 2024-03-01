import React from "react";

const VegetablesCatalog = () => {
  return (
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <img
                  src="https://themewagon.github.io/freshshop/images/img-pro-02.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                Vegetables
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>Tomatoes</h4>
                <p>
                  Fresh and Organic
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">Ghs36.50 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <img
                  src="https://themewagon.github.io/freshshop/images/instagram-img-01.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                Vegetables
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>Basel</h4>
                <p>
                Fresh and Organic
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">Ghs25 / kg</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetablesCatalog;
