import AddNewProduct from "../../components/Addanewproduct";
import EditOldProduct from "../../components/EditOldProduct";

import SellerDashboard from "../../components/sellerDashboard";

const SellingPage = () => {
    return (
        <section>
            <SellerDashboard />
            <AddNewProduct />
            <EditOldProduct />
        </section>

    )
}

export default SellingPage;