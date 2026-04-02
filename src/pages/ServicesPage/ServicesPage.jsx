import "./ServicesPage.css";

const services = [
  {
    title: "Residential Design",
    desc: "Creating comfortable and stylish living spaces tailored to your lifestyle.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Commercial Design",
    desc: "Designing functional and modern office and business environments.",
    img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
  },
  {
    title: "Modular Kitchen",
    desc: "Efficient and aesthetic kitchen designs with modern fittings.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    title: "Space Planning",
    desc: "Optimizing layouts for better functionality and flow.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    title: "Furniture Design",
    desc: "Custom furniture solutions that match your interior style.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    title: "Renovation",
    desc: "Transforming old spaces into modern and elegant designs.",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>We provide complete interior design solutions.</p>
      </section>

      {/* Services Grid */}
      <section className="services-list">
        <div className="container">

          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Process */}
      <section className="process">
        <h2>Our Process</h2>

        <div className="container">

          <div className="step">1. Consultation</div>
          <div className="step">2. Planning</div>
          <div className="step">3. Design</div>
          <div className="step">4. Execution</div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Ready to transform your space?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default ServicesPage;