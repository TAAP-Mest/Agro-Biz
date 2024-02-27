import slider1 from '../../Assets/slider1.jpg'
import slider2 from'../../Assets/slider2.jpg'
import slider3 from '../../Assets/slider3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import styles from './index.module.css'
import Button from 'react-bootstrap/Button';



function Slider() {
  return (
    <Carousel pause='false'>
      
      <Carousel.Item className={styles.imageContainer}  interval={5000}>
        <img src= {slider1} className={styles.imageSizer} alt='' />
        <Carousel.Caption className={styles.captionBox}>
        <h2 className={styles.headLine}>Quality Agriculture Products</h2>
          <h4 className={styles.welcomeToAgro}>Welcome to AgroBiz. We believe in better Agriculture for better future</h4>
          <button className={styles.callToAction}>Buy Here</button>
          <button className={styles.callToAction}>Sell Here</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.imageContainer}  interval={5000}>
      <img src= {slider2} className={styles.imageSizer} alt='' />
        <Carousel.Caption className={styles.captionBox}>
        <h2 className={styles.headLine}>Quality Agriculture Products</h2>
          <h4 className={styles.welcomeToAgro}>Welcome to AgroBiz. We believe in better Agriculture for better future</h4>
          <button className={styles.callToAction}>Buy Here</button>
          <button className={styles.callToAction}>Sell Here</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.imageContainer}  interval={5000}>
      <img src= {slider3} className={styles.imageSizer} alt='' />
        <Carousel.Caption className={styles.captionBox}>
        <h2 className={styles.headLine}>Quality Agriculture Products</h2>
          <h4 className={styles.welcomeToAgro}>Welcome to AgroBiz. We believe in better Agriculture for better future</h4>
          <Button variant='primary ' className={styles.callToAction}>Buy Here</Button>
          <Button variant='primary ' className={styles.callToAction}>Sell Here</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

