import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authAction'
import PropTypes from 'prop-types'

class Navbar extends Component {
  logout = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render () {
    const { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item' style={{ cursor: 'Pointer' }}>
          {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a class='nav-link' onClick={this.logout} href='#'>
            <img
              className='rounded-circle'
              src={isAuthenticated ? user.avatar : null}
              style={{ width: '25px', marginRight: '5px' }}
              alt={isAuthenticated ? user.name : null}
              title={'You should have a gravatar account for your picture to display here '}
            />
            Logout
          </a>
        </li>
      </ul>
    )
    const guestLinks = (
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item'>
          <Link class='nav-link' to='/register'>
            Sign Up
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    )

    return (
      <nav class='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div class='container'>
          <Link class='navbar-brand' to='/'>
            DevConnector
          </Link>
          <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#mobile-nav'>
            <span class='navbar-toggler-icon' />
          </button>

          <div class='collapse navbar-collapse' id='mobile-nav'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item'>
                <a class='nav-link' href='profiles.html'>
                  {' '}
                  Developers
                </a>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar)
