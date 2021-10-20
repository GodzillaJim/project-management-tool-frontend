import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_RESET,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_RESET,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  LOG_OUT
} from '../constants'

export const deleteProjectReducer = (state = {
  error: null,
  loading: false,
  success: null
}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return { ...state, error: null, loading: true, success: null }
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: 'Project deleted successfully!'
      }
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      }
    case DELETE_PROJECT_RESET:
      return { ...state, error: null, loading: false, success: null }
    default:
      return state
  }
}
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
    case ADD_PROJECT_RESET:
      return { ...state, loading: false, error: null, project: null }
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
