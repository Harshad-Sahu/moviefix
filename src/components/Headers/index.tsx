import React, { useState } from "react";
import MovieFix from "../../Resources/Logo/MovieFlix.svg";
import Search from "../../Resources/Icon/search.svg";
import Cancel from "../../Resources/Icon/Cross.svg";

import "./index.scss";
export const Headers = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsSearchExpanded(false);
  };

  return (
    <div className={`header-container ${isSearchExpanded ? "expanded" : ""}`}>
      <img
        src={MovieFix}
        alt="MovieFix"
        className={`logo ${isSearchExpanded ? "collapsed" : ""}`}
      />
      <div className="search-icon-wrapper" onClick={handleSearchIconClick}>
        <img src={Search} alt="Search" className="search-icon" />
        {isSearchExpanded && (
          <>
            <input
              type="text"
              placeholder="Search movie by name & press enter"
              className="search-input"
            />
            <div className="cancel-wrapper" onClick={handleCancel}>
              <img src={Cancel} alt="MovieFix" className="cancel" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
