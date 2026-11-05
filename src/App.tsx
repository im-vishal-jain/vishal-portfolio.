
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Skills */}
        <Route path="/skills" element={<Skills />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Education */}
        <Route path="/education" element={<Education />} />

        {/* Certifications */}
        <Route path="/certifications" element={<Certifications />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Invalid Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
