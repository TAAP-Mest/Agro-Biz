import AddNewProduct from "../../components/Add a new product";
import EditProduct from "../../components/Edit a product";
import SellerDashboard from "../../components/Seller Dashboard";

const SellingPage = () => {
    return (
        <section>
            <SellerDashboard />
            <AddNewProduct />
            <EditProduct />
        </section>

    )
}

export default SellingPage;