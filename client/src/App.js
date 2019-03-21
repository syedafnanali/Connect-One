import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import { Provider } from 'react-redux'
import store from './store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser, logoutUser } from './actions/authAction'
import { setAuthToken } from './utils/setAuthToken'

// Save userInfo in localStorage until user is logged-in
if (localStorage.jwtToken) {
  // Set auth token to auth header
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken)
  // dispath action to set the current user
  store.dispatch(setCurrentUser(decoded))

  // Logout user when token expires
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            {/* HOME PAGE/ LANDING PAGE ROUTE COMPONENTS */}
            <Route exact path='/' component={Navbar} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/' component={Footer} />

            {/* LOGIN ROUTE COMPONENTS */}
            <Route exact path='/login' component={Navbar} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/login' component={Footer} />

            {/* REGISTER ROUTE COMPONENTS */}
            <Route exact path='/register' component={Navbar} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/register' component={Footer} />

            {/* DASHBOARD ROUTE COMPONENTS */}
            <Route exact path='/dashboard' component={Navbar} />
            <Route exact path='/dashboard' component={Footer} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
