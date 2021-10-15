import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  LOG_OUT,
} from "../constants";

export const getProjectsReducers = (
  state = { loading: false, error: null, projects: null },
  action
) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true, error: null, projects: null };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projects: action.payload,
      };
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        projects: null,
      };
    case LOG_OUT:
      return { loading: false, error: null, projects: null };
    default:
      return state;
  }
};
