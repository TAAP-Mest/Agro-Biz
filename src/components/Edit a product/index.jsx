
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditProduct = () => {
  return (
    <Form>
            <Row className="mb-3">
            <Form.Group as={Col}  className="mb-3" controlId="formBasicEmail">
                <Form.Label>Categories</Form.Label>
                <Form.Select type=''>
                    <option value="" disabled selected hidden>Select a Category</option>
                    <option value="tools & equipment">Tools & Equipment</option>
                    <option value="foodstuff">Foodstuff</option>
                    <option value="farm inputs">Farm Inputs</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type=" " placeholder="Name of item" />
            </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type=" " placeholder="Describe the item" />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>

            <Row className="mb-3">
            <Form.Floating as={Col} className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="number"
                />
                <label htmlFor="floatingInputCustom">Quantity</label>
            </Form.Floating>

            <Form.Floating as={Col} className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="number"
                />
                <label htmlFor="floatingInputCustom">Price (GHS)</label>
            </Form.Floating>

            <Form.Floating as={Col} className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type='number'
                />
                <label htmlFor="floatingInputCustom"> Seller's Contact</label>
            </Form.Floating>
            </Row>


            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>

  )
}

export default EditProduct;