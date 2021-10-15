import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from "../constants";
import axios from "axios";

const getProjectsUrl = "http://127.0.0.1:8080/api/v1/project/all";

export const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });
    const { data } = await axios.get(getProjectsUrl);
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PROJECTS_FAIL, payload: error });
  }
};
