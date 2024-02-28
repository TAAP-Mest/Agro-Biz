// import Container from 'react-bootstrap/Container';
// import Carousel from 'react-bootstrap/Carousel';
// import anisa from '../../Assets/anisa.jpg'
// import abigail from '../../Assets/abigail.jpg'
// import ella from '../../Assets/ella.jpg'
// import styles from './index.module.css'

import Data from './raw';
import TestimonialData from './TestimonialsData';

export default function Testimonials() {

  const dataComp = Data.map((data) => {
    return (
      <TestimonialData
        key={data.id}
        name={data.name}
        src={data.src}
        description={data.description}
        title={data.title}

      />
    );
  })
  return (
    <div>
      {dataComp}
    </div> 
)
}