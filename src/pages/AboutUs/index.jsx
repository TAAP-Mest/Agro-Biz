import abigail from "../../../Assets/abigail.jpg";
import anisa from "../../../Assets/anisa.jpg";
import ella from "../../../Assets/ella.jpg";
import theo from "../../Assets/theo.jpg";


const About = () => {
  return (
    <div>
      <h1>
        Welcome to AgroBiz - Your trusted source of quality and affordable agro
        products
      </h1>
      <h2>Our Story</h2>
      <p>
        At AgroBiz, we believe in the power of nature. Our journey began when a
        group of passionate farmers and like-minded individuals came together
        with a shared vision: to revolutionize the way people access fresh,
        organic produce and agro products. We wanted to bridge the gap between
        farmers and consumers, creating a seamless platform where quality meets
        convenience and the vast needs of consumers are met without hussle and
        tussle.
      </p>
      <h2>What We Offer</h2>
      <p>
        Our marketplace showcases an array of agro products from handpicked,
        organic fruits and vegetables to viable seeds that blossom into fruitful
        trees. We partner directly with local farmers, ensuring fair prices and
        sustainable practices. Every purchase you make supports small-scale
        agriculture and promotes biodiversity. With our up-to-date logistics
        network, your farm-fresh bounty arrives at your doorstep within hours.
        Say goodbye to long supermarket queues and hello to hassle-free
        shopping. AgroBiz isn&#39;t just a business; it&#39;s a movement. We
        organize workshops, webinars, and farm tours to educate consumers about
        sustainable farming practices.
      </p>
      <h2>Vision</h2>
      <p>To be a resourceful, reliable and dependent marketplace that makes shopping easy, promotes environmental sustainabilty and prides itself by its core values</p>
      <h2>Mission</h2>
      <p>Our biggest mission is to bring the best value of agricultural products to the world. As import becomes increasingly vital in agro business, we aim to introduce Vietnamese high-quality agriculture products to global importers at the most reasonable price. We are committed to enhancing the value of Vietnamese agricultural products, supporting local farmers, and fostering a sustainable future.”</p>
      <h2>Meet Our Team</h2>
      <div>
        <img src={abigail} alt="Abigail Oppong" />
        <h4>Ms. Abigail Oppong</h4>
        <h5>Chief Cultivator and Agronomist</h5>
        <p>
          Abigail&#39;s love for soil and seeds drives our mission to be
          productive, efficient and dynamic.
        </p>
      </div>
      <div>
        <img src={ella} alt="Priscilla Paulina" />
        <h4>Ms. Priscilla Paulina</h4>
        <h4>IT Specialist and Data Analyst</h4>
        <p>
          Priscilla ensures our website is updated and functioning at all times.
          Fixing bugs as and when they come and ensuring a user-friendly
          interface for ease of shopping thereby providing our customers with a rich shopping experience.
        </p>
      </div>
      <div>
        <img src={anisa} alt="Anisa Danso"/>
        <h4>Ms. Anisa Danso</h4>
        <h4>Co-founder and Enviroment Enthusiast</h4>
        <p>From ensuring proper environmental practises are employed to promoting long-term sustainable environmental practises,we are happy she is a part of our team</p>
      </div>
      <div>
        <img src={theo} alt="Theophilus Nuer" />
        <h4>Mr. Theophilus Nuer</h4>
        <h4>CEO of AgroBiz</h4>
        <p>Oversees the daily operations of AgroBiz and allocates resources.</p>
      </div>
    </div>
  );
};

export default About;