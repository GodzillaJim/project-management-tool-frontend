import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS
} from '../constants'
import axios from 'axios'
import seed from '../../data/seed'

const getProjectsUrl = 'http://127.0.0.1:8080/api/v1/project/all'
const addProjectUrl = 'http://127.0.0.1:8080/api/v1/project'
const deleteProjectUrl = 'http://127.0.0.1:8080/api/v1/project'

export const deleteProjectAction = (pid) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST })
    await axios.delete(deleteProjectUrl + '/' + pid)
    dispatch({ type: DELETE_PROJECT_SUCCESS })
    dispatch(getProjectsAction())
  } catch (e) {
    dispatch({ type: DELETE_PROJECT_FAIL, payload: e })
  }
}
export const addProjectAction = (project) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROJECT_REQUEST })
    const { data } = await axios.post(addProjectUrl, project)
    dispatch({ type: ADD_PROJECT_SUCCESS, payload: data })
  } catch (e) {
    dispatch({ type: ADD_PROJECT_FAIL, payload: e })
  }
}
export const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST })
    const { data } = await axios.get(getProjectsUrl)
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_PROJECTS_FAIL, payload: error })
  }
}
export const seedAction = async () => {
  try {
    const data = seed()
    data.map(async project => {
      const { data: d } = await axios.post(addProjectUrl, project)
      return d
    })
  } catch (e) {
    console.log(e)
  }
}
