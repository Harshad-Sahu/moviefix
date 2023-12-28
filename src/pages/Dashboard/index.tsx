import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Filters,
  Headers,
  Loader,
  YearlyMovie,
  // YearlyMovie,
} from "../../components";
import "./index.scss";
import { resultArrays } from "../../common/constant";
import { API_KEY } from "../../common/apiConfigs";
import { MoviesByYear } from "../../types";
import { SET_YEARLY_MOVIE_DATA } from "../../redux/actions/actions";
import { RootState } from "../../redux/rootReducer";
// import { result } from "../../common/constant";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const moviesByYear = useSelector(
    (state: RootState) => state?.home?.moviesByYear
  );
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState<number[]>([]);
  const [fetchIndex, setFetchIndex] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const currentYear = new Date();
    let yearsVal = [];
    for (let i = 2012; i <= currentYear?.getFullYear(); i++) {
      yearsVal.push(i);
    }
    setYears(yearsVal);

    setTimeout(() => {
      const element = document.querySelector("#dashboard-header");
      const elem = document.querySelector("#dashboard-wrapper");
      if (element && elem) {
        const height = element.clientHeight;
        (elem as HTMLElement).style.paddingTop = `${height + 24}px`;
        (elem as HTMLElement).style.height = `calc(100% - ${height + 24}px)`;
        setScreenHeight(window?.innerHeight - (height + 24));
      }
    }, 350);
  }, []);

  useEffect(() => {
    if (years?.length) {
      fetchYearlyMovieData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [years]);

  const setRowHeight = (index: number, size: number) => {};

  const fetchYearlyMovieData = async () => {
    try {
      const moviesByYear: MoviesByYear = {};
      await Promise.all(
        years?.slice(fetchIndex, fetchIndex + 3).map(async (year) => {
          const url = "https://api.themoviedb.org/3/discover/movie";
          const params = {
            api_key: API_KEY,
            sort_by: "popularity.desc",
            primary_release_year: year,
            page: 1,
            "vote_count.gte": 100,
          };

          const response = await axios.get(url, { params });
          moviesByYear[`${year}`] = response.data.results;
        })
      );
      dispatch({
        type: SET_YEARLY_MOVIE_DATA,
        payload: {
          fetchIndex: fetchIndex,
          data: moviesByYear,
        },
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="fixed-header" id={"dashboard-header"}>
        <Headers />
        <Filters />
      </div>
      <div className="dashboard-wrapper" id="dashboard-wrapper">
        {loading && <Loader height={48} width={48} />}
        {!loading &&
          Object.keys(moviesByYear).length &&
          Object.keys(moviesByYear).map((year: string, index) => {
            console.log("Year:", year);
            console.log("Index:", index);

            return (
              <YearlyMovie
                key={year}
                year={year}
                movieData={moviesByYear[year]}
                index={index}
                setRowHeight={setRowHeight}
              />
            );
          })}
        {/* {!loading && years?.length && (
          <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
            {years?.map((year, index) => {
              return (
                <YearlyMovie
                  key={year}
                  year={`${year}`}
                  movieData={resultArrays[index]}
                  index={index}
                  setRowHeight={setRowHeight}
                />
              );
            })}
          </div>
        )} */}
        {/* {years?.length && (
          <VirtualisedYearlyList screenHeight={screenHeight} years={years} />
        )} */}
      </div>
    </div>
  );
};
