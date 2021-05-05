import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {register} from '../actions/auth';
import PropTypes from 'prop-types'


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
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit= {e => onSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" value={name} onChange={e => onChange(e)} name="name" required />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
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
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    minLength="6"
                    value={password2} 
                    onChange={e => onChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an ascount? <Link to="/login">Sign In</Link>
            </p>

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

