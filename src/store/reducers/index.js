import { combineReducers } from 'redux'
import { addProjectReducer, getProjectsReducers } from './projectReducers'

const reducers = combineReducers({
  getAllProjects: getProjectsReducers,
  addProject: addProjectReducer
})
export default reducers
