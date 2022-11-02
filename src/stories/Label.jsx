import React from "react";
import "./label.css";

import bus from "./assets/icons/bus.svg";
import time from "./assets/icons/time.svg";
import passengers from "./assets/icons/people2.svg";

export const Label = ({
  variant,
  travelType,
  duration,
  numberOfPassengers,
}) => {
  return (
    <div className="label">
      <div className="label-item type">
        <img src={bus} alt="" />
        <p>{travelType}</p>
      </div>
      <div className="label-item time">
        <img src={time} alt="" />
        <p>{duration}</p>
      </div>
      {variant === "summary" && (
        <div className="label-item passengers">
          <img src={passengers} alt="" />
          <p>{numberOfPassengers}</p>
        </div>
      )}
    </div>
  );
};
