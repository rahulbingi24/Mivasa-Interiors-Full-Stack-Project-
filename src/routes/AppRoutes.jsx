import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home'
import AboutPage from './../pages/AboutPage/AboutPage'
import ServicesPage from './../pages/ServicesPage/ServicesPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import GalleryPage from '../pages/GalleryPage/GalleryPage'
import ContactPage from '../pages/ContactPage/ContactPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;