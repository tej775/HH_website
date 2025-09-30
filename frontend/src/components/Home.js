import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // icons
import './HomePage.css';


const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="carousel-container" className="position-relative">
        <div id="carousel">
          <img src="../images/carousal_image2.jpg" alt="left" className="left-image" />
          <img src="../images/carousal_image_1.jpeg" alt="center" className="center-image" />
          <img src="../images/carousal_image2.jpg" alt="right" className="right-image" />
        </div>
        <button className="arrow-btn arrow-left">&#8592;</button>
        <button className="arrow-btn arrow-right">&#8594;</button>
      </div>

      {/* About Us Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Helping Hands is a student-volunteer organization committed to the welfare of the student community in RGUKT-Nuzvid. We aim to support students in need through various initiatives and activities.
            </p>
          </Col>
          <Col md={6}>
            <img src="about_us_image.jpg" alt="About Us" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Our Initiatives Section */}
      <Container className="my-5">
        <h2>Our Initiatives</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Health Camps</Card.Title>
                <Card.Text>
                  We organize regular health and eye camps to raise awareness and provide medical assistance to students.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Blood Donation Drives</Card.Title>
                <Card.Text>
                  Collaborating with community organizations, we facilitate blood donation drives to save lives.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Financial Assistance</Card.Title>
                <Card.Text>
                  We provide financial support to students facing health-related challenges and emergencies.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Us Section */}
      <Container className="my-5">
        <h2>Contact Us</h2>
        <Row>
          <Col md={4}>
            <p><FaPhoneAlt /> +91 7981937656</p>
            <p><FaEnvelope /> hho@rguktong.ac.in</p>
            <p><FaMapMarkerAlt /> RGUKT Ongole, Santhanutalapadu, Andhra Pradesh</p>
          </Col>
          <Col md={8}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
