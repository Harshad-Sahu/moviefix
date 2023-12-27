import React, { useState } from "react";
import MovieFix from "../../Resources/Logo/MovieFlix.svg";
import Search from "../../Resources/Icon/search.svg";
import Cancel from "../../Resources/Icon/Cross.svg";

import "./index.scss";
export const Headers = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Call your method here
      handleEnterPressed();
    }
  };

  const handleEnterPressed = () => {
    // Your method logic goes here
    console.log("Enter key pressed! Value:", inputValue);
    // Reset or clear the input value if needed
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
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
              onChange={handleChange}
              onKeyDown={handleKeyDown}
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
