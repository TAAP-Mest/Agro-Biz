import Data from "./raw";
import TestimonialData from "./TestimonialsData";

export default function Testimonials() {
  const dataComp = Data.map((data) => {
    return (
<>
      <TestimonialData
        key={data.id}
        name={data.name}
        src={data.src}
        description={data.description}
        title={data.title}
      />
</>

    );
  });
  return <div>{dataComp}</div>;
}
