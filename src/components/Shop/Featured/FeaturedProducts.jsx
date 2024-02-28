import React from "react";
import ViewMore from "./Button/ViewMore";
const FeaturedProducts = () => {
  return (
    <div className="col-lg-12">
      <h4 className="mb-3">Featured products</h4>
      <div className="d-flex align-items-center justify-content-start">
        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
          <img src="img/featur-1.jpg" className="img-fluid rounded" alt />
        </div>
        <div>
          <h6 className="mb-2">Big Banana</h6>
          <div className="d-flex mb-2">
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star" />
          </div>
          <div className="d-flex mb-2">
            <h5 className="fw-bold me-2">26.99 Ghs</h5>
            <h5 className="text-danger text-decoration-line-through">
              4.11 Ghs
            </h5>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-start">
        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
          <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
        </div>
        <div>
          <h6 className="mb-2">Big Banana</h6>
          <div className="d-flex mb-2">
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star" />
          </div>
          <div className="d-flex mb-2">
            <h5 className="fw-bold me-2">40.99 Ghs</h5>
            <h5 className="text-danger text-decoration-line-through">
              4.11 Ghs
            </h5>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-start">
        <div className="rounded me-4" style={{ width: 100, height: 100 }}>
          <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
        </div>
        <div>
          <h6 className="mb-2">Big Banana</h6>
          <div className="d-flex mb-2">
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star text-secondary" />
            <i className="fa fa-star" />
          </div>
          <div className="d-flex mb-2">
            <h5 className="fw-bold me-2">20 Ghs</h5>
            <h5 className="text-danger text-decoration-line-through">
              40.11 Ghs
            </h5>
          </div>
        </div>
      </div>
      <ViewMore />
    </div>
  );
};

export default FeaturedProducts;
