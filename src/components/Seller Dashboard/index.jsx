import {
  AppBar, Toolbar, Button, Box, Typography, Container, Grid,
  Card, CardMedia, CardContent, CardActions,

} from "@mui/material";
// import ProductItem from "../Add a new product/products item";
import { useLocalStorage } from "usehooks-ts";

const SellerDashboard = () => {

  const [products, setProducts] = useLocalStorage('ADDPRODUCTS_KEY', []);
  console.log(products)

  function deleteAll() {
    setProducts([]);
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ my: "1rem", backgroundColor: 'green' }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" color="primary">
            My Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Typography sx={{ mx: "1rem", color: 'blue' }}>My store</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 345, my: "2rem", mx: "3rem", height: "100%" }}

            >
              <CardMedia component="img" alt="item" height="160" image="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GHS {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">Edit</Button>
                <Button onClick={deleteAll} size="medium">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Container sx={{ my: "2rem" }} maxWidth="sm">
        <Button size="large" variant="outlined">
          Start selling
        </Button>
      </Container>
    </Box>
  );
};

export default SellerDashboard;
