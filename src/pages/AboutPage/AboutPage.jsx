import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Crafting beautiful spaces with passion and precision.</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are an interior design studio focused on creating elegant,
              functional, and inspiring spaces. Our team blends creativity
              with modern design principles to deliver exceptional results.
            </p>
            <p>
              From residential to commercial projects, we ensure every detail
              reflects quality and innovation.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="interior"
            />
          </div>

        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mission">
        <div className="container">

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To design spaces that enhance lifestyle and bring comfort with
              aesthetic excellence.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To become a leading interior design brand known for innovation
              and quality.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="container">

          <div className="feature">✔ Modern Designs</div>
          <div className="feature">✔ Quality Materials</div>
          <div className="feature">✔ Affordable Pricing</div>
          <div className="feature">✔ Client Satisfaction</div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Design Your Dream Space</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default AboutPage;