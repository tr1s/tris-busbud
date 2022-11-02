import React from "react";
import PropTypes from "prop-types";

import "./_global.css";
import "./card.css";

import { Label } from "./Label";
import { Button } from "./Button";
import { Logo } from "./Logo";

import logo from "./assets/logo.svg";
import wifi from "./assets/icons/wifi.svg";
import people from "./assets/icons/people.svg";
import qr from "./assets/icons/qr.svg";
import hand from "./assets/icons/hand.svg";
import seat from "./assets/icons/seat.svg";
import fork from "./assets/icons/fork.svg";
import veryLongArray from "./assets/icons/verylongarrow.svg";
import lightning from "./assets/icons/lightning.svg";

export const Card = ({ variant }) => {
  return (
    <article
      className={`outer-card ${variant === "topPanel" && "top"} ${
        variant === "bottomPanel" && "bottom"
      }`}
    >
      {variant === "topPanel" && (
        <p className="outer-card-top-content">
          <img src={lightning} alt="" /> <span>Fastest</span>
        </p>
      )}

      <div
        className={`card inner-card ${
          variant === "bottomPanel" && "bottom-panel"
        }`}
      >
        <div className="card-header">
          <Logo logoImport={logo} alt="Greyhound logo." />
          <div className="header-icons-right">
            <img src={wifi} alt="" />
            <img src={people} alt="" />
            <img src={qr} alt="" />
          </div>
        </div>
        <div className="card-destination">
          <div className="travel">
            <p className={`time ${variant === "summary" && "summary"}`}>
              8:00am
            </p>
            {variant === "summary" && <p className="date">Wed, Jul 28</p>}
            <p className={`station ${variant === "summary" && "summary"}`}>
              Port Authority
            </p>
            <p className="city">New York City</p>
            <a href="#" className="map">
              Map
            </a>
          </div>
          <img src={veryLongArray} className="arrow" alt="" />
          <div className="travel">
            <p className={`time ${variant === "summary" && "summary"}`}>
              8:00am
            </p>
            {variant === "summary" && <p className="date">Wed, Jul 28</p>}
            <p className={`station ${variant === "summary" && "summary"}`}>
              Union Station
            </p>
            <p className="city">Washington</p>
            <a href="#" className="map">
              Map
            </a>
          </div>
        </div>
        <div className="card-footer">
          <Label variant={variant} travelType="Bus" duration="4h 30m" />

          {/* Depending on which variant is selected, show the correct action button. */}
          {variant === "sellable" && <Button variant={variant} text="$45" />}
          {variant === "topPanel" && <Button variant={variant} text="$45" />}
          {variant === "summary" && (
            <Button variant={variant} text="Itinerary" />
          )}
          {variant === "bottomPanel" && (
            <p className="multiple-options">Multiple options:</p>
          )}
        </div>
      </div>

      {variant === "bottomPanel" && (
        <div className="outer-card-bottom-content">
          <div className="item">
            <p>Regular</p>
            <Button variant={variant} text="$45" />
          </div>
          <div className="item with-icons">
            <p>
              First-class{" "}
              <span>
                <img src={hand} alt="" />
              </span>
              <span>
                <img src={seat} alt="" />
              </span>
              <span>
                <img src={fork} alt="" />
              </span>
            </p>
            <Button variant={variant} text="$95" />
          </div>
        </div>
      )}
    </article>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(["sellable", "summary", "topPanel", "bottomPanel"]),
};

Card.defaultProps = {
  variant: "sellable",
};
