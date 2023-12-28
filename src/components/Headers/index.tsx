import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MovieFix from "../../Resources/Logo/MovieFlix.svg";
import Search from "../../Resources/Icon/search.svg";
import Cancel from "../../Resources/Icon/Cross.svg";
import "./index.scss";

export const Headers = () => {
  const { searchQuery } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchExpanded, setIsSearchExpanded] = useState(
    location?.pathname === "/" ? false : true
  );
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (location?.pathname !== "/") {
      setInputValue(`${searchQuery}`);
    }
  }, [location, searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Call your method here
      handleEnterPressed();
    }
  };

  const handleEnterPressed = () => {
    if (inputValue?.length) {
      navigate(`/search/${inputValue}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (inputValue?.length) {
      setInputValue("");
    } else {
      setIsSearchExpanded(false);
    }
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
              defaultValue={inputValue}
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
