import "./Projects.css";
import image1 from './../../assets/Gallery/galleryImage1.webp'
import image2 from './../../assets/Gallery/galleryImage2.webp'
import image3 from './../../assets/Gallery/galleryImage3.webp'
import image4 from './../../assets/Gallery/galleryImage4.webp'
import image5 from './../../assets/Gallery/galleryImage5.webp'
import image6 from './../../assets/Gallery/galleryImage6.webp'


const projects = [
  {
    title: "Modern Living Room",
    desc: "A clean and minimal living space with neutral tones.",
    category: "Living",
    img: image1,
  },
  {
    title: "Luxury Kitchen",
    desc: "Elegant kitchen design with modern appliances.",
    category: "Kitchen",
    img: image2,
  },
  {
    title: "Cozy Bedroom",
    desc: "Warm and relaxing bedroom with soft lighting.",
    category: "Bedroom",
    img: image3,
  },
  {
    title: "Office Workspace",
    desc: "Minimal workspace for productivity and focus.",
    category: "Office",
    img: image4,
  },
  {
    title: "Dining Area",
    desc: "Modern dining setup with elegant furniture.",
    category: "Dining",
    img: image5,
  },
  {
    title: "Luxury Bathroom",
    desc: "Premium bathroom design with marble finish.",
    category: "Bathroom",
    img: image6,
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">

        <h2>Our Projects</h2>
        <p className="projects-sub">
          A glimpse into our creative interior transformations.
        </p>

        <div className="projects-grid">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              
              <div className="project-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="project-content">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;