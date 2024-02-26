import styles from "./index.module.css";

const TopSellers = () => {
  return (
    <section className="TopSellers">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">TOP SELLERS</h1>
          </div>
          <div className="row g-4">
            {/* Keep This Part */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="https://www.agromonti.com/wp-content/uploads/2020/07/products01-376x566.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    FUNGICIDE
                  </a>
                  <div className="d-flex my-3 justify-content-center"></div>
                  <h4 className="mb-3">55 ghc</h4>
                  <a
                    href="#"
                    className="btn border border-secondary button-square px-3 text-success"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1502236876560-243e78f715f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFncmljdWx0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center"></div>
                  <h4 className="mb-3">5 ghc</h4>
                  <a
                    href="#"
                    className="btn border border-secondary button-square px-3 text-success"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="https://www.agromonti.com/wp-content/uploads/2022/03/03A9006-265x230.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Quicelum
                  </a>
                  <div className="d-flex my-3 justify-content-center"></div>
                  <h4 className="mb-3">100 ghc</h4>
                  <a
                    href="#"
                    className="btn border border-secondary button-square px-3 text-success"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="https://www.agromonti.com/wp-content/uploads/2020/09/FUNGICIDE-VICTORY-WP-265x230.jpg"
                  className="img-fluid rounded"
                  alt
                />
                <div className="py-2">
                  <a href="#" className="h5">
                    Victory 72 WP
                  </a>
                  <div className="d-flex my-3 justify-content-center"></div>
                  <h4 className="mb-3">15 ghc</h4>
                  <a
                    href="#"
                    className="btn border border-secondary button-square px-3 text-success"
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
    </section>
  );
};

export default TopSellers;
