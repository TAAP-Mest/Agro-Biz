import React from "react";

const FruitsBanner = () => {
  return (
    <div className="col-lg-12">
      <div className="position-relative">
        <img
          src="img/banner-fruits.jpg"
          className="img-fluid w-100 rounded"
          alt
        />
        <div
          className="position-absolute"
          style={{
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
          }}
        >
          <h3 className="text-secondary fw-bold">
            Our <br /> Fresh <br /> Fruits
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FruitsBanner;
