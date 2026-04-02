import { useState } from "react";
import "./GalleryPage.css";

const galleryData = [
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", category: "Living" },
  { img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", category: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80", category: "Bedroom" },
  { img: "https://images.unsplash.com/photo-1600566752227-8f3d1f5d1d19?w=800&q=80", category: "Living" },
  { img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80", category: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80", category: "Bedroom" },
  { img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80", category: "Living" },
  { img: "https://images.unsplash.com/photo-1600607687644-c7f34b5063d3?w=800&q=80", category: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80", category: "Bedroom" },
  { img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80", category: "Living" },
  { img: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80", category: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1600607688903-6e0d5b3c0cdd?w=800&q=80", category: "Bedroom" },
];

const categories = ["All", "Living", "Kitchen", "Bedroom"];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  return (
    <div className="gallery-page">

      {/* Hero */}
      <section className="gallery-hero">
        <h1>Gallery</h1>
        <p>Explore our creative interior designs.</p>
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
      <div className="gallery-grid">
        {filtered.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelected(item.img)}
          >
            <img src={item.img} alt="" loading="lazy" />

            <div className="overlay">View</div>
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
      <section className="gallery-cta">
        <h2>Inspired by our work?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default GalleryPage;