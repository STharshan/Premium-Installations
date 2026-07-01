import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/:studyId" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
