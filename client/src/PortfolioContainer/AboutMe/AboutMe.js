import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "My eye was opened to the wonders and potential of software engineering in 2017. The sweet satisfaction of watching users benefit from the software I create drives me to continuously hone my skills. I enjoy the challenge and am not afraid to learn new things on my own and on the go. A strong professional and willing to be an asset for an organisation.",
    highlights: {
      bullets: [
        "End-to-end Software Development",
        "Full Stack Web Development",
        "Building software to automate tasks",
        "Building Telegram Bot",
        "Sharepoint Development",
      ],
      heading: "Here are a few highlights:",
    },
  };

  //renderHighlight is a function which renders the bullets array to the dom
  const renderHighlight = () => {
    //map function used to iterate over an array, to render the data to the dom. Each iteration value is stored in 'value' and the index is stored in i.
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  //UI
  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        {/* ScreenHeading is the reusable component with 2 key field: title and subheading */}
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""}
                Hire Me{" "}
              </button>
              <a href="ShawnYapCV.pdf" download="Shawn Yap.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
