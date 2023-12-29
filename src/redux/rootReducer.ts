// src/rootReducer.ts

import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
