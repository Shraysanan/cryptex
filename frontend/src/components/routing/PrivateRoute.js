import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

// const privateroute = ({component: Component,auth:{isAuthenticated, loading }, ...rest }) => (
//     <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login' />): <Component {...props}/> } />
// )

const privateroute = ({component: Component,auth:{isAuthenticated, loading }, ...rest }) => (
    <Route {...rest} render={props => localStorage.userid ? <Component {...props}/> :(<Redirect to='/login' />)}/>
)

privateroute.propTypes = {
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
    auth: state.auth
})
export default connect (mapStateToProps) (privateroute)
