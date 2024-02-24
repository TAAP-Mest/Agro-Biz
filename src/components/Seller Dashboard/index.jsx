import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const SellerDashboard = () => {
    return (
        <section>
            <Container fluid>
                <Row className='rows'>
                    <label htmlFor="categorie">Categories</label>
                    <select className="categorie">
                        <option value="" disabled selected hidden>Select a Category</option>
                        <option value="tools & equipment">Tools & Equipment</option>
                        <option value="foodstuff">Foodstuff</option>
                        <option value="farm inputs">Farm Inputs</option>
                    </select>
                </Row>

                <Row className='rows'>
                    <input type="text" placeholder='Name of item' />
                </Row>

                <Row className='rows'>
                    <input type="text" placeholder='Item description' />
                </Row>

                <Row className='rows'>
                    <input type="text" placeholder='Name of item' />
                </Row>

                <Row className='rows'>
                    <input type="text" placeholder='Name of item' />
                </Row>

                <Row className='rows'>
                    <input type="text" placeholder='Name of item' />
                </Row>
            </Container>

        </section>
    )
}

export default SellerDashboard;