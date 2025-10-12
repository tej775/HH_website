import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const events = [
    {
      img: "https://images.unsplash.com/photo-1576765608866-5b5104443213?q=80&w=1740&auto=format&fit=crop",
      date: { day: '15', month: 'OCT' },
      title: 'Community Health Workshop',
      desc: 'Join us for an interactive session on preventive health care and wellness tips for families in need.',
      fullDate: 'October 15, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Community Center, Downtown'
    },
    {
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop",
      date: { day: '05', month: 'NOV' },
      title: 'Annual Food Drive',
      desc: 'Help us collect and distribute essential food items to underprivileged communities across the city.',
      fullDate: 'November 5, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Central Park'
    },
    {
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1740&auto=format&fit=crop",
      date: { day: '10', month: 'DEC' },
      title: 'Youth Education Seminar',
      desc: 'Empowering young minds through workshops on digital literacy, skill development, and career guidance.',
      fullDate: 'December 10, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Local Library Hall'
    },
    {
      img: "https://images.unsplash.com/photo-1608272580691-232a4e237f3a?q=80&w=1740&auto=format&fit=crop",
      date: { day: '20', month: 'JAN' },
      title: 'Volunteer Appreciation Day',
      desc: 'A special day to celebrate our dedicated volunteers with fun activities, awards, training, and networking.',
      fullDate: 'January 20, 2026',
      time: '11:00 AM - 3:00 PM',
      location: 'NGO Headquarters'
    }
  ];

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <header className="hh-header-top">
        <h1>HELPING HANDS</h1>
        <h2>RGUKT-NUZVID</h2>
        <p><strong>A Students's Initiative- An Abode of Service</strong></p>
        <div className="hh-reg">(Regd No. 313/2019 under the A.P. Societies Registration Act, 2001)</div>
      </header>

      <nav className="navbar navbar-expand-lg hh-navbar sticky-top">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="hhNavbarNav">
            <img src="/logo.jpg" alt="Logo" className="navbar-logo" />
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Departments</a></li>
              <li className="nav-item"><a className="nav-link" href="#">People</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Certificate</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Join us</a></li>
            </ul>
            <button className="donate-btn">Donate Us</button>
          </div>
        </div>
      </nav>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {events.map((event, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card shadow-sm h-100 event-card">
                  <img src={event.img} className="card-img-top" alt={event.title} />
                  <div className="card-body d-flex flex-column pt-4">
                    <div className="event-date"><span>{event.date.day}</span>{event.date.month}</div>
                    <h5 className="card-title mt-3" style={{color:'#8B2323'}}>{event.title}</h5>
                    <p className="card-text flex-grow-1">{event.desc}</p>
                    <button className="btn btn-outline-danger w-100 mt-auto rounded-pill" onClick={() => handleViewDetails(event)}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="hh-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start">
              <h5>Helping Hands</h5>
              <div className="hh-desc">
                A student-volunteer organization committed to the welfare of the student community in RGUKT-Nuzvid, serving rural youth since 2009.
              </div>
            </div>
            <div className="col-md-6 text-start">
              <h5>Office</h5>
              <ul className="hh-contact-list">
                <li><i className="fa fa-location-dot"></i> RGUKT-Nuzvid Campus, Nuzvid, Krishna District, Andhra Pradesh - 521201</li>
                <li><i className="fa fa-envelope"></i> helpinghands@rgukt.ac.in</li>
                <li><i className="fa fa-phone"></i> +91 98765 43210</li>
              </ul>
              <h5>Follow Us</h5>
              <div className="social-links mb-2">
                <a href="https://www.instagram.com/helpinghands_rguktn/#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.whatsapp.com/channel/0029VahYAYdEgGfNOxdJXH2u" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a href="https://x.com/HH_RguktN" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/rgukthelpinghands" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center hh-copyright mt-3">
            &copy; 2025 Helping Hands - RGUKT Nuzvid. All rights reserved.
          </div>
        </div>
      </footer>

      {showModal && selectedEvent && (
        <>
          <div className="modal-backdrop show" onClick={closeModal}></div>
          <div className="modal fade show" style={{display: 'block'}} tabIndex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: '#8B2323', color: 'white'}}>
                  <h5 className="modal-title" id="eventModalLabel">Event Details</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h3 style={{color:'#8B2323'}}>{selectedEvent.title}</h3>
                  <p>{selectedEvent.desc}</p>
                  <hr />
                  <p><i className="fa fa-calendar-alt me-2 text-muted"></i><strong>{selectedEvent.fullDate}</strong></p>
                  <p><i className="fa fa-clock me-2 text-muted"></i><strong>{selectedEvent.time}</strong></p>
                  <p><i className="fa fa-map-marker-alt me-2 text-muted"></i><strong>{selectedEvent.location}</strong></p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
