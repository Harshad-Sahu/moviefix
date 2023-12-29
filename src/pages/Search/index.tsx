import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Headers, Loader } from "../../components";
import { API_KEY, SEARCH_ENDPOINT } from "../../common/apiConfigs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { SET_SEARCH_DATA } from "../../redux/actions/actions";
import "./index.scss";
import LazyLoadedImage from "../../components/ImageGrid/LazyLoadedImage";
import { SEARCH_MESSAGE } from "../../common/constant";

export const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchData = useSelector((state: RootState) => state.search.searchData);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number | undefined>(undefined);

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
    if (searchTerm?.length) {
      setPage((val) => (val !== undefined ? val + 1 : 1));
    } else {
      if (page !== undefined && page < 0) {
        setPage((val) => (val !== undefined ? val - 1 : 0));
      } else {
        setPage(0);
      }
    }
  }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (page !== undefined) {
      fetchData();
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    try {
      const params: Record<string, string | number> = {
        api_key: API_KEY,
        page: page ? (page < 1 ? 1 : page) : 1,
        query: searchTerm,
      };
      const res = await axios.get(SEARCH_ENDPOINT, { params });
      dispatch({
        type: SET_SEARCH_DATA,
        payload:
          page && page <= 1
            ? res?.data?.results
            : [...searchData, ...res?.data?.results],
      });
      setHasMore(res?.data?.results.length === 20);
    } catch (error) {}
  };

  const onSearch = (searchQuery: string) => {
    setSearchTerm(searchQuery);
  };

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((val) => (val !== undefined ? val + 1 : 1));
    }
  };

  return (
    <div className="searchbox-container">
      <div className="fixed-header" id={"searchbox-header"}>
        <Headers onSearch={onSearch} />
      </div>
      <div className="searchbox-wrapper search-div" id="searchbox-wrapper">
        {searchTerm?.length && (
          <InfiniteScroll
            dataLength={searchData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loader height={60} width={60} />}
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
        )}
        {searchTerm?.length === 0 && (
          <div className="serach-mssg-wrapper">
            <img
              alt="Search"
              width={100}
              height={100}
              src="data:image/png;base64,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"
            />
            <div className="search-text">{SEARCH_MESSAGE}</div>
          </div>
        )}
      </div>
    </div>
  );
};
