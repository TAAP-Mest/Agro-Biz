//rafce to get the react arrow function..however, intsall the es7+ extension first

import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Testimonials from "../../components/Testimonials";
import TopSellers from "../../components/TopSellers";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <TopSellers />
      <Testimonials />
      

    </div>
  )
}

export default LandingPage;