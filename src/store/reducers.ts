import { combineReducers } from "@reduxjs/toolkit";

import learnReducer from "./learn/reducers";

const rootReducer = combineReducers({
  learn: learnReducer,
});

export default rootReducer;
