import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {register} from '../actions/auth';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import "./register.css";


const Register = ({setAlert, register, isAuthenticated}) => { 

    const [formData, SetFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name, email, password, password2} = formData;

    //use name parameter of every input field and set its state to the current state of the field
    const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async e =>{
        e.preventDefault(); //since its a submit
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');//pass the string in the actions/alerts
        }else {
        //    console.log('Success');
           register({name, email, password});
        }
    }
    //redirect if success
    if(isAuthenticated){
        return <Redirect to='/watchlist'/>
    }
    return <Fragment>
        <div className="signForm">
            <div className="container container1 bx">
                <div className="col-6 col-sm-7 col-md-6">
                    <img className="loginImg" src="media/exchange.jpg" alt="alt image" />
                </div>
                <div className="col-6 col-sm-5 col-md-6">
                    <h1 className="large themeText" >Sign Up</h1>
                    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                    <form className="form" onSubmit= {e => onSubmit(e)}>
                        <div className="form-group">
                        <TextField
                            required
                            id="name"
                            label="Name"
                            value={name} 
                            name="name" 
                            onChange={e => onChange(e)} 
                            variant="outlined"
                        />
                        </div>
                        <div className="form-group">
            
                        <TextField
                            required
                            id="email"
                            type="email"
                            label="Email Id"
                            value={email} 
                            name="email" 
                            onChange={e => onChange(e)} 
                            variant="outlined"
                        />
                        <small className="form-text"
                            >This site uses Gravatar so if you want a profile image, use a
                            Gravatar email</small
                        >
                        </div>
                        <div className="form-group">
                        <TextField
                            required
                            id="password"
                            type="password"
                            label="Password"
                            value={password} 
                            name="password" 
                            onChange={e => onChange(e)} 
                            variant="outlined"
                        />
                        </div>
                        <div className="form-group">
                        <TextField
                            required
                            id="password2"
                            type="password"
                            label="Confirm Password"
                            value={password2} 
                            name="password2" 
                            onChange={e => onChange(e)} 
                            variant="outlined"
                        />
                        </div>
                        <Button type="submit" variant="contained" color="primary"  value="Register">
                            Register
                        </Button>
                    </form>
                    <p className="my-1">
                        Already have an ascount? <Link className="themeText" to="/login">Sign In</Link>
                    </p>                   
                </div>
 
                </div>
            </div>
        </Fragment>
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapstatetoprop = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

//state is null, action 'setAlert' allows us to use props.setAlert
export default connect(mapstatetoprop, {setAlert, register} )(Register);

