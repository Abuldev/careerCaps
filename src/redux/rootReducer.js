import { combineReducers } from "redux";
import jobsReducers, { allDataReducers, questionsReducers } from "./reducers";

const rootReducer = combineReducers({
  jobsData: jobsReducers,
  questionsData: questionsReducers,
  allDatas: allDataReducers
});

export default rootReducer;
