import axios from 'axios';
import { setAlert } from "./alert.js";
import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    GETWATCHLIST,
    WATHCLISTERROR,
    LOGOUT
} from './Types'
import setauthtoken from '../utils/setauthtoken';

//load user

export const loaduser = () => async dispatch =>{
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    try {
        const res = await axios.get('http://localhost:5000/login');
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
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        console.log(body);

        const res = await axios.post('http://localhost:5000/register', body, config);
        console.log('res'+res);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        // dispatch(loaduser());
    } catch (err) {
        if(err){
            console.log(err);
        }

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            console.log(errors);
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
        console.log(body);
        console.log('in actions');
        const res = await axios.post('http://localhost:5000/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        //  dispatch(loaduser());
    } catch (err) {;

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAILURE
        });
    }
}

export const getWatchList = () => async (dispatch) => {

    try {
        console.log('inside action')
        const res = await axios.get('http://localhost:5000/watchlist');
        console.log('res'+res);
        dispatch({
            type: GETWATCHLIST,
            payload: res.data
        });

        
    } catch (err) {
        dispatch({
            type: WATHCLISTERROR,
            payload:{msg: err.response.statueText, status: err.response.status}
        })
        if(err){
            console.log(err);
        }
        
    }
}



// logout action and clear profiles

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT})
};

