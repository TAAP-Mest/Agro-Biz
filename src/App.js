
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerDashboard from "./components/Seller Dashboard";
import AddNewProduct from "./components/Add a new product";
import EditProduct from "./components/Edit a product";

const sellerrouter = createBrowserRouter([
  {path:"/", element: <SellerDashboard/>},
  {path:"/sellingpage", element: <SellerDashboard/>},
  {path:"/sellerdashboard", element: <SellerDashboard/>},
  {path:"/addnewproduct", element: <AddNewProduct/>},
  {path:"/editproduct", element: <EditProduct/>}
])


function App() {
  return (
    <div>
     <RouterProvider router={sellerrouter}/>
     <AddNewProduct />
    
    </div>
  );
}

export default App;
