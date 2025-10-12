import Contact from './components/Contact';
import './App.css';
import AboutUs from './components/AboutUs';
import Certificate from './components/Certificate';
import HealthCare from './components/departments/HealthCare';
import InnovativeAndInfomative from './components/departments/InnovativeAndInformative';
import InternalCare from './components/departments/InternalCare';
import OutsideCharity from './components/departments/OutsideCharity';
import PublicRelations from './components/departments/PublicRelations';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Team from './components/Team';
import Gallery from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
    <Navbar>
        </Navbar>
          <Home></Home>
        <Footer></Footer></BrowserRouter>
  
    
    


  );
}

export default App;

