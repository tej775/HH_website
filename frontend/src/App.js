import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Gallery from './components/Gallery';
import Team from './components/Team';

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Define routes for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/certificate" element={<Certificate />} />
         <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/ourTeam" element={<Team/>}/>
         
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
