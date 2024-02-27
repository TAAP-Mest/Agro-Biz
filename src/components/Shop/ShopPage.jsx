import React from "react";

const ShopPage = () => {
  return (
    <section>
      <div>
        {/* Navbar start */}
        {/* <div className="container-fluid fixed-top">
          <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3">
                  <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                  <a href="#" className="text-white">
                    123 Street, New York
                  </a>
                </small>
                <small className="me-3">
                  <i className="fas fa-envelope me-2 text-secondary" />
                  <a href="#" className="text-white">
                    Email@Example.com
                  </a>
                </small>
              </div>
              <div className="top-link pe-2">
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Privacy Policy</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Terms of Use</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white ms-2">Sales and Refunds</small>
                </a>
              </div>
            </div>
          </div>
          <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
              <a href="index.html" className="navbar-brand">
                <h1 className="text-primary display-6">Fruitables</h1>
              </a>
              <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars text-primary" />
              </button>
              <div
                className="collapse navbar-collapse bg-white"
                id="navbarCollapse"
              >
                <div className="navbar-nav mx-auto">
                  <a href="index.html" className="nav-item nav-link">
                    Home
                  </a>
                  <a href="shop.html" className="nav-item nav-link active">
                    Shop
                  </a>
                  <a href="shop-detail.html" className="nav-item nav-link">
                    Shop Detail
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                      <a href="cart.html" className="dropdown-item">
                        Cart
                      </a>
                      <a href="chackout.html" className="dropdown-item">
                        Chackout
                      </a>
                      <a href="testimonial.html" className="dropdown-item">
                        Testimonial
                      </a>
                      <a href="404.html" className="dropdown-item">
                        404 Page
                      </a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="d-flex m-3 me-0">
                  <button
                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search text-primary" />
                  </button>
                  <a href="#" className="position-relative me-4 my-auto">
                    <i className="fa fa-shopping-bag fa-2x" />
                    <span
                      className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                      style={{
                        top: "-5px",
                        left: 15,
                        height: 20,
                        minWidth: 20,
                      }}
                    >
                      3
                    </span>
                  </a>
                  <a href="#" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div> */}
        {/* Navbar End */}
        {/* Modal Search Start */}
        {/* <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Modal Search End */}
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
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Agro shop</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  {/* input field - search bar */}
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="keywords"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>

                  <div className="col-6" />
                  {/* Filter */}
                  <div className="col-xl-3">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                      <label htmlFor="fruits">Filter:</label>
                      <select
                        id="fruits"
                        name="fruitlist"
                        className="border-0 form-select-sm bg-light me-3"
                        form="fruitform"
                      >
                        <option value="volvo">Nothing</option>
                        <option value="saab">Popularity</option>
                        <option value="opel">Organic</option>
                        <option value="audi">Fantastic</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
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
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4 className="mb-2">Price</h4>
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min={0}
                            max={500}
                            defaultValue={0}
                            oninput="amount.value=rangeInput.value"
                          />
                          <output
                            id="amount"
                            name="amount"
                            min-velue={0}
                            max-value={500}
                            htmlFor="rangeInput"
                          >
                            0
                          </output>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Additional</h4>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-1"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-1"> Organic</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-2"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-2"> Fresh</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-3"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-3"> Sales</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-4"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-4"> Discount</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-5"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-5"> Expired</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h4 className="mb-3">Featured products</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src="img/featur-1.jpg"
                              className="img-fluid rounded"
                              alt
                            />
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
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src="img/featur-2.jpg"
                              className="img-fluid rounded"
                              alt
                            />
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
                          <div
                            className="rounded me-4"
                            style={{ width: 100, height: 100 }}
                          >
                            <img
                              src="img/featur-3.jpg"
                              className="img-fluid rounded"
                              alt
                            />
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
                        <div className="d-flex justify-content-center my-4">
                          <a
                            href="<FeaturedProducts/>#"
                            className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                          >
                            Vew More
                          </a>
                        </div>
                      </div>
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
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-4.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-3.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-1.jpg"
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                Ghs25.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                Ghs100.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                Ghs30.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-1.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            Seeds
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>CARROT NEW KURODA</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                Ghs18.99 / kg
                              </p>
                              <a
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="pagination d-flex justify-content-center mt-5">
                          <a href="#" className="rounded">
                            «
                          </a>
                          <a href="#" className="active rounded">
                            1
                          </a>
                          <a href="#" className="rounded">
                            2
                          </a>
                          <a href="#" className="rounded">
                            3
                          </a>
                          <a href="#" className="rounded">
                            4
                          </a>
                          <a href="#" className="rounded">
                            5
                          </a>
                          <a href="#" className="rounded">
                            6
                          </a>
                          <a href="#" className="rounded">
                            »
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fruits Shop End*/}
      </div>
    </section>
  );
};

export default ShopPage;
