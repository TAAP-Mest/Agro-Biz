
// import styles from './index.modules.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SellerDashboard = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Categories</Form.Label>
                <Form.Select type=''>
                    <option value="" disabled selected hidden>Select a Category</option>
                    <option value="tools & equipment">Tools & Equipment</option>
                    <option value="foodstuff">Foodstuff</option>
                    <option value="farm inputs">Farm Inputs</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type=" " placeholder="Name of item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type=" " placeholder="Describe the item" />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>

            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="number"
                />
                <label htmlFor="floatingInputCustom">Quantity</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="number"
                />
                <label htmlFor="floatingInputCustom">Price (GHS)</label>
            </Form.Floating>

            <Button variant="primary" type="publish item">
                Publish Item
            </Button>
        </Form>


    )
}

export default SellerDashboard;