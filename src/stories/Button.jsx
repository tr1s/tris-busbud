import React from "react";
import buttonArrow from "./assets/icons/button-arrow.svg";
import buttonArrowLightBlue from "./assets/icons/button-arrow-light-blue.svg";
import buttonArrowBlue from "./assets/icons/button-arrow-blue.svg";
// import PropTypes from 'prop-types';
import "./button.css";

export const Button = ({ text, variant }) => {
  if (variant === "sellable") {
    return (
      <button className={`button ${variant === "sellable" && "sellable"}`}>
        {text} <img src={buttonArrowLightBlue} alt="" />
      </button>
    );
  }
  if (variant === "summary") {
    return (
      <button className={`button ${variant === "summary" && "summary"}`}>
        {text} <img src={buttonArrow} alt="" />
      </button>
    );
  }
  if (variant === "topPanel") {
    return (
      <button className={`button ${variant === "topPanel" && "top-panel"}`}>
        {text} <img src={buttonArrowLightBlue} alt="" />
      </button>
    );
  }
  if (variant === "bottomPanel") {
    return (
      <button
        className={`button ${variant === "bottomPanel" && "bottom-panel"}`}
      >
        {text} <img src={buttonArrowBlue} alt="" />
      </button>
    );
  }
  return;
};
