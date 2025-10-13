import React from 'react'
import {useState,useEffect} from 'react'
import "./ImageCarousel.css";

import img1 from "../assets/image.jpg";
import img2 from "../assets/image.jpg";
import img3 from "../assets/image.jpg";

const images = [img1, img2, img3];

const InternalCare = () => {
     const [index, setIndex] = useState(0);
      const [modalData, setModalData] = useState({});
    
      // Auto-slide every 2s
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

       // Sample card data
        const cards = [
          {
            id: 1,
            title: "2013 Mega Blood Donation",
            image: img1,
            shortDesc:
              "Helping Hands conduct blood donation camp which involves organized blood drives...",
            fullDesc:
              "Helping Hands conducted a Mega Blood Donation Camp in 2013 with active participation from students and staff. Hundreds of volunteers came forward, making it one of the most successful donation events in RGUKT history.",
          },
          {
            id: 2,
            title: "Health Awareness Camp",
            image: img2,
            shortDesc: "Organized to promote regular health checkups and fitness awareness...",
            fullDesc:
              "This camp was aimed at promoting the importance of regular medical checkups and a healthy lifestyle. Doctors from reputed hospitals visited the campus and conducted free consultations and health screenings.",
          },
          {
            id: 3,
            title: "Medical Aid Program",
            image: img3,
            shortDesc: "Financial and emotional support to students and staff in need...",
            fullDesc:
              "The Medical Aid Program offers financial support to those who face medical emergencies. It ensures that every student and staff member receives timely medical assistance without any financial burden.",
          },
        ];
      
        const openModal = (card) => {
          setModalData(card);
          const modal = new window.bootstrap.Modal(
            document.getElementById("infoModal")
          );
          modal.show();
        };
    
  return (
   <div>
     <div className=".carousel-containertwo">
      <div className="carousel">
        {images.map((img, i) => {
          let position = "";
          if (i === index) {
            position = "active"; // center
          } else if (i === (index - 1 + images.length) % images.length) {
            position = "left"; // previous
          } else if (i === (index + 1) % images.length) {
            position = "right"; // next
          } else {
            position = "hidden"; // all other images
          }

          return (
            <img
              key={i}
              src={img}
              alt="carousel"
              className={`carousel-img ${position}`}
            />
          );
        })}
      </div>          
    </div>

    <div >
       <h2 className="heading"> Internal Care Department (ICD)</h2>
       <div className="about">
          The Internal Care Department is dedicated to catering to the essential requirements of students with financial constraints, offering travel assistance, and ensuring access to washing machine facilities and specially-designed tricycles for students with disabilities. This department plays a crucial role in supporting the needs of disadvantaged students and ensuring their inclusive participation within the academic community.
       </div>
    </div>

       <div className="quote">
          <h2>"A helping hand costs nothing,<br/> but it can make a
            priceless impact on the world."</h2>

       </div >

      {/* -------- NEW BOOTSTRAP CARDS -------- */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-black fw-bold">Our Contributions</h2>
        <div className="row justify-content-center g-4">
          {cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <div className="card shadow h-100">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.shortDesc}</p>
                  <button
                    className="btn btn-dark mt-auto"
                    onClick={() => openModal(card)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------- MODAL -------- */}
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-black text-white">
              <h5 className="modal-title" id="infoModalLabel">
                {modalData.title}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {modalData.image && (
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="img-fluid rounded mb-3"
                />
              )}
              <p>{modalData.fullDesc}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="quote">
        <h2>
          "A helping hand costs nothing,<br /> but it can make a priceless
          impact on the world."
        </h2>
      </div>

      <br></br>
        
      <div className="btn-container">
        <button className="btnDonate ">Donate Us</button>
      </div>
    </div>
  )
}

export default InternalCare
