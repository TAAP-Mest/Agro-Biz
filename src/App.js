import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutUs";
import SellingPage from "./pages/SellingPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import MarketPlace from "./pages/MarketPlace";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<MarketPlace />} />
        <Route path="/sell" element={<SellingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
