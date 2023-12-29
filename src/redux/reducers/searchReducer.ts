import { SearchState } from "../../types";
import { SET_SEARCH_DATA } from "../actions/actions";

const initialState: SearchState = {
  searchData: [],
};

const searchReducer = (state = initialState, action: any): SearchState => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
