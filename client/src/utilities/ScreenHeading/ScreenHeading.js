import React from "react";
import "./ScreenHeading.css";

// This is a reusable component. Reuse by passing in different argument
export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>

      {/* If props.subHeading exist, then display it, else display empty */}
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}