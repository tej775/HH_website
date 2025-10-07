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
import HealthCare from './components/departments/HealthCare';
import InnovativeAndInformative from './components/departments/InnovativeAndInformative';
import InternalCare from './components/departments/InternalCare';
import OutsideCharity from './components/departments/OutsideCharity';
import PublicRelations from './components/departments/PublicRelations';

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
         <Route path="/healthCare" element={<HealthCare/>}/>
         <Route path="/innovativeAndInformative" element={<InnovativeAndInformative/>}/>
          <Route path="/internalCare" element={<InternalCare/>}/>
          <Route path="/outsideCharity" element={<OutsideCharity/>}/>
          <Route path="/publicRelations" element={<PublicRelations/>}/>
         
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
