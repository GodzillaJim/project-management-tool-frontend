import { combineReducers } from "redux";
import { getProjectsReducers } from "./projectReducers";

const reducers = combineReducers({
  getAllProjects: getProjectsReducers,
});
export default reducers;
