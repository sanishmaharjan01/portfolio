import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    {
      title: "HTML5",
      rating: 4,
      description: "Experienced in writing semantic HTML5 code for structured, accessible web pages."
    },
    {
      title: "CSS3",
      rating: 4,
      description: "Skilled in modern layouts, animations, Flexbox, and responsive design using CSS3."
    },
    {
      title: "React.js",
      rating: 2.5,
      description: "Learning React.js to build scalable and dynamic single-page applications with components."
    },
    {
      title: "JavaScript",
      rating: 3,
      description: "Good understanding of ES6 features and DOM manipulation for interactive web apps."
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="#ffc107" />)}
        {hasHalfStar && <FaStarHalfAlt key="half" color="#ffc107" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="#ffc107" />)}
      </div>
    );
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button type="button" className="custom-arrow left" onClick={onClick}>
      <FaChevronLeft size={30} color="#ccc" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button type="button" className="custom-arrow right" onClick={onClick}>
      <FaChevronRight size={30} color="#ccc" />
    </button>
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I focus on crafting clean, functional, and visually engaging web interfaces.<br></br>
                My growing skill set helps me bring both structure and creativity to every project.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <h5>{skill.title}</h5>
                    <p>{skill.description}</p>
                    {renderStars(skill.rating)}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
