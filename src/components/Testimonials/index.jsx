import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

let testimonialsData = [
{
  id: 1,
  name: 'Maria',
  title: 'Small-Scale Farmer',
  description: '“As a small-scale farmer, I used to struggle with finding buyers for my fresh produce. But ever since I started using AgroBiz, my life has changed. The platform connects me directly with consumers who appreciate locally grown, organic fruits and vegetables. The seamless ordering process and timely payments have made my farming journey more sustainable and profitable.”'
},
{
  id: 2,
  name: 'Joseph',
  title: 'Urban Gardener',
  description: '“Living in a city, I always dreamed of having my own garden. Thanks to AgroBiz, I can now order a variety of seeds, saplings, and gardening tools online. The website is user-friendly interface and detailed product descriptions make it easy for me to choose the right items. Plus, their blog section provides valuable tips on urban gardening. I have transformed my balcony into a lush green oasis!”'
},
{
  id: 3,
  name: 'Raph',
  title: 'Restaurant Owner',
  description: '“Running a restaurant means sourcing high-quality ingredients consistently. FreshHarvest has become my go-to platform for procuring fresh produce directly from local farmers. The website’s real-time inventory updates, competitive pricing, and reliable delivery service have streamlined my supply chain. My customers appreciate the farm-to-table concept, and I credit it all to FreshHarvest.”'
},

]

const Testimonials = () => {
  return (
    <section className='testimonialBox'>
      <Container fluid>
        <div className='appTestimonial'>
          <h2>Testimonials</h2>
          <span className='subtitle'>What our users say about us</span>
        </div>

        <Carousel controls={false} >
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item interval={500} key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='firstTestimonial'>{testimonials.name}</span><br />
                      <span className='firstTestimonialTitle'>{testimonials.title}</span>
                    </cite>
                  </blockquote>
                </Carousel.Item>
              );
            })
          }

        </Carousel>
      </Container>

    </section>
  )
}

export default Testimonials;