import { AppBar, Toolbar, IconButton, Button, TextField, Box, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant="outlined"
          label="Search"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />

      </Grid>
      <AppBar color="transparent" sx={{ my: '1rem' }} position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <Button variant="text">Home</Button>
          <Button variant="text">About Us</Button>
          <Button variant="text">Our Products</Button>
          <Button variant="text">Sell Now</Button>
          <Button variant="text">Contact Us</Button>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Button color="warning">Sign Up</Button>
        </Toolbar>
      </AppBar>

      
    </Box>
  );
}
