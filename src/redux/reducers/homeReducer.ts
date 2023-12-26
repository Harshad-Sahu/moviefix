import { HomeState } from "../../types";
import { SET_ACTIVE_FILTER, SET_FILTER_DATA } from "../actions/homeActions";

const initialState: HomeState = {
  filters: [],
  activeFilter: {
    id: 0,
    name: "All",
  },
  yearlyMovies: [],
};

const homeReducer = (state = initialState, action: any): HomeState => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return { ...state, filters: action.payload };
    case SET_ACTIVE_FILTER:
      return { ...state, activeFilter: action?.payload };
    case "SET_YEARLY_DATA":
      return { ...state, yearlyMovies: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
