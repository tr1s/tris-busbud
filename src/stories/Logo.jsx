import React from "react";

export const Logo = ({ logoImport, altText }) => {
  return <img src={logoImport} className="logo" alt={altText} />;
};
