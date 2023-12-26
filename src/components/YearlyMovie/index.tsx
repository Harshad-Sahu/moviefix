import React from "react";
import "./index.scss";
import LazyLoadedImage from "../ImageGrid/LazyLoadedImage";
import { YearlyMoviesProps } from "../../types";

export const YearlyMovie: React.FC<YearlyMoviesProps> = ({
  year,
  movieData,
}) => {
  return (
    <div className="yearly-container">
      <div className="year-header">{year}</div>
      <div className="yearly-movies">
        {movieData?.length &&
          movieData?.map((movie) => {
            return (
              <LazyLoadedImage
                key={`${year}-${movie?.id}`}
                alt={`Image ${movie?.id}`}
                // Here we are calculating height of image dynamically for mobile view.
                // Here we are subtracting padding plus gap from width, and divide by two
                // as we want to display two posters.
                height={((window.innerWidth - 52) / 2) * 1.5}
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              />
            );
          })}
      </div>
    </div>
  );
};