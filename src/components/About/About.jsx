import "./About.css";
import aboutImage from './../../assets/Gallery/about.webp'


const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At Mivasa Interiors, we blend creativity with functionality
            to deliver innovative digital solutions. Our team is passionate about
            crafting user-friendly and visually stunning experiences.
          </p>
          <p>
            We focus on delivering high-quality designs that not only look great
            but also solve real-world problems.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt="about"
          />
        </div>

      </div>
    </section>
  );
};

export default About;