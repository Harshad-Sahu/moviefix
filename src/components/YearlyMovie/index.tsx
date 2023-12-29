import React, { useEffect, useRef } from "react";
import { YearlyMoviesProps } from "../../types";
import { ImageGrid } from "../ImageGrid";
import "./index.scss";

export const YearlyMovie: React.FC<YearlyMoviesProps> = ({
  year,
  movieData,
  index,
  setRowHeight,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
    // eslint-disable-next-line
  }, [rowRef]);

  return (
    <div
      className="yearly-container"
      id={`yearly-container-${year}`}
      ref={rowRef}
    >
      <div className="year-header">{year}</div>
      <div className="yearly-movies">
        {movieData?.length &&
          movieData?.map((movie) => {
            return (
              <ImageGrid
                movie={movie}
                key={`${year}-${movie?.original_title}-${movie?.id}`}
              />
            );
          })}
      </div>
    </div>
  );
};
