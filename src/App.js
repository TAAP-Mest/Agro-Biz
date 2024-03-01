import { Route, Routes } from "react-router-dom";
import "./App.css";
import MarketPlace from "./pages/MarketPlace";
import ViewCart from "./components/Cart/ViewCart";
import BillingDetails from "./components/Checkout/BillingDetails";
import SinglePageHeader from "./components/Shop/PageHeader/SinglePageHeader";
// import LandingPage from "./pages/landing";


// const router = createBrowserRouter([
//   {
//     path: "/", element: <LandingPage />
//   },
//   {
//     path: "/", element: <LandingPage />
//   },
// ]);


function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <SinglePageHeader />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/view" element={<ViewCart />} />
        <Route path="/bill" element={<BillingDetails />} />

      </Routes>

    </>
  );
}

export default App;
