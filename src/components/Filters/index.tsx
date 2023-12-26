import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_KEY, FILTER_ENDPOINT } from "../../common/apiConfigs";
import {
  SET_ACTIVE_FILTER,
  SET_FILTER_DATA,
} from "../../redux/actions/homeActions";
import { RootState } from "../../redux/rootReducer";
import "./index.scss";
import { Filters as FilterType } from "../../types";

export const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state: RootState) => state.home.filters);
  const activeFilter = useSelector(
    (state: RootState) => state.home.activeFilter
  );

  useEffect(() => {
    fetchFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFilterData = async () => {
    try {
      const res = await axios.get(`${FILTER_ENDPOINT}?api_key=${API_KEY}`);
      dispatch({
        type: SET_FILTER_DATA,
        payload: [{ id: 0, name: "All" }, ...res?.data?.genres],
      });
    } catch (error) {}
  };

  const handleFilterChange = (item: FilterType) => {
    dispatch({ type: SET_ACTIVE_FILTER, payload: item });
  };

  return (
    <>
      {filterData?.length && (
        <div className="filter-container">
          {filterData?.map((item) => {
            return (
              <div
                key={item?.id}
                className={`pill-wrapper ${
                  activeFilter?.id === item?.id ? "active" : ""
                }`}
                onClick={() => handleFilterChange(item)}
              >
                <span className="filter-name">{item?.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
