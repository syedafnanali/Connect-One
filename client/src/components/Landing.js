import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Landing extends Component {
  componentDidMount () {
    if (this.props.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }
  render () {
    return (
      <div className='landing ' style={{ marginTop: '0px' }}>
        <div className='dark-overlay landing-inner text-light '>
          <div className='container '>
            <div className='row mt-5'>
              <div className='col-md-12 text-center mt-5'>
                <h1 className='display-3 mb-4 mt-5'>Developer Connector</h1>
                <p className='lead'>
                  {' '}
                  Create a developer profile/portfolio, share posts and get help from other developers
                </p>
                <hr />
                <Link to='/register' className='btn btn-lg btn-info mr-2'>
                  Sign Up
                </Link>
                <Link to='/login' className='btn btn-lg btn-light'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing)
