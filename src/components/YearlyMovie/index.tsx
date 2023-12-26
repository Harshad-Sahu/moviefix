import React from "react";
import ImageGrid from "../ImageGrid";
import { result } from "../../common/constant";
import "./index.scss";

export const YearlyMovie = () => {
  return (
    <div className="yearly-container">
      <div className="year-header">2012</div>
      <div className="yearly-movies">
        <ImageGrid images={result} columnCount={2} rowHeight={250} />
      </div>
    </div>
  );
};
