import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MovieFix from "../../Resources/Logo/MovieFlix.svg";
import Search from "../../Resources/Icon/search.svg";
import Cancel from "../../Resources/Icon/Cross.svg";
import "./index.scss";
import { HeadersProps } from "../../types";
import useDebounce from "../../customHooks/useDebounce";

export const Headers: React.FC<HeadersProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchExpanded = location?.pathname === "/search" ? true : false;
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedInputValue);
    }
  }, [debouncedInputValue, onSearch]);

  useEffect(() => {
    if (location?.pathname === "/search") {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [location.pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchIconClick = () => {
    navigate(`/search`);
  };

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (inputValue?.length) {
      setInputValue("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current) {
        inputRef.current.blur();
      }
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
              placeholder="Search movie by name"
              className="search-input"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
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
