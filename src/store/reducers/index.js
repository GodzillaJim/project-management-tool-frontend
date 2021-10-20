import { combineReducers } from 'redux'
import {
  addProjectReducer,
  deleteProjectReducer,
  getProjectsReducers
} from './projectReducers'

const reducers = combineReducers({
  getAllProjects: getProjectsReducers,
  addProject: addProjectReducer,
  deleteProject: deleteProjectReducer
})
export default reducers
