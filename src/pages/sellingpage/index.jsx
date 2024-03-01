import AddNewProduct from "../../components/Addanewproduct";
import EditProduct from "../../components/Editproduct";
import SellerDashboard from "../../components/sellerDashboard";

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