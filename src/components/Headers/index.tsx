import React from "react";
import MovieFix from "../../Resources/Logo/MovieFlix.svg";
import "./index.scss";

export const Headers = () => {
  return (
    <div className="header-container">
      <img src={MovieFix} alt="MovieFix" className="logo" />
    </div>
  );
};
