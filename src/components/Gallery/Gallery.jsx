import { useState } from "react";
import "./Gallery.css";
import image1 from './../../assets/Gallery/galleryImage1.webp'
import image2 from './../../assets/Gallery/galleryImage2.webp'
import image3 from './../../assets/Gallery/galleryImage3.webp'
import image4 from './../../assets/Gallery/galleryImage4.webp'
import image5 from './../../assets/Gallery/galleryImage5.webp'
import image6 from './../../assets/Gallery/galleryImage6.webp'
import image7 from './../../assets/Gallery/galleryImage7.webp'
import image8 from './../../assets/Gallery/galleryImage8.webp'
import image9 from './../../assets/Gallery/galleryImage9.webp'
// import image1 from './../../assets/Gallery/galleryImage1'

const galleryData = [
  { img: image1, category: "Living" },
  { img: image2, category: "Kitchen" },
  { img: image3, category: "Bedroom" },
  { img: image4, category: "Living" },
  { img: image5, category: "Kitchen" },
  { img: image6, category: "Bedroom" },
  { img: image7, category: "Living" },
  { img: image8, category: "Kitchen" },
  { img: image9, category: "Bedroom" },
];

const categories = ["All", "Living", "Kitchen", "Bedroom"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  return (
    <section className="gallery">
      <div className="gallery-container">

        <h2>Our Gallery</h2>
        <p className="gallery-quote">
          "Design is intelligence made visible."
        </p>

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
              onClick={() => setSelectedImg(item.img)}
            >
              <img src={item.img} alt="" loading="lazy" />
              <div className="overlay">View</div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="" />
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;