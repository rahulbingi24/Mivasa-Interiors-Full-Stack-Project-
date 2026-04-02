import { useState } from "react";
import "./ProjectsPage.css";

const projectsData = [
  {
    title: "Modern Living Room",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Luxury Bedroom",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  },
  {
    title: "Modular Kitchen",
    category: "Kitchen",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    title: "Office Workspace",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
  },
  {
    title: "Minimal Apartment",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    title: "Premium Hall Design",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80",
  },
];

const categories = ["All", "Residential", "Interior", "Kitchen", "Commercial"];

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <div className="projects-page">

      {/* Hero */}
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>Explore our latest interior design works.</p>
      </section>

      {/* Filters */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelected(project.img)}
          >
            <img src={project.img} alt={project.title} loading="lazy" />

            <div className="overlay">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="" />
        </div>
      )}

      {/* CTA */}
      <section className="projects-cta">
        <h2>Have a project in mind?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default ProjectsPage;