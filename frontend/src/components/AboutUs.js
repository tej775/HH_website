import React from "react";
import "../App.css";

export default function AboutUs() {
  return (
    <div
      style={{ paddingTop: "180px" }}
      className="d-flex flex-column justify-content-center align-items-center px-3 px-md-5"
    >
      <h1 className="heading_size" style={{ marginBottom: "96px"
      }} >
        A helping hand can be ray of sunshine in a cloudy world
      </h1>
      <div
        className="about_2"
        style={{ marginTop: "15px", width: "100%", maxWidth: "800px",color:"white" }}
      >
        <div className="d-flex position-relative">
          <img
            src="\images\about_us_1.png"
            alt=""
            height="100px"
            width="100px"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translateY(-50%)",
            }}
          />

          <div
            className="p-3 rounded"
            style={{ backgroundColor: "#ffae52", flex: 1, marginLeft: "40px" }}
          >
            <h1 className="ps-md-5 heading_size" style={{color:"#9f1239"}}>Evolution</h1>
            <p>
              Every journey starts with a single step. A student of RGUKT-Nuzvid
              initiated their journey of service in 2009 by establishing a
              foundation, Helping Hands. The pupil with social responsibility,
              noble thoughts, and commitment towards society has evidently
              proven the strength of a rupee. It mainly focuses on the
              well-being of the students from the poor background on the campus.
              This has set a new beginning for many students to let their
              grievances from their lives and stood as an inspiration to
              upcoming generations.
            </p>
          </div>
        </div>
        <div className="d-flex position-relative mt-md-3">
          <img
            src="\images\about_us_2.png"
            alt=""
            height="100px"
            width="100px"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translateY(-50%)",
            }}
          />

          <div
            className="p-3 rounded"
            style={{ backgroundColor: "#eb8aeb", flex: 1, marginLeft: "40px" }}
          >
            <h1 className="ps-md-5 heading_size" style={{color:"#4f46e5"}}>Vision</h1>
            <p>
              We, the students of RGUKT-NUZVID, embark on a path with a single
              destination that leads to one aspiration - build a better society.
              Leadership Skills and Social Responsibility are considered to be
              paramount. Community service enriches students' interpersonal
              skills and helps them evolve into active and real citizens
              responsible for more community building initiatives. We will
              persist in our service, remaining mindful of our vision and
              staying true to our motto.
            </p>
          </div>
        </div>
      </div>
      <h1 className="heading_size mt-md-5" style={{color:"#7f1d1d"}}>Aims and Objectives</h1>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide mt-md-3"
        data-bs-ride="carousel"
        data-bs-wrap="true"
        data-bs-interval="3000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-group gap-md-3">
              <div class="card card-hover-grey bg-white rounded">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#581c87"}}>Daily Needs</h5>
                  <p class="card-text">
                    We extend our valuable services by providing daily needs to
                    the students so as to meet the minimum requirements in the
                    campus, travelling allowances on vacation and providing
                    tricycles and washing machines to the differently-abled
                    students
                  </p>
                </div>
              </div>
              <div class="card border-start card-hover-grey bg-white rounded">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#831843"}}>Financial Support</h5>
                  <p class="card-text">
                    We provide financial support for medical needs and surgeries
                    of the students and staff.
                  </p>
                </div>
              </div>
              <div class="card border-start card-hover-grey bg-white rounded">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#fb923c"}}>Health Awareness</h5>
                  <p class="card-text">
                    In continuation of its endeavour towards service and to
                    bring health awareness among students, we periodically
                    conduct Mega health camps, eye camps in the campus for the
                    welfare of students.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-group gap-md-3">
              <div class="card card-hover-grey bg-white rounded ">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#65a30d"}}>Anniversary Celebration</h5>
                  <p class="card-text">
                    On the eve of Mother Teresa's birthday, we celebrate our
                    anniversary every year to encourage and inspire our students
                    towards the motto of service, to promote our achievements
                    and to plan our future self for its service expansion.
                  </p>
                </div>
              </div>
              <div class="card card-hover-grey bg-white rounded border-start">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#06b6d4"}}>Blood Donation</h5>
                  <p class="card-text">
                    We organize blood donation camps inside the campus in
                    collaboration with other community-level
                    organizations/clubs.
                  </p>
                </div>
              </div>
              <div class="card card-hover-grey bg-white rounded border-end">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"#a21caf"}}>Recruitment of Volunteers</h5>
                  <p class="card-text">
                    To recruit new volunteers to ensure adequate participation
                    by them in achieving the objects of the Society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-md-3 gap-md-2">
        <button
          class="carousel-control-prev btn btn-primary p-2"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{
            position: "relative",
            bottom: "0",
           display:"inline-block",
            color: "black",
            width:"100px",
            opacity:1,
            backgroundColor:"rgba(127, 29, 29, 1)"
          }}
        >
          Previous
        </button>
        <button
          class="carousel-control-next btn btn-primary p-2"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{
            position: "relative",
            bottom: "0",
            display:"inline-block",
            color: "black",
            width:"100px"
          }}
        >
          Next
        </button></div>
      </div>
      <div className="departments">
        <h1>Departments</h1>
        <img src="/images/department.png" alt="" />
      </div>
      <div className="funding_resources">
        <h1>Funding Resources</h1>
        <div
          className="main_content row border"
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/charity.jpg"
            alt="" height="750px" width="750px"
            className="col-md-6 img-fluid "
            style={{
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
            }}
          />
          <div className="col-md-6">
            {" "}
            <p className="charity_para">
              The unique donation based crowdfunding model is the fundamental
              source for running our activities. It collects Rs. 1/- from all
              the students once a week.
            </p>
            <p className="charity_para">
              By selling off the used notebooks by students, newspapers and
              plastic scrap collected from faculty blocks.
            </p>
            <p className="charity_para">
              By placing stalls on the occasions of convocation , technical and
              cultural fests.
            </p>
            <p className="charity_para">
              By raising money from philanthropic individuals
            </p>
            <p className="charity_para">
              Generating Revenue by establishing a GROCERY STORE in the premises
              Faculty quarters of RGUKT NUZVID.
            </p>
          </div>
        </div>
      </div>
      <div className="organs d-flex flex-column">
        <h1>ORGANS OF SOCIETY</h1>
        <img src="/images/org.png" alt="" />
        <h1>Executive Committee Responsibilities</h1>
        <p>
          The Executive authority of the association shall be vested in the
          Executive Committee(EC). The EC members are responsible for overseeing
          the departments and they also have the power to make necessary rules
          and regulations subjected to the provisions of the constitution with
          2/3rd majority deciding the result.
        </p>
        <ul>
          <li>PRESIDENT (FACULTY )</li>
          <li>VICE-PRESIDENT (Student)</li>
          <li>GENERAL SECRETARY (Faculty)</li>
          <li>TREASURER (Faculty)</li>
          <li>3 JOINT SECRETARIES (Faculty)</li>
          <li>JOINT TREASURER (Student)</li>
          <li>10 EXECUTIVE COMMITTEE MEMBERS (Students)</li>
        </ul>
        <div>
          The Executive Committee shall consist of 18 members, i.e., President ,Vice President, Treasurer, Secretary and 10 Executive Committee members. Any interim vacancy in the Executive Committee shall be filled up by the Committee itself. A member who has completed his term as an elected member is eligible for Re-election as a member of the Committee.<br/>
          The Executive Committee may meet as often as necessary. The meeting shall contain the proposed agenda and the reasons for such a meeting.<br/>
          Each member of the Executive Committee shall have one vote and any proposed matter can be finalized by the Executive Committee with the 2/3rd majority of the voting.<br/>
          Every resolution of the Executive Committee meeting shall be recorded in the minute book. Such minutes shall be communicated to members invited for meeting as early as possible.<br/>
          The affairs and funds of the Society shall be managed, administered and controlled subject to rules/bye-laws and the orders/directions of the Society, by the Executive Committee.<br/>
         
        </div>
      </div>
      <div className="selection">
        <img src="/images/volunteer.png" alt="" />
        <h1>Volunteers</h1>
        <h1>RGUKT Nuzvid Organization</h1>
        <div>
            <p>
              <h5>Executive Committe</h5>
              <p>Includes students and faculty</p>
            </p>
            <p>Branch/Floor Level Representatives</p>
            <p>Class Level Representatives(HR)</p>
        </div>
      </div>
    </div>
  );
}
