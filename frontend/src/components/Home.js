import React, { useState, useEffect,useRef } from "react";
import "./HomePage.css"; // Move CSS there if you want

const images = [{
    image:"../images/carousal_image2.jpg",
    caption:"Inauguration of Mega Eye Camp with Ashwani Foundation"},
    {image:"../images/carousal_image_1.jpeg",
     caption:"Cloth Donation Camp in Yanadi Colony",
    },
    {image:"../images/carousal_image2.jpg",
        caption:"Inauguration of Mega Eye Camp with Ashwani Foundation"
    } 
];

export default function Home() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(null);
  const testimonials = [
    {
    content:"I'm deeply thankful to Helping Hands RGUKT-Nuzvid for their generous support after my train accident. Their contribution of Rs. 1,45,328/- covered my medical expenses and provided crucial support during my recovery. Thank you for being there for me in my time of need; your assistance and compassion mean the world to me.",
    by:"Student Help 2014"
  },{
    content:"I am deeply thankful to Helping Hands RGUKT-Nuzvid for their generous support during a tough time. Their financial help of 2.3 lakh rupees enabled me to undergo crucial hand surgery during my engineering studies, restoring my ability to use my hand fully. Their kindness gave me hope and determination, changing my life and allowing me to pursue my dreams.",
    by:"Student Help 2015"
  },
  {
    content:"I'm profoundly grateful to Helping Hands RGUKT-Nuzvid for their generous support during my kidney transplantation. Their Rs. 1,00,000/- contribution significantly eased my medical expenses and provided immense relief during a challenging time. Thank you for your unwavering support and compassion; I will always cherish your help.",
    by:"Faculty Help 2015"
  },
  {
    content:"I am deeply grateful to Helping Hands RGUKT-Nuzvid for their generous support during a difficult time. Their Rs. 60,000 contribution covered a significant portion of my medical expenses after a hostel fall, allowing me to focus on recovery. Thank you for your kindness and compassion; you've been a beacon of hope for me and my family.",
    by:"Student Help 2017"
  },
  {
    content:"I'm a student of RGUKT-Nuzvid from the 2009 batch. I'm thankful to Helping Hands for contributing Rs. 46,046/- towards my treatment. In 2019, I faced complete kidney failure, and the treatment costs seemed insurmountable. Thanks to Helping Hands and additional donors they rallied, my surgery was successful, and I fully recovered. I'm deeply grateful for their financial support .",
    by:"Student Help 2019"
  },
  
]

const workflow = [
    {
        image:"../images/buildingteam.png",
        content:"Building Strong Team"
    },
    {
        image:"../images/fund_raising.png",
        content:"Fund Raising"
    },
    {
        image:"../images/Help.png",
        content:"Helping Needy"
    }
]

const recoginitions = [
    {
        image:"../images/globe.png",
        content:"HH Lockdown",
        file_link:""
    },
    {
        image:"../images/rescue.png",
        content:"Kerala Floods Acknowledgment",
        file_link:""
    },
    {
        image:"../images/12a.png",
        content:"12A Registration",
        file_link:""
    }
]
   
  
  

  const leftIndex = (centerIndex - 1 + images.length) % images.length;
  const rightIndex = (centerIndex + 1) % images.length;

  const nextImage = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    setAutoScroll(interval);
    return () => clearInterval(interval);
  }, []);

  const resetAutoScroll = () => {
    if (autoScroll) clearInterval(autoScroll);
    const interval = setInterval(nextImage, 2000);
    setAutoScroll(interval);
  };
  //Snap sh

  return (
    <div id="fullpage" className="px-3 px-md-5">
     <section className="carousel1"> 
    <div id="carousel-container">
      <div id="carousel">
        <div className="img-wrapper left-image">
          <img src={images[leftIndex].image} alt="left" />
          <div className="caption">{images[leftIndex].caption}</div>
        </div>
        <div className="img-wrapper center-image">
          <img src={images[centerIndex].image} alt="center" />
          <div className="caption">{images[centerIndex].caption}</div>
        </div>
        <div className="img-wrapper right-image">
          <img src={images[rightIndex].image} alt="right" />
          <div className="caption">{images[rightIndex].caption}</div>
        </div>
       
      </div>

      <button
        className="arrow-btn arrow-left"
        onClick={() => {
          prevImage();
          resetAutoScroll();
        }}
      >
        &#8592;
      </button>

      <button
        className="arrow-btn arrow-right"
        onClick={() => {
          nextImage();
          resetAutoScroll();
        }}
      >
        &#8594;
      </button>
    </div>
  </section>  
 <div className="second">
    <section className="section p-md-3" id="welcome-section">
        <div className="d-flex align-items-center gap-1 heading" style={{color:"#7f1d1d"}}><img src="../images/hhlogo.png" alt="" height="50px" width="50px"/>
        <h3>Welcome to Helping Hands</h3></div>
        
        <div className="content">
            <p>Helping Hands is a vibrant and dedicated student body committed to empowering our fellow students and building a strong sense of community at RGUKT. Our mission is to extend a helping hand to every student, fostering unity, empathy, and support throughout our campus.</p>
            <p>Whether you're facing academic challenges, seeking guidance on personal matters, or simply looking for a friendly face, Helping Hands is here for you. Our diverse team of compassionate individuals is dedicated to creating a nurturing environment where every student feels valued and supported on their journey through RGUKT.</p>
            <p>Explore our website to discover the various resources, programs, and events we offer. From study groups and mentorship programs to community outreach initiatives, we strive to enhance your overall experience at RGUKT by promoting collaboration, kindness, and personal growth. Get involved, connect with your peers, and let's create a stronger, more united RGUKT together. Welcome to Helping Hands — where every student matters and no one walks alone.</p>

        </div>
    </section>
    <section className="workflow p-md-4">
        <h3 className="text-center" style={{color:"#7f1d1d"}}>Our Workflow</h3>
        <div className="card-group">
            {
                workflow.map((item,index)=>{
                    return(
                        <div key={index} className="card justify-content-center align-items-center py-4 border rounded">
    <img src={`${item.image}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>{item.content}</h5>
     
    </div>
  </div>
                    )
                })
            }
</div>
       
        </section>
     <section className="recognitions">
        <h3 className="text-center" style={{color:"#7f1d1d"}}>Recognitions</h3>
         <div className="card-group">
             {
                recoginitions.map((item,index)=>{
                    return(
                        <a key={index} href="/files/lockdown.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none shadow1">
                        <div className="card justify-content-center align-items-center py-4 h-100">
    <img src={`${item.image}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>{item.content}</h5>
     
    </div>
  </div></a>
                    )
                })
            }</div>
       
       
        </section>
    <section className="testimonials">
          <h3 className="text-center" style={{color:"#7f1d1d"}}>Testimonials</h3>

        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    { testimonials.map((item,index) => {
        return(
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} style={{marginRight:"0px"}}>
        <div className="card ">
  <div className="card-body">
    <p className="card-text">{item.content}
    </p>
 
    <p className="card-text"><small  style={{color:"#7f1d1d"}}>{item.by}</small></p>
</div> </div>
    </div> 
        )
     })}
 
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></section>
<section className="donate">
    <p className="fw-bold text-center" style={{fontSize:"25px"}}><quote>" A helping hand costs nothing,but it make a priceless impact on the world. "</quote></p>
    <button type="button" className="btn" style={{ padding: "10px 30px",
  borderRadius:"50px",
  border: "none",             
  backgroundColor:"#7f1d1d",
  margin:"0 auto",
  display:"block",
  color:"white",
  fontSize:"20px",
  cursor:"pointer",
  fontWeight:"600px !important",
  transition:"background-color 0.3s",}}>Donate Us</button></section>
  </div></div>
  
    
  );
}
