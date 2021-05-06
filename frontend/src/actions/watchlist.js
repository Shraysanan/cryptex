import axios from 'axios';
import {GETWATCHLIST, WATHCLISTERROR} from './Types';
// import setauthtoken from '../utils/setauthtoken';

import setauthtoken from '../utils/setauthtoken';

export const getWatchList = (userid) => async (dispatch) => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid
        }
    }
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    if(localStorage.userid){
        axios.defaults.headers.common['userid'] = localStorage.userid;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    console.log('inside action',localStorage.userid,localStorage.token);

    try {
        // console.log('inside action')
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

export const putWatchList = (mywatchlist) => async (dispatch) => {
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    if(localStorage.userid){
        axios.defaults.headers.common['userid'] = localStorage.userid;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    console.log('inside action',localStorage.userid,localStorage.token);
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid
        }
    }
    const body = JSON.stringify({mywatchlist});
    console.log(body);

    try {
        console.log('inside action')
        const res = await axios.put('http://localhost:5000/watchlist', body, config);
        
        console.log('res'+res);
        
    } catch (err) {
        console.log(err); 
    }
}
