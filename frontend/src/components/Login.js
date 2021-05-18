import React, { Fragment, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./Login.css";
import Header from "./Header";

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
    if(localStorage.userid){
        return <Redirect to='/CoinSummary'/>
    }
    return <Fragment>
        <>
            <Header/>
            <div className="signForm">
                <div className="container bx">
                    <div className="col-6">
                        <img className="loginImg" src="media/cryto.jpg" alt="alt image" />
                    </div>
                    <div className="col-6">
                        <h1 className="large text-primary">Sign In</h1>
                        <p className="lead"><i className="fas fa-user"></i> Sign into your Account</p>
                        <form className="form" onSubmit= {e => onSubmit(e)}>
                            <div className="form-group">
                            <TextField
                                required
                                type="email"
                                id="email"
                                label="E Mail"
                                className="inpb"
                                value={email} 
                                name="email" 
                                onChange={e => onChange(e)} 
                                variant="outlined"
                            />
                            </div>
                            <div className="form-group">
                            <TextField
                                required
                                type="password"
                                id="password"
                                label="Password"
                                className="inpb"
                                value={password} 
                                name="password" 
                                onChange={e => onChange(e)} 
                                variant="outlined"
                            />
                            </div>
                            <Button type="submit" variant="contained" color="primary"  value="Login">
                                Log In
                            </Button>
                        </form>
                        <p className="my-1">
                            Don't have an account? <Link to="/register" className="themeText">Sign Up</Link>
                        </p>
                    </div>

                </div>
            </div>
        </>
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


