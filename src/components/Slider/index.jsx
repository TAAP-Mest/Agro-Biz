import slider1 from '../../Assets/slider1.jpg'
import slider2 from'../../Assets/slider2.jpg'
import slider3 from '../../Assets/slider3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import styles from './index.module.css'



function Slider() {
  return (
    <Carousel pause='false'>
      <Carousel.Item className={styles.imageContainer}  interval={2000}>
        <img src= {slider1} className={styles.imageSizer} alt='' />
        <Carousel.Caption>
          <h3>Buy Now</h3>
          <button>BUY NOW</button>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.imageContainer}  interval={2000}>
      <img src= {slider2} className={styles.imageSizer} alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.imageContainer}  interval={2000}>
      <img src= {slider3} className={styles.imageSizer} alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

