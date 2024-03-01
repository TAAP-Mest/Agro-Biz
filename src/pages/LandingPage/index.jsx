//rafce to get the react arrow function..however, intsall the es7+ extension first
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Testimonials from "../../components/Testimonials";
import UserTestimonials from "../../components/Testimonials/user";
import TopSellers from "../../components/TopSellers";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Slider />
      <FeaturedProducts />
      <TopSellers />
      <UserTestimonials />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
