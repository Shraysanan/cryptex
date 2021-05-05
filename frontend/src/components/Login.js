import React, { Fragment, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {

    const [formData, SetFormData] = useState({
        email:'',
        password:'',
    });

    const {email, password} = formData;

    //use name parameter of every input field and set its state to the current state of the field
    const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async e =>{
        e.preventDefault(); //since its a submit
          login(email, password);
        }
    if(isAuthenticated){
        return <Redirect to='/watchlist'/>
    }
    return <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into your Account</p>
            <form className="form" onSubmit= {e => onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} 
                    onChange={e => onChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login"/>
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>

        </Fragment>
};

login.PropTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapstatetoprop = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapstatetoprop,{login})(Login);

