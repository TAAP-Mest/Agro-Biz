import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";

const SellerDashboard = () => {
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
        <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 345, my: "2rem", mx: "3rem", height: "100%" }}
            >
              <CardMedia component="img" alt="item" height="160" image="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Item name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Provide product details here
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">Edit</Button>
                <Button size="medium">Delete</Button>
              </CardActions>
            </Card>
        </Grid>
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
