import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">Mivasa Interiors</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>

        <button className="cta-btn">Get Started</button>

      </div>
    </nav>
  )
}

export default Navbar