import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.css';
import logo from '../../Assets/logo.png';

export default function Navbar() {
  return (
    <Box className={styles.navBox} >
    
        
    <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
      
      <AppBar sx={{ my: '4rem', background: 'transparent', boxShadow: 'none', position: 'absolute', zIndex: '100'}} position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly'}} >
          <img className={styles.logoImage} src={logo} alt="AgroBiz" />
          <span>Home</span>
          <span> About Us</span>
          <span> Market Place</span>
          <span> Sell Now</span>
          <span><a href="#footer">Contact Us</a> </span>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Button sx={{background:'rgb(0,178,7)', color:'white'}}>Sign Up</Button>
        </Toolbar>
      </AppBar>

      
    </Box>
  );
}
