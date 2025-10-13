import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AdminDashboard from './adminPortal/AdminDashboard';
import AdminLogin from './adminPortal/adminLOgin';
import ProtectedRoute from './components/ProtectedRoute';
import Events from './components/Events';
import Donation from './components/Donation';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/admin-login';

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourTeam" element={<Team />} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/donateUs" element={<Donation/>}/>
        <Route path="/healthCare" element={<HealthCare />} />
        <Route path="/innovativeAndInformative" element={<InnovativeAndInformative />} />
        <Route path="/internalCare" element={<InternalCare />} />
        <Route path="/outsideCharity" element={<OutsideCharity />} />
        <Route path="/publicRelations" element={<PublicRelations />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
