import * as constants from '@/redux/constants'
import axios from '@/lib/axios'

export const getTags = () => {
  return dispatch =>
    axios.get('/tag').then(res => {
      dispatch({ type: constants.TAG_GETLIST, payload: res.results })
    })
}

export const getCategories = () => {
  return dispatch =>
    axios.get('/category').then(res => {
      dispatch({ type: constants.CATEGORY_GETLIST, payload: res.results })
    })
}

