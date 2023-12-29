import { HomeState } from "../../types";
import {
  SET_ACTIVE_FILTER,
  SET_FILTER_DATA,
  SET_YEARLY_MOVIE_DATA,
} from "../actions/actions";

const initialState: HomeState = {
  filters: [],
  activeFilter: {
    id: 0,
    name: "All",
  },
  moviesByYear: {},
};

const homeReducer = (state = initialState, action: any): HomeState => {
  switch (action.type) {
    case SET_FILTER_DATA:
      return { ...state, filters: action.payload };
    case SET_ACTIVE_FILTER:
      return { ...state, activeFilter: action?.payload };
    case SET_YEARLY_MOVIE_DATA:
      const { fetchIndex, data } = action?.payload;
      return {
        ...state,
        moviesByYear:
          fetchIndex === 0 ? data : { ...state?.moviesByYear, ...data },
      };
    default:
      return state;
  }
};

export default homeReducer;
