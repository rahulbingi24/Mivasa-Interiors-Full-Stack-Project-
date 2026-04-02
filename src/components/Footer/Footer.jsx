import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h3 className="footer-logo">Shravan</h3>
          <p>
            Creating elegant and functional interior spaces that inspire
            everyday living.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: shravan@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Shravan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;