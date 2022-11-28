import axios from 'axios'
import * as types from './actionType'
import { BASE_URL } from "../utils/constans";
export const getJobs = (quizzes) => ({
  type: types.GET_JOBS,
  payload: quizzes,
})
export const getQuestion = (questions) => ({
  type: types.GET_QUESTIONS,
  payload: questions,
})
export const postQuestion = (questions) => ({
  type: types.POST_QUESTIONS,
  payload: questions,
})
// export const postFile = (files) = ({
//   type: types.POST_FILE,
//   payload: files
// })
export const postJobs = (quizzes) => ({
  type: types.POST_JOBS,
  payload: quizzes,
})
export const getAllData = (alldatas) => ({
  type: types.GET_ALL_DATA,
  payload: alldatas,
})
// export const putQuestion = (questions) = ({
//   type: types.PUT_QUESTIONS,
//   payload: questions
// })
export const accessToken = localStorage.getItem('accesstoken')
export const instance = axios.create({
  Authorization: `Bearer ${accessToken}`,
  baseURL: BASE_URL,
  accept: '*/*',
  'Content-Type': 'application/javascript',
  'Access-Control-Allow-Origin': '*'

})

export const loadJobs = () => {
  return function (dispatch) {
    instance
      .get('api/v1/quiz')
      .then((res) => {
        dispatch(getJobs(res?.data.data))
      })
      .catch((err) => console.log(err))
  }
}
