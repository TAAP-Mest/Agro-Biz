import { AppBar, Toolbar, IconButton, Typography, Button, Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




export default function Navbar() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    

        <AppBar color="transparent" sx={{my: '5rem'}} position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Agrobiz Logo
                </Typography>
                <Button variant="text">Home</Button>
                <Button variant="text">About Us</Button>
                <Button variant="text">Our Products</Button>
                <Button variant="text">Sell Now</Button>
                <Button variant="text">Contact Us</Button>
                <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
}
