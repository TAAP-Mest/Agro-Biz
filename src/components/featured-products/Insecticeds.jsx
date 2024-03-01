import React from "react";

const Insecticeds = () => {
  return (
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <img
                  src="https://www.agromonti.com/wp-content/uploads/2020/09/ALTIFURA.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                Insecticides
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>Altifura 3G</h4>
                <p>
                  Nematicide & Insecticide for the control of a wide range of
                  insect pests and nematodes in vegetables, rice, nurseries,
                  maize, etc.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">Ghs25.00 </p>
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
                  src="https://www.agromonti.com/wp-content/uploads/2020/09/ALTIFURA.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                Insecticides
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>Altifura 5G</h4>
                <p>
                  Nematicide & Insecticide for the control of a wide range of
                  insect pests and nematodes in vegetables, rice, nurseries,
                  maize, etc.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold mb-0">Ghs30.00</p>
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

export default Insecticeds;
