import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutUs";
import SellingPage from "./pages/SellingPage";
import Footer from "./components/footer";
import MarketPlace from "./pages/MarketPlace";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ViewCart from "./components/Cart/ViewCart";
import BillingDetails from "./components/Checkout/BillingDetails";
// import SinglePageHeader from ".

export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<MarketPlace />}/>
        <Route path="/market/view" element={<ViewCart />} />
          <Route path="/market/bill" element={<BillingDetails />} />
        <Route path="/sell" element={<SellingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
