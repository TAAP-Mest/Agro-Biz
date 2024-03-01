import styles from "./testimonialdata.module.css";

const TestimonialData = (props) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialImage}>
        <img src={props.src} alt="" />
      </div>
      <div className={styles.testimonialContent}>
        <p>{props.description}</p>
        <p className={styles.testimonialName}>{props.name}</p>
        <p className={styles.testimonialName}>{props.title}</p>
      </div>
    </div>
  );
};

export default TestimonialData;
