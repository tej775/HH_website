import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home'; // optional, create a Home component if you want a home page
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home page route */}
        <Route path="/about" element={<AboutUs />} /> {/* AboutUs page route */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
       <main style={{ flexGrow: 1 }}>
   
       </main>
             <Footer />
      </div>

    </Router>
  );
}

export default App;
