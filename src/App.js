
import { Route, Routes } from "react-router-dom";
import SellerDashboard from "./components/sellerDashboard";
import AddNewProduct from "./components/Addanewproduct";
import EditOldProduct from "./components/editOldProduct";





function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<SellerDashboard/>}/>
      <Route path="/add" element={<AddNewProduct/>}/>
      <Route path="/edit" element={<EditOldProduct/>}/>
    </Routes>
    
    </>
  );
}

export default App;
