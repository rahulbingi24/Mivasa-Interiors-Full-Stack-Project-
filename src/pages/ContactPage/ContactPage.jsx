import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s bring your dream space to life.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">

          {/* Left - Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p><strong>Email:</strong> shravan@gmail.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> India</p>

            <div className="map">
              <p>Map Placeholder</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>We’re ready to design your space</h2>
        <button>Get Started</button>
      </section>

    </div>
  );
};

export default ContactPage;