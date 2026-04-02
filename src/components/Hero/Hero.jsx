import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-desc">
        <div className="title-desc">Welcome to Mivasa Interiors</div>
        <div className="sub-desc">
          Blending innovation and artistry with thoughtful functionality.
        </div>
      </div>
      <div className="hero-btns">
        <button>Get Started</button>
        <button>Our Projects</button>
      </div>
    </section>
  );
};

export default Hero;
