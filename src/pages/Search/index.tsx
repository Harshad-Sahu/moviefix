import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router";
import { Headers, VirtualisedGridSearch } from "../../components";
import { API_KEY, SEARCH_ENDPOINT } from "../../common/apiConfigs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { SET_SEARCH_DATA } from "../../redux/actions/actions";
import "./index.scss";
import LazyLoadedImage from "../../components/ImageGrid/LazyLoadedImage";

export const Search = () => {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const searchData = useSelector((state: RootState) => state.search.searchData);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    try {
      const res = await axios.get(
        `${SEARCH_ENDPOINT}?api_key=${API_KEY}&page=${page}&query=${searchQuery}`
      );
      dispatch({
        type: SET_SEARCH_DATA,
        payload: [...searchData, ...res?.data?.results],
      });
      setHasMore(res?.data?.results.length === 20);
      setPage(page + 1);
    } catch (error) {}
  };

  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector("#searchbox-header");
      const elem = document.querySelector("#searchbox-wrapper");
      if (element && elem) {
        const height = element.clientHeight;
        (elem as HTMLElement).style.paddingTop = `${height + 24}px`;
        (elem as HTMLElement).style.height = `calc(100% - ${height + 24}px)`;
      }
    }, 350);
  }, []);

  // Fetch initial data
  useEffect(() => {
    fetchMoreData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="searchbox-container">
      <div className="fixed-header" id={"searchbox-header"}>
        <Headers />
      </div>
      <div className="searchbox-wrapper search-div" id="searchbox-wrapper">
        <InfiniteScroll
          dataLength={searchData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="searchbox-wrapper"
        >
          <div className="search-grid">
            {searchData?.map((item) => {
              return (
                <div key={`${item?.id}`}>
                  <LazyLoadedImage
                    alt={`Image ${item?.id}`}
                    height={((window.innerWidth - 52) / 2) * 1.5}
                    src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                  />
                  <div className="title">{item?.original_title}</div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
