
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerDashboard from "./components/sellerDashboard";
import AddNewProduct from "./components/Addanewproduct";
import EditProduct from "./components/Editproduct";

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
