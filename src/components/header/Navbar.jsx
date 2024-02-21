import styles from  "./nav.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span>Home</span>
      <span>About Us</span>
      <span>Our Products</span>
      <span>Sell Now</span>
      <span>Contact Us</span>
    </div>
  )
}

export default Navbar;