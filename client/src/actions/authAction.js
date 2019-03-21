import { GET_ERRORS } from './types'
import axios from 'axios'
import { setAuthToken } from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { SET_CURRENT_USER } from '../actions/types'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    // Redirect to login
    .then(res => history.push('/login'))
    // Cath errors with action dispatch
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Extract token value from res.data
      const { token } = res.data

      // Set iten in localStorage
      localStorage.setItem('jwtToken', token)
      console.log(token)
      console.log(res.data)
      setAuthToken(token)

      // Decode token
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    // Catch errors with Errors action disptach
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// SET CURRENT USER
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
// Set isAuthenticated to false by sending an empty object
  dispatch(setCurrentUser({}))
}
