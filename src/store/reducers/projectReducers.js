import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  LOG_OUT
} from '../constants'

export const addProjectReducer = (state = {
  loading: false,
  error: null,
  project: null
}, action) => {
  switch (action.type) {
    case ADD_PROJECT_REQUEST:
      return { ...state, loading: true, error: null, project: null }
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        project: action.payload
      }
    case ADD_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        project: null
      }
    default:
      return state
  }
}

export const getProjectsReducers = (
  state = { loading: false, error: null, projects: null },
  action
) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true, error: null, projects: null }
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projects: action.payload
      }
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        projects: null
      }
    case LOG_OUT:
      return { loading: false, error: null, projects: null }
    default:
      return state
  }
}
