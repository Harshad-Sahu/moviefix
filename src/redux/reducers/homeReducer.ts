import { HomeState } from "../../types";

const initialState: HomeState = {
  filters: [],
  yearlyMovies: [],
};

const homeReducer = (state = initialState, action: any): HomeState => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filters: action.payload };
    case "SET_YEARLY_DATA":
      return { ...state, yearlyMovies: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
