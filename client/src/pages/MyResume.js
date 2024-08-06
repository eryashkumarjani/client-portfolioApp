import transition from "../transition";
import { motion } from "framer-motion";
import "./MyResume.scss";

function MyResume() {
  return (
    <motion.div
      id="scrollbar"
      className="Resume"
      initial={{ y: "60px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0, ease: "easeInOut" }}
      exit={{
        y: "-60px",
        opacity: 0,
        transition: { duration: 0.25, delay: 0, ease: "easeInOut" },
      }}
    >
      <div className="Resume-container">
        <div className="Resume-Heading">
          <img
            src={process.env.PUBLIC_URL + "/myresume.png"}
            className="Home-Logo"
            alt="logo"
          />{" "}
          <h1>My Resume </h1>
        </div>
        <div className="Resume-row">
          <div className="Resume-Profile">
            <h3>Profile</h3>
            <p>
              I am a qualified and professional Front-end developer with 6+
              years of experience. Motivated and enthusiastic MERN stack
              developer seeking an entry-level position to utilize my skills in
              developing dynamic web applications using MongoDB, Express.js,
              React.js, and Node.js. Eager to contribute to a collaborative team
              environment and continue learning and growing in the field of web
              development.
            </p>
          </div>
          <div className="Resume-Education">
            <h3>Education</h3>
            <ul>
              <li>
                DIPLOMA IN ENGINEERING
                <ul>
                  <li>
                    Nirma University
                    <ul>
                      <li>2011 - 2014</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                BACHELOR OF ENGINEERING
                <ul>
                  <li>
                    Gujarat University
                    <ul>
                      <li>2014 - 2017</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="Resume-Skills">
          <h3>Skills</h3>
          <div className="Resume-Skills-Container">
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/git.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Git</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/figma.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Figma</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/html5.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Html5</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/css3.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Css3</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/javascript.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>JavaScript</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/bootstrap.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Bootstrap5</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/scss.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Scss</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/angular.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Angular</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/tailwindcss.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Tailwind css</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/reactjs.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>React js</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/antdesign.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Ant Design</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/nodejs.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Node js</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/mongodb.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>MongoDB</label>
            </div>
            <div className="Resume-Skills-Content">
              <img
                src={process.env.PUBLIC_URL + "/firebase.svg"}
                className="Home-Logo"
                alt="logo"
              />
              <label>Firebase</label>
            </div>
          </div>
        </div>
        <div className="Resume-row">
          <div className="Resume-Certificate">
            <h3>Certificate</h3>
            <p>Microsoft Certified :- Azure Fundamentals (AZ-900)</p>
          </div>
          <div className="Resume-Experience">
            <h3>Experience</h3>
            <ul>
              <li>STUDENT TRAINEE - MERN STACK DEVELOPER</li>
              <li>Pesto Tech</li>
              <li>2022 - Present</li>
              <li>
                PROJECT:-
                <ul>
                  <li>VisionApp:-</li>
                  <ul>
                    <li>
                      I have utilized FIGMA to design the wireframes, developed
                      the Project Requirements Document (PRD), and crafted the
                      High-Level Design (HLD) documents for the project as well.
                    </li>
                    <li>
                      Designed and developed a Vision App website using
                      React.js.
                    </li>
                    <li>
                      Implemented user authentication using Firebase
                      Authentication.
                    </li>
                    <li>
                      Utilized Redux for state management to maintain
                      application-wide data consistency.
                    </li>
                    <li>
                      Built an Application with CRUD operations for tasks using
                      React and Node.js.
                    </li>
                    <li>
                      Deployed the website using Netlify for front-end, Render
                      for back-end and MongoDB Atlas for database hosting.
                    </li>
                    <li>
                      Utilized responsive design principles to ensure
                      compatibility across devices.
                    </li>
                    <li>
                      Designed a user-friendly interface with intuitive
                      navigation for seamless user experience.
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
            <ul>
              <li>FRONT END DEVELOPER - REACT</li>
              <li>Wipro</li>
              <li>2021 - Present</li>
              <li>PROJECT:-</li>
              <li>
                I have worked on several React projects from scratch and I’ve
                also worked on smaller Angular projects related to migration
                only
              </li>
              <ul>
                <li>
                  EDRT :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  3SCU :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  EDM :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  1EEMS :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  UFA :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  1EXC :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </ul>
            <ul>
              <li>FRONT END DEVELOPER - ANGULAR</li>
              <li>Expinn Technologies</li>
              <li>2019 - 2021</li>
              <li>PROJECT:-</li>
              <li>
                I have worked on several Angular projects at a beginner level,
                and I have also contributed to web development initiatives.
              </li>
              <ul>
                <li>
                  EDRT :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  3SCU :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  EDM :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  1EEMS :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  UFA :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>React js, Bootstrap, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  1EXC :-
                  <ul>
                    <li>Technologies :-</li>
                    <ul>
                      <li>Angular 14, Angular Material, Scss, Html5</li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </ul>
            <ul>
              <li>FRONT END DEVELOPER - WEB DEVELOPMENT</li>
              <li>Infiniteworx Omnichannel Pvt. Ltd.</li>
              <li>2017 - 2019</li>
              <li>PROJECT:-</li>
              <li>
                As a web developer, I have experience building websites from
                scratch using only HTML and CSS. Additionally, I have developed
                websites using Bootstrap 5.
              </li>
              <li>Note :- MRW means My Retail Worx Product</li>
              <ul>
                <li>MRW_AMS - Asset Management system :- </li>
                <li>MRW_Payout_Model :- </li>
                <li>MRW_CRM - Customer relationship management :- </li>
                <li>MRW_Registration :- </li>
                <li>MRW_Invoice_Maker :- </li>
                <li>MRW_OTA_server :- </li>
                <li>MRW_E_Catalog - Discount coupon maker :- </li>
                <li>MRW_MDM - Mobile Device Management :-</li>
                <ul>
                  <li>Technologies :-</li>
                  <ul>
                    <li>Angular 14, Angular Material, Scss, Html5</li>
                  </ul>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="Resume-Download">
          <a
            href={process.env.PUBLIC_URL + "/resume2024.pdf"}
            download="resume2024"
          >
            <button className="Button-Download">Download</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default transition(MyResume);
