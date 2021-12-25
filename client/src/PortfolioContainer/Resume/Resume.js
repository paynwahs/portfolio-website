import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // implement fade in effect and smooth scroll (Subscribe)
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  // resumeBullets is an array of expression {}
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //Labelling programming skills in an array
  //here we have
  const programmingSkillsDetails = [
    { skill: "Selenium Framework", ratingPercentage: 80 },
    { skill: "MERN", ratingPercentage: 70 },
    { skill: "R", ratingPercentage: 80 },
    { skill: "C/ Java", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
  ];

  //Labelling projects in an array
  //Each project consists of title, duration, description and subheading
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "NOV 2021", toDate: "DEC 2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap, NodeJS, HTML, CSS",
    },
    {
      title: "Strategy Consultant",
      duration: { fromDate: "MAY 2021", toDate: "JUL 2021" },
      description:
        "A real-life business challenge done in collaboration with Dutch MNC, DSM, to aid in their expansion into the Chinese market.",
      subHeading: "Technologies Used: Research Databases",
    },
    {
      title: "Stock Picker Machine Learning Project",
      duration: { fromDate: "JAN 2020", toDate: "APR 2020" },
      description:
        "A school project where we used machine learning tools to decide which US stock to invest in.",
      subHeading: "Technologies Used:  Jupyter Notebook, Python",
    },
  ];

  //   Resume details
  //   Built using the minor reusable component ResumeHeading
  //   Labelling and display past education on screen
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Nanyang Technological University"}
        subHeading={"Bachelor of Business (with specialisation in Business Analytics) and Bachelor of Engineering (Computer Science)"}
        fromDate={"2020"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Temasek Junior College"}
        subHeading={"General Certificate of Education Advanced Level"}
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Chung Cheng High School (Main)"}
        subHeading={"General Certificate of Education Ordinary Level"}
        fromDate={"2012"}
        toDate={"2015"}
      />
    </div>,

    /* Labelling and display WORK EXPERIENCE on screen*/
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"F.I.R DIGITAL"}
          subHeading={"SOFTWARE DEVELOPER INTERN"}
          fromDate={"MAY 2021"}
          toDate={"JUL 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Managed 3 end-to-end software development projects from planning to
            deployment
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Created a SaaS product which helps around 15 Financial Advisers
            automate their periodic updates of investment portfolio to their
            client
          </span>
          <br />
          <span className="resume-description-text">
            - Developed a SharePoint Intranet from scratch for an organization
            with 70 million annual revenue
          </span>
          <br />
          <span className="resume-description-text">
            - Worked with Selenium framework, MQL4 & HTML programming, Telegram
            Bot and Cryptocurrency Arbitrage Bot
          </span>
          <br />
        </div>
        <br />
        <ResumeHeading
          heading={"TOFFS TECHNOLOGIES"}
          subHeading={"SOFTWARE DEVELOPER INTERN"}
          fromDate={"FEB 2020"}
          toDate={"JUL 2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked on Qualitative Assurance (QA) testing for their SAAS product
            and APIs
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked on QA Testing for the new TOFFS's SaaS platform which will
            be used by all their clients
          </span>
          <br />
          <span className="resume-description-text">
            - Supported the CI/CD of TOFFS’s SaaS platform
          </span>
          <br />
          <span className="resume-description-text">
            - Worked with NGINX software, Linux, RESTful APIs and various
            website optimization tools
          </span>
          <br />
        </div>
        <br />
        <ResumeHeading
          heading={"NANYANG TECHNOLOGICAL UNIVERSITY"}
          subHeading={"STUDENT TUTOR GROUP (STG) TUTOR"}
          fromDate={"MAY 2021"}
          toDate={"AUG 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Tutor in charge of teaching SC1003 (Introduction to Computational
            Thinking and Programming) to about 30 tutees
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Taught important programming concepts and good practices in C and
            Python
          </span>
          <br />
          <span className="resume-description-text">
            - Conducted weekly tutorial sessions
          </span>
          <br />
        </div>
      </div>
      <div className="contentDiv">
        <img
          className="arrow"
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png"
          alt="B"
        />
      </div>
    </div>,

    /* Mapping through PROGRAMMING SKILLS and display it on screen*/
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Mapping through PROJECTS and display it on screen*/
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Labelling Interests and display it on screen (No need map cause don't have array)*/
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a programmer, I also love to teach people what I know simply because I believe in sharing."
      />
      <ResumeHeading
        heading="Exercising"
        description="I love working out after a long day of coding as I get to stretch my muscles after working my brain the whole day."
      />
      <ResumeHeading
        heading="Gaming"
        description="I like to challenge my reflexes a lot while competing in mobile games, and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  // Define handleCarousell function
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  // Define function to map through resume bullets and display it on the screen
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
