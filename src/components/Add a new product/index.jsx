// import styles from './index.modules.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLocalStorage } from "usehooks-ts";
import styles from './index.module.css'
const AddNewProduct = () => {

    const [addProducts, setAddProducts] = useLocalStorage('ADDPRODUCTS_KEY', []);

    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');



    function saveAddProducts() {
        setAddProducts([...addProducts, { item, description, file, quantity, price, }]);
    }

    function itemName(event) {
        setItem(event.target.value);
        console.log(event.target.value);
    }

    function itemDescription(event) {
        setDescription(event.target.value);
        console.log(event.target.value);
    }

    function fileUpload(event) {
        setFile(event.target.files[0]);
    }




    function qtyValue(event) {
        setQuantity(event.target.value);
        console.log(event.target.value);
    }

    function priceAmount(event) {
        setPrice(event.target.value);
        console.log(event.target.value);
    }

    return (

        <Form className={styles.sellerForm}>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control onChange={itemName} value={item} placeholder="Name of item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={itemDescription} value={description} placeholder="Describe the item" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control onChange={fileUpload} value={file} type="file" multiple />
            </Form.Group>

            <Row className="mb-3">
                <Form.Floating as={Col} className="mb-3">
                    <Form.Control
                        onChange={qtyValue}
                        id="floatingInputCustom"
                        type="number"
                        value={quantity}
                    />
                    <label htmlFor="floatingInputCustom">Quantity</label>
                </Form.Floating>

                <Form.Floating as={Col} className="mb-3">
                    <Form.Control
                        onChange={priceAmount}
                        id="floatingInputCustom"
                        type="number"
                        value={price}
                    />
                    <label htmlFor="floatingInputCustom">Price (GHS)</label>
                </Form.Floating>

            </Row>


            <Button
                onClick={saveAddProducts}
                variant="primary" type="submit">
                Publish Item
            </Button>
        </Form>

    );
}

export default AddNewProduct;