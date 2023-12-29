import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Filters,
  Headers,
  Loader,
  NoData,
  YearlyMovie,
  // YearlyMovie,
} from "../../components";
import "./index.scss";
import { API_KEY } from "../../common/apiConfigs";
import { MoviesByYear } from "../../types";
import { SET_YEARLY_MOVIE_DATA } from "../../redux/actions/actions";
import { RootState } from "../../redux/rootReducer";
import InfiniteScroll from "react-infinite-scroll-component";
// import { result } from "../../common/constant";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const moviesByYear = useSelector(
    (state: RootState) => state?.home?.moviesByYear
  );
  const activeFilter = useSelector(
    (state: RootState) => state?.home?.activeFilter
  );
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState<number[]>([]);
  const [fetchIndex, setFetchIndex] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsVal = Array.from(
      { length: currentYear - 2011 },
      (_, i) => 2012 + i
    );
    setYears(yearsVal);

    setTimeout(() => {
      const element = document.querySelector("#dashboard-header");
      const elem = document.querySelector("#dashboard-wrapper");
      if (element && elem) {
        const height = element.clientHeight;
        (elem as HTMLElement).style.paddingTop = `${height + 24}px`;
        (elem as HTMLElement).style.height = `calc(100% - ${height + 24}px)`;
        // setScreenHeight(window?.innerHeight - (height + 24));
      }
    }, 350);
  }, []);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = 0;
    }
    if (years?.length) {
      if (fetchIndex !== undefined && fetchIndex < 1) {
        setFetchIndex((val) => (val !== undefined ? val - 1 : 0));
      } else {
        setFetchIndex(0);
      }
      setHasMore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, years]);

  useEffect(() => {
    if (fetchIndex !== undefined) {
      fetchYearlyMovieData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchIndex]);

  const setRowHeight = (index: number, size: number) => {};

  const fetchYearlyMovieData = async () => {
    try {
      if (fetchIndex !== undefined) {
        const moviesByYear: MoviesByYear = {};
        await Promise.all(
          years
            ?.slice(
              fetchIndex < 0 ? 0 : fetchIndex,
              (fetchIndex < 0 ? 0 : fetchIndex) + 3
            )
            .map(async (year) => {
              const url = "https://api.themoviedb.org/3/discover/movie";
              const params: Record<string, string | number> = {
                api_key: API_KEY,
                sort_by: "popularity.desc",
                primary_release_year: year,
                page: 1,
                "vote_count.gte": 100,
              };
              if (activeFilter?.name !== "All") {
                params["with_genres"] = activeFilter?.id;
              }

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
        setHasMore(fetchIndex + 3 <= years?.length);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    if (hasMore) {
      setFetchIndex((val) => (val !== undefined ? val + 3 : 0));
    }
  };

  return (
    <div className="dashboard-container">
      <div className="fixed-header" id={"dashboard-header"}>
        <Headers />
        <Filters />
      </div>
      <div
        className="dashboard-wrapper"
        id="dashboard-wrapper"
        ref={scrollableDivRef}
      >
        {loading && <Loader height={48} width={48} />}
        {!loading &&
          (Object.keys(moviesByYear).length ? (
            <InfiniteScroll
              dataLength={Object.keys(moviesByYear).length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loader height={60} width={60} />}
              scrollableTarget="dashboard-wrapper"
            >
              {Object.keys(moviesByYear).map((year: string, index) => {
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
            </InfiniteScroll>
          ) : (
            <NoData />
          ))}
      </div>
    </div>
  );
};
