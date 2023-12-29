import React from "react";
import { getGenreNames, getGridAsPerScreen } from "../../common/method";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import LazyLoadedImage from "./LazyLoadedImage";
import { ImageGridProps } from "../../types";
import "./index.scss";

export const ImageGrid: React.FC<ImageGridProps> = ({ movie }) => {
  const filterData = useSelector((state: RootState) => state.home.filters);

  return (
    <div className="movie-wrap">
      <div style={{ marginBottom: 8 }}>
        <LazyLoadedImage
          alt={`Image ${movie?.id}`}
          // Here we are calculating height of image dynamically for mobile view.
          // Here we are subtracting padding plus gap from width, and divide by two
          // as we want to display two posters.
          height={((window.innerWidth - 52) / getGridAsPerScreen()) * 1.5}
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        />
      </div>
      <div className="title-movie">{movie?.original_title}</div>
      <div className="rating-wrapper">
        <img
          width="12"
          height="12"
          src="https://img.icons8.com/fluency/48/filled-star.png"
          alt="filled-star"
        />
        <span className="rating">
          {movie?.vote_average?.toFixed(2) || "N/A"}
        </span>
      </div>
      <div className="movieDetails">
        <div className="genre-wrapper">
          <div className="filter-head">Filters: </div>
          <div className="filters">
            {getGenreNames(filterData, movie?.genre_ids)}
          </div>
        </div>
        <div className="movie-bio">{movie?.overview}</div>
      </div>
    </div>
  );
};
