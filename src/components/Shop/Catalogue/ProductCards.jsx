import React from "react";

// const ProductCards = ({ products }) => {
//   return (
//     <div className="row g-4 justify-content-center">
//       {products.map((product) => (
//         <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
//           <div className="rounded position-relative fruite-item">
//             <div className="fruite-img">
//               <img
//                 src={product.img}
//                 className="img-fluid w-100 rounded-top"
//                 alt={product.name}
//               />
//             </div>
//             <div
//               className="text-white bg-secondary px-3 py-1 rounded position-absolute"
//               style={{ top: 10, left: 10 }}
//             >
//               {product.categories.join(", ")}
//             </div>
//             <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//               <h4>{product.name}</h4>
//               <p>{product.description}</p>
//               <div className="d-flex justify-content-between flex-lg-wrap">
//                 <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
//                 <button className="btn border border-secondary rounded-pill px-3 text-primary">
//                   <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                   cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;

// ProductCards.jsx
// import React from "react";

// const ProductCards = ({ products=[] }) => {
//   return (
//     <div className="row g-4 justify-content-center">
//       {products.map((product) => (
//         <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
//           <div className="rounded position-relative fruite-item">
//             <div className="fruite-img">
//               <img
//                 src={product.img}
//                 className="img-fluid w-100 rounded-top"
//                 alt={product.name}
//               />
//             </div>
//             <div
//               className="text-white bg-secondary px-3 py-1 rounded position-absolute"
//               style={{ top: 10, left: 10 }}
//             >
//               {product.categories}
//             </div>
//             <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//               <h4>{product.name}</h4>
//               <p>{product.description}</p>
//               <div className="d-flex justify-content-between flex-lg-wrap">
//                 <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
//                 <a
//                   href="#"
//                   className="btn border border-secondary rounded-pill px-3 text-primary"
//                 >
//                   <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
//                   cart
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCards;

const ProductCards = () => {
  return (
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
              A vibrant and luscious fruit native to South Asia, is a true taste
              of the tropics. Its oblong or kidney-shaped form is adorned with a
              smooth peel.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              A vibrant and luscious fruit native to South Asia, is a true taste
              of the tropics. Its oblong or kidney-shaped form is adorned with a
              smooth peel.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
            Vegetables
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>Raspberries</h4>
            <p>
              Its oblong or kidney-shaped form is adorned with a smooth, or
              orange peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              Its oblong or kidney-shaped form is adorned with a smooth, green,
              yellow, or orange peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              Its oblong or kidney-shaped form is adorned with a smooth, green,
              yellow, or orange peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs4.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
            Fruits
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>Orange</h4>
            <p>
              Its oblong or kidney-shaped form is adorned with a smooth, green,
              yellow, or orange peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs25.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              Its kidney-shaped form is adorned with a smooth, green, or orange
              peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs100.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              Its kidney-shaped form is adorned with a smooth, green, or orange
              peel, depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs30.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
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
              Its kidney-shaped form is adorned with a smooth, orange peel,
              depending on the variety.
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">Ghs18.99 / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
