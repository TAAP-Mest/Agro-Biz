import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box className={styles.navBox}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>

      <AppBar
        sx={{
          my: "2rem",
          background: "transparent",
          boxShadow: "none",
          position: "absolute",
          zIndex: "100",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <img className={styles.logoImage} src={logo} alt="AgroBiz" />
          <span>
            <Link to="/">Home</Link>{" "}
          </span>
          <span>
            <Link to="/about">About Us</Link>{" "}
          </span>
          <span>
            <Link to="/market">Market Place</Link>{" "}
          </span>
          <span>
            <Link to="sell">Sell Now</Link>{" "}
          </span>
          <span>
            <a href="#footer">Contact Us</a>{" "}
          </span>
          <IconButton color="inherit" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Button sx={{ background: "rgb(0,178,7)", color: "white" }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
