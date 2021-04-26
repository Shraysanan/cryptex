import axios from 'axios';
import { setAlert } from "./alert.js";
import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
} from './Types'
// import setauthtoken from '../utils/setauthtoken';


//load user

export const loaduser = () => async dispatch =>{
    // if(localStorage.token){
    //     setauthtoken(localStorage.token)
    // }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: AUTH_ERROR
        })        
    }
}

// Register user

export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/user', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loaduser());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAILURE
        });
    }
}

//LOGIN USER

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
         dispatch(loaduser());
    } catch (err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAILURE
        });
    }
}

// logout action and clear profiles

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT})
};

