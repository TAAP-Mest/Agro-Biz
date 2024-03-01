// import styles from './index.modules.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLocalStorage } from "usehooks-ts";
import styles from './index.module.css'
import { AppBar, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';



const EditOldProduct = () => {

    const [editProducts, setEditProducts] = useLocalStorage('ADDPRODUCTS_KEY', []);

    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');



    function saveEditProducts() {
        setEditProducts([...editProducts, { item, description, file, quantity, price, }])
        
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
        setFile(event.target.value);
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
        <section>
            <AppBar sx={{ my: "1rem", backgroundColor: 'rgb(0,178,7)' }} position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
                    <span className={styles.startSelling}>
                       <Link to= '/'>
                       My store
                       </Link>
                    </span>
                </Toolbar>
            </AppBar>
            <div className={styles.input}>
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
                        xs={{ background: "rgb(0,178,7)" }}
                        onClick={saveEditProducts}
                        variant="primary" type="submit">
                        Save Item
                    </Button>
                </Form>
            </div >
        </section>






    );
}

export default EditOldProduct;